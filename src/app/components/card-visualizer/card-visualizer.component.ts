import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { Card } from "../../models/card";
import { CardService } from "../../services/card.service";

@Component({
  selector: "app-card-visualizer",
  templateUrl: "./card-visualizer.component.html",
})
export class CardVisualizerComponent implements OnInit, OnDestroy {
  router: Router = inject(Router);
  cardService: CardService = inject(CardService);
  cardSubscription: Subscription;
  cards: Card[];

  ngOnInit(): void {
    this.cardSubscription = this.cardService.cards.subscribe((cards) => {
      this.cards = cards;
    });
  }

  ngOnDestroy(): void {
    this.cardSubscription.unsubscribe();
  }

  onEditCards() {
    this.router.navigate(["cards/edit"]);
  }
}
