import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {

  public formData: any = {
    username: '',
    email: '',
    password: '',
  };
  public showMessage: boolean = false;
  valid: boolean = true;
  passwordNotValid = false;

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(formdata: NgForm) {
    if (formdata.value.password.indexOf('!') > 0) {

    } else {
      this.valid = false;
      this.passwordNotValid = true;
    }
    console.log('Submitted Form', formdata);
    console.log('Form Data Object', this.formData);

    // this.formData = formdata.value;
    // this.showMessage = true;
  }

  resetForm(formdata: NgForm) {
    formdata.reset();
  }
}
