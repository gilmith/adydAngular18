import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { headerInterceptor } from './shared/header-interceptor.interceptor';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers :[
  ],

})
export class AppModule { }
