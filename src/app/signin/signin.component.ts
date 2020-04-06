import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  
  constructor(public router:Router)  { }
  ngOnInit(): void {
    this.myForm = new FormGroup({
     
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  
  onSubmit(myForm: FormGroup) {
    console.log('Email', myForm.value.email);
    console.log('password', myForm.value.password);
    if(myForm.value.email === 'admin' && myForm.value.password === 'password'){
      this.router.navigate(['marker'])
    }
    else{
      alert('Username and Password is invalid')
    }
  }
}
