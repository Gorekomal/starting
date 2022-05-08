import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticesComponent } from './practices/practices.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsOpratorsComponent } from './rxjs-oprators/rxjs-oprators.component';
import {  HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PracticesComponent,
    ReactiveformComponent,
    PipeComponent,
    TemplateformComponent,
    PromiseComponent,
    RxjsOpratorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
