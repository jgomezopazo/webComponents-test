import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteCustomComponent } from './components/componente-custom/componente-custom.component';

import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    ComponenteCustomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //descomentar bootstrap para levantar como app angular
  bootstrap: [AppComponent],
  //entryComponents: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    let custom = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define("custom-example", custom);
  }
 }
