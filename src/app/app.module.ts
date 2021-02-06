import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShopingListComponent } from './components/shopping/shoping-list/shoping-list.component';
import { ModalBlockComponent } from './shared/components/modal-block/modal-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShoppingComponent,
    ShopingListComponent,
    ModalBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
