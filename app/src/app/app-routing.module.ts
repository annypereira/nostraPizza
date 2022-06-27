import { ShoppingCarComponent } from './pages/shopping-car/shopping-car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';


const routes: Routes = [
  {path:'menu', component: MenuComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'shopping-car', component: ShoppingCarComponent},
  {path: "", pathMatch: "full", component: HomeComponent},
  //Pizzero que se le cae la pizza
  // {path: "*",  component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
