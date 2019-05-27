import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//--------------------Own Modules and services imported-----------------------//
import { AppComponent } from './app.component';
import { ShoppingService } from './shopping-list/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipiesService } from './recipies/recipies.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ShoppingModule,
    AuthModule,
    CoreModule
  ],
  providers: [
    ShoppingService,
     RecipiesService,
     DataStorageService,
     AuthService,
     AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
