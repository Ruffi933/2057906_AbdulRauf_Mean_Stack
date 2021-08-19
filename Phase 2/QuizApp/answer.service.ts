import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { questions } from './constants/questions';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private answersSubject = new BehaviorSubject<any>(new Array(questions.length).fill(-1));
 
  constructor() { }

  setAnswers(answers: number[]) { this.answersSubject.next(answers); }
  get answers() { return this.answersSubject.value; }
}
