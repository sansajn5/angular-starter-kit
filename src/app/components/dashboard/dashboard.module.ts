import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from "../../core/core.module";
import { NgModule } from "@angular/core";

const DASHBOARAD_COMPONENTS = [
    DashboardComponent,
    HomeComponent,
]

@NgModule({
    imports: [
        DashboardRoutingModule,
        CoreModule
    ],
    declarations: [
      ...DASHBOARAD_COMPONENTS,
    ],
    providers: [],
})
export class DashboardModule {
}