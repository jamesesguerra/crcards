import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { DragDropModule } from "@angular/cdk/drag-drop";

import routeConfig from "./routes";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { CardPageComponent } from "./pages/card-page/card-page.component";
import { FaqComponent } from "./components/faq/faq.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardItemComponent } from "./components/card-item/card-item.component";
import { CardEditComponent } from "./components/card-edit/card-edit.component";
import { CardVisualizerComponent } from "./components/card-visualizer/card-visualizer.component";
import { CardDragItemComponent } from "./components/card-drag-item/card-drag-item.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CardPageComponent,
    FaqComponent,
    FooterComponent,
    CardItemComponent,
    CardEditComponent,
    CardVisualizerComponent,
    CardDragItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routeConfig),
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
