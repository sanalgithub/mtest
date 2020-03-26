import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  constructor(public router:Router)  { }
  ngOnInit(): void {
    // add all FormControls to FormGroup
    this.form = new FormGroup({
     
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  onSubmit(form: FormGroup) {
    var params = {
      
      email:form.value.email,
      password:form.value.password
    }

    console.log(JSON.stringify(params));
    this.router.navigate(['marker'])//Navigation routes to next components after clicking button//
 
   
    

  }
}
