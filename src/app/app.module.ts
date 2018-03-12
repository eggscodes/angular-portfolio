import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
import { MatIconRegistry } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FlexLayoutModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
