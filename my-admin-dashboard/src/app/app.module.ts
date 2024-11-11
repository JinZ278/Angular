import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  CButtonModule,
  CCardModule,
  CFooterModule,
  CHeaderModule,
  CIconModule,
  CSidebarModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CButtonModule,
    CCardModule,
    CFooterModule,
    CHeaderModule,
    CIconModule,
    CSidebarModule,
    IconModule
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }