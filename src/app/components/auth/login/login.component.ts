import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  async login(formValue) {
    const { username, password } = formValue;
    try {
      const user = await Auth.signIn(username, password).then((res) => { 
        if (res) {
          this.router.navigate(['/']);
        }
      });
    } catch (error) {
      console.log('error signing in', error);
    }
  }
}
