import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  loggedUser: any;
  constructor(public router: Router) {}

  ngOnInit(): void {
    Auth.currentUserInfo().then((res) => {
      this.loggedUser = res?.username;
      console.log(Auth.currentUserPoolUser());
    });
  }

  async logOut() {
    try {
      Auth.signOut().finally(() => {
        this.router.navigate(['/auth/login']);
      });
    } catch (err) {
      console.log('Error in signout' + err);
    }
  }
}
