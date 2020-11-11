import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { ApprootComponent } from './layouts/approot/approot.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HomeSliderComponent } from './sliders/home-slider/home-slider.component';
import { WorkGalleryComponent } from './sliders/work-gallery/work-gallery.component';
import { CustomerReviewsComponent } from './sliders/customer-reviews/customer-reviews.component';
import { TrademarksComponent } from './sliders/trademarks/trademarks.component';
import { AdminReviewsComponent } from './admin/admin-review/admin-reviews.component';



// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin', component: AdminReviewsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contacts', component: ContactComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    ApprootComponent,
    SidebarComponent,
    HomeSliderComponent,
    WorkGalleryComponent,
    CustomerReviewsComponent,
    TrademarksComponent,
    AdminReviewsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [ApprootComponent]
})
export class AppModule { }
