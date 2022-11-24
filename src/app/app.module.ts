import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorLoginComponent } from './administrator-login/administrator-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdministratorLoginComponent
  },
  {
    path:"user-registration",
    component:UserRegistrationComponent
  },
  {
    path:"user-login",
    component:UserLoginComponent
  },
  {
    path:"entry",
    component:BookEntryComponent
  },
  {
    path:"view",
    component:BookViewComponent
  },
  {
    path:"search",
    component:BookSearchComponent
  },
  {
    path:"delete",
    component:BookDeleteComponent
  },
  {
    path:"edit",
    component:BookEditComponent
  },
  {
    path:"issue",
    component:BookIssueComponent
  }
  

]

@NgModule({
  declarations: [
    AppComponent,
    AdministratorLoginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    BookEntryComponent,
    BookViewComponent,
    BookSearchComponent,
    BookDeleteComponent,
    BookEditComponent,
    BookIssueComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
