import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AddingQuestionComponent } from './adding-question/adding-question.component';
import { FavQuestionListComponent } from './fav-question-list/fav-question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    AddingQuestionComponent,
    FavQuestionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
