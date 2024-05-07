import { Component, inject, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Card } from "../../models/card";
import { CardService } from "../../services/card.service";

@Component({
  selector: "app-card-page",
  templateUrl: "./card-page.component.html",
  styleUrl: "./card-page.component.css",
})
export class CardPageComponent implements OnInit, OnDestroy {
  cardService: CardService = inject(CardService);
  cardSubscription: Subscription;
  cards: Card[] = [];

  ngOnInit(): void {
    this.cardSubscription = this.cardService.cards.subscribe((cards) => {
      this.cards = cards;
    });
  }

  ngOnDestroy(): void {
    this.cardSubscription.unsubscribe();
  }

  onVisualizeCards() {
    this.cardService.saveCards();
  }

  onAddCard() {
    this.cardService.addCard();
  }
}
