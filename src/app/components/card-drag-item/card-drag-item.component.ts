import { Component, Input } from "@angular/core";

import { Card } from "../../models/card";

@Component({
  selector: "app-card-drag-item",
  templateUrl: "./card-drag-item.component.html",
  styleUrl: "./card-drag-item.component.css",
})
export class CardDragItemComponent {
  @Input() card: Card;
}
