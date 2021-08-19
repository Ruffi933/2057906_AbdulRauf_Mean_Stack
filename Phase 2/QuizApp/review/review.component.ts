import { Router } from '@angular/router';
import { AnswerService } from './../answer.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { questions } from '../constants/questions';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  
  questions = questions;
  form: FormGroup = this.fb.group({
    answers: this.fb.array([  ...this.questions.map((q, i) => this.fb.control({value: -1, disabled: true}, [Validators.required]))  ])
  });

  isSubmit = false;
  correctAnswers = 0
  constructor(
    private fb: FormBuilder,
    private answerService: AnswerService,
    private router: Router
  ) {
    if(this.answerService.answers[0]==-1) { 
      this.router.navigate(['/'])
    } else {
      this.form.controls.answers.setValue([...this.answerService.answers])
      this.correctAnswers = this.answers.filter((e: number, i: number) => e === this.questions[i].answer).length;
    }
  }

  get answers() {return this.answerService.answers}
 
  anserForm(i : number) { return (this.form.controls.answers as FormArray).controls[i] as FormControl }
  onSubmitAnswers() {
    this.isSubmit = true;
    if(this.form.valid) {
      this.answerService.setAnswers(this.form.value.answers);
    }
  }

  

}
 

