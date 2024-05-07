import { Component, inject, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { CardService } from "../../services/card.service";

const INITIAL_CARD_COUNT = 1;

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
})
export class HomepageComponent implements OnInit {
  cardService: CardService = inject(CardService);
  router: Router = inject(Router);
  cardForm: FormGroup = new FormGroup({
    cardCount: new FormControl(INITIAL_CARD_COUNT, [
      Validators.required,
      Validators.min(Number.MIN_VALUE),
      Validators.pattern("^[0-9]*$"),
    ]),
  });

  ngOnInit(): void {
    this.cardService.emptyCards();
  }

  onSubmit() {
    this.cardService.initializeCards(this.cardForm.value.cardCount);
    this.router.navigate(["cards/edit"]);
  }
}
