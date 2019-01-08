import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm:FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        userName: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
      }
    )
  }
  

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.clearForm();
    }
    else {
      alert('please enter a valid values...');
    }
  }
  onCancel() {
    this.router.navigate(['/Home']);
  }
  clearForm() {
    this.loginForm.setValue({
      userName: '',
      password: ''
    });
  }
}
