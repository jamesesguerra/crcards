import { Component, inject, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { Card } from "../../models/card";
import { CardService } from "../../services/card.service";

@Component({
  selector: "app-card-edit",
  templateUrl: "./card-edit.component.html",
})
export class CardEditComponent implements OnDestroy {
  router: Router = inject(Router);
  cardService: CardService = inject(CardService);
  cardSubscription: Subscription;
  cards: Card[] = [];

  ngOnInit(): void {
    this.cardSubscription = this.cardService.cards.subscribe((cards) => {
      this.cards = cards;

      if (this.cards.length === 0) {
        this.onAddCard();
      }
    });
  }

  ngOnDestroy(): void {
    this.cardSubscription.unsubscribe();
  }

  onVisualizeCards() {
    this.cardService.saveCards();
    this.router.navigate(["cards/visualize"]);
  }

  onAddCard() {
    this.cardService.addCard();
  }

  resetCards() {
    this.cardService.emptyCards();
  }
}
