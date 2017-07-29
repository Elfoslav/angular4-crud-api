import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonFormComponent } from './partials/person-form/person-form.component';
import { DeletePersonBtnComponent } from './partials/delete-person-btn/delete-person-btn.component';
import { PersonActionsComponent } from './partials/person-actions/person-actions.component';

const appRoutes: Routes = [
  { path: 'persons', component: PersonsListComponent },
  { path: 'persons/add', component: PersonAddComponent },
  { path: 'persons/edit/:id', component: PersonEditComponent },
  { path: 'persons/:id', component: PersonDetailComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    PersonDetailComponent,
    PersonAddComponent,
    PageNotFoundComponent,
    HomePageComponent,
    PersonEditComponent,
    PersonFormComponent,
    DeletePersonBtnComponent,
    PersonActionsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
