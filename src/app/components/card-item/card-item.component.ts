import { Component, OnInit, OnDestroy, Input, inject } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { Subscription } from "rxjs";

import { Card } from "../../models/card";
import { CardService } from "../../services/card.service";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
})
export class CardItemComponent implements OnInit, OnDestroy {
  @Input() cardNumber: number;
  @Input() card: Card;
  cardSubscription: Subscription;
  cardService: CardService = inject(CardService);
  cardForm: FormGroup;

  ngOnInit(): void {
    this.initializeForm();

    this.cardSubscription = this.cardService.cardsAreSaved.subscribe(() => {
      this.card.name = this.cardForm.value.class;
      this.card.responsibilities = this.cardForm.value.responsibilities;
      this.card.collaborators = this.cardForm.value.collaborators;
    });
  }

  ngOnDestroy(): void {
    this.cardSubscription.unsubscribe();
  }

  initializeForm() {
    this.cardForm = new FormGroup({
      class: new FormControl(this.card.name),
      responsibilities: new FormArray([]),
      collaborators: new FormArray([]),
    });

    if (this.card.responsibilities.length == 0) {
      this.onAddResponsibility();
      this.onAddCollaborator();
    } else {
      for (let responsibility of this.card.responsibilities) {
        this.onAddResponsibility(responsibility);
      }

      for (let collaborator of this.card.collaborators) {
        this.onAddCollaborator(collaborator);
      }
    }
  }

  get responsibilities() {
    return this.cardForm.controls["responsibilities"] as FormArray;
  }

  get collaborators() {
    return this.cardForm.controls["collaborators"] as FormArray;
  }

  onAddResponsibility(value: string | null = null) {
    const control = new FormControl(value);
    (<FormArray>this.cardForm.get("responsibilities")).push(control);
  }

  onRemoveResponsibility(index: number) {
    (<FormArray>this.cardForm.get("responsibilities")).removeAt(index);
  }

  onAddCollaborator(value: string | null = null) {
    const control = new FormControl(value);
    (<FormArray>this.cardForm.get("collaborators")).push(control);
  }

  onRemoveCollaborator(index: number) {
    (<FormArray>this.cardForm.get("collaborators")).removeAt(index);
  }

  onDeleteCard() {
    this.cardService.deleteCard(this.card.id);
  }
}
