import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../common/forms.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  messagePerErrorCode = {
    loginfailed: 'Invalid credentials'
  };

  errors = [];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

    this.form = this.fb.group({
      email: ['test@gmail.com', Validators.required],
      password: ['Password10', Validators.required]
    });

  }

  ngOnInit() {

  }

  login() {

    const val = this.form.value;

    if (val.email && val.password) {

      this.authService
        .login(val.email, val.password)
        .subscribe(
          res => {
            console.log('File: login.component.ts, Line - 43, res:', res);
            this.router.navigate(['/lessons']);
          },
          err => console.log('File: login.component.ts, Line - 44, err:', err)
        );

    }


  }

}
