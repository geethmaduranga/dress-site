import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
=======
import { UserDummyComponent } from './user-dummy/user-dummy.component';
>>>>>>> 2873c5f39af9dbb3fe0c2e0aec5972f4f48314d5

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    ProfileComponent
=======
    UserDummyComponent
>>>>>>> 2873c5f39af9dbb3fe0c2e0aec5972f4f48314d5
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
