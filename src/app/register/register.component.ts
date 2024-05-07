import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
  constructor(private formBulider: FormBuilder) {
    this.registerForm = this.formBulider.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9]+@[a-zA-Z]+(\.[a-zA-Z]{2,})+$")
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern("^(?=.*?[A-Za-z])(?=.*?[@$!%*?&])(?=.*?[0-9]).{8,}$"),
        ],
      ],
      confpass: ['', Validators.required],
    });
  }
  handleRegisterForm() {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
  }
}
