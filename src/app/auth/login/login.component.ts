import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(fb: FormBuilder){
    this.loginForm = fb.group({
      email: fb.control ('', [Validators.required]),
      password: fb.control ('',[Validators.required]),
   });

  }

}
