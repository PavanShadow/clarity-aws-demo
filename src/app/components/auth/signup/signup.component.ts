import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { AuthUser } from 'src/app/models/auth.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authUser: AuthUser;
  constructor() {}

  signUpForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  async signUp(formValue: AuthUser) {
    this.authUser = formValue;
    const { username, password, fullname, email, role } = this.authUser;

    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          fullname,
          role,
        },
      });
      console.log({ user });
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
}
