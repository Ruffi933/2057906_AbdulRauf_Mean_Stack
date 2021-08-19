import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReviewComponent } from './review/review.component';
import { AnswerService } from './answer.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
