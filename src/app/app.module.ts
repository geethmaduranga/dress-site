import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserDummyComponent } from './user-dummy/user-dummy.component';
import { TopDummyComponent } from './top-dummy/top-dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDummyComponent,
    TopDummyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
