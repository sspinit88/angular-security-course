import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../common/forms.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });


  }

  ngOnInit(): void {

  }


  signUp() {
    const
      val = this.form.value;

    if (val.email && val.password && val.password === val.confirm) {
      this.authService
        .signUp(val.email, val.password)
        .subscribe(
          res => console.log('File: signup.component.ts, Line - 42, res:', res),
          err => console.log('File: signup.component.ts, Line - 43, err:', err),
        );
    }


  }

}
