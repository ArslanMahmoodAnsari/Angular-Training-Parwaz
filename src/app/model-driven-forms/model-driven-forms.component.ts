import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {
  formData: any = {};

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  password = new FormControl('', [
    Validators.required,
    hasExclamationMark
  ]);

  loginForm: FormGroup = this.formBuilder.group({
    username: this.username,
    password: this.password
  });

  showMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  registerUser() {
    this.formData = this.loginForm.value;
    this.showMessage = true;
  }

  resetForm() {
    this.loginForm.reset();
  }
}

function hasExclamationMark(input: FormControl) {
  const hasExclamation = input.value.indexOf('!') >= 0;

  return hasExclamation ? null : { needsExclamation: true };
}
