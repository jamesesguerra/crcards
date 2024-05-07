import { Routes } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { CardPageComponent } from "./pages/card-page/card-page.component";
import { CardEditComponent } from "./components/card-edit/card-edit.component";
import { CardVisualizerComponent } from "./components/card-visualizer/card-visualizer.component";

const routeConfig: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "cards",
    component: CardPageComponent,
    children: [
      { path: "edit", component: CardEditComponent },
      { path: "visualize", component: CardVisualizerComponent },
    ],
  },
];

export default routeConfig;
