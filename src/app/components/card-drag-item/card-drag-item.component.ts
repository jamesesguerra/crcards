import { Component, Input } from "@angular/core";

import { Card } from "../../models/card";

@Component({
  selector: "app-card-drag-item",
  templateUrl: "./card-drag-item.component.html",
})
export class CardDragItemComponent {
  @Input() card: Card;
}
