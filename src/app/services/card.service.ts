import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

import { Card } from "../models/card";
import uuidv4 from "../utils/uuid";

@Injectable({
  providedIn: "root",
})
export class CardService {
  cards = new BehaviorSubject<Card[]>([]);
  cardsAreSaved = new Subject<void>();

  constructor() {}

  initializeCards(count: number) {
    for (let i = 0; i < count; i++) {
      let newCard: Card = {
        id: uuidv4(),
        name: "",
        responsibilities: [],
        collaborators: [],
      };
      this.cards.value.push(newCard);
    }
  }

  emptyCards() {
    this.cards.next([]);
  }

  saveCards() {
    this.cardsAreSaved.next();
  }

  addCard() {
    this.cards.next([
      ...this.cards.value,
      { id: uuidv4(), name: "", responsibilities: [], collaborators: [] },
    ]);
  }

  deleteCard(id: string) {
    let filteredCards = this.cards.value.filter((card) => card.id !== id);
    this.cards.next(filteredCards);
  }
}
