import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      firstName: fb.control(''),
      lastName: fb.control(''),
      email: fb.control(''),
      mobileNumber: fb.control(''),
      password: fb.control(''),
      rpassword: fb.control(''),
    });
  }

}
