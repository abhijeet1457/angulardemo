import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private router:Router) { }

  ngOnInit() {
    this.registerForm= new FormGroup(
      {
        Firstname:new FormControl('',Validators.required),
        Lastname:new FormControl('',Validators.required),
        Email:new FormControl('',Validators.required),
        UserName:new FormControl('',Validators.required),
        Password:new FormControl('',Validators.required),
        ConfirmPassword:new FormControl('',Validators.required)
      }
    )
  }


  onSubmit() {
    if(this.registerForm.valid)
    {
      console.log(this.registerForm.value);
      this.clearForm();
    }
    else{
      alert('please enter a valid values...');
    }
  }
  onCancel()
  {
    this.router.navigate(['/Home']);
  }

  clearForm()
  {
    this.registerForm.setValue({
    Firstname:'',
    Lastname:'',
    Email:'',
    UserName:'',
    Password:'',
    ConfirmPassword:''
    });
  }
}
