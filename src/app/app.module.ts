import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { productReducer } from './product/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product/product.effects';

@NgModule({
  declarations: [AppComponent, ProductComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ product: productReducer }, {}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
