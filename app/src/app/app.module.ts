import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./core/footer/footer.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { ReservationsComponent } from "./pages/reservations/reservations.component";
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent, GalleryComponent, HomeComponent, MenuComponent, ReservationsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
