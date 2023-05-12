import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockAppLayoutComponent } from './mock-app-layout/mock-app-layout.component';
import { ImageContainerComponent } from './image-container/image-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MockAppLayoutComponent,
    ImageContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
