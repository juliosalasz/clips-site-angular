import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credential = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = 'Please Wait! We are logging you in';
  alertColor = 'blue';
  inSubmission = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.inSubmission = true;
    this.showAlert = true;
    this.alertMsg = 'Please Wait! We are logging you in';

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credential.email as string,
        this.credential.password as string
      );
    } catch (err) {
      this.alertMsg = 'An unexpected error occurred. Please try again later.';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }

    this.alertMsg = 'Success! You are now logged in!';
    this.alertColor = 'green';
  }
}
