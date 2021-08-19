import { AnswerService } from './../answer.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { questions } from '../constants/questions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {

  questions = questions;
  form: FormGroup = this.fb.group({
    answers: this.fb.array([  ...this.questions.map((q, i) => this.fb.control(-1, [Validators.required, invalidValue]))  ])
  });

  isSubmit = false;
  step = 0;

  constructor(
    private fb: FormBuilder,
    private answerService: AnswerService,
    private router: Router
  ) {
    console.log('form', this.form)
  }

 
  anserForm(i : number) { return (this.form.controls.answers as FormArray).controls[i] as FormControl }
  onSubmitAnswers() {
    this.isSubmit = true;
    console.log('this.form.value.answers', this.form.valid, this.form.value.answers)
    if(this.form.valid && this.step === 0) {
        this.step++;
        (this.form.controls.answers as FormArray).controls.forEach((control :any) => {control.disable()} )
      }else if(this.step !== 0) {
        this.answerService.setAnswers(this.form.value.answers);
        this.router.navigate(['/review']);
      }
 
  }


}
 
export function invalidValue(control: AbstractControl) {
      const value = +control.value;
      return value && value !== -1 || value === 0  ? null: {required:true};
}