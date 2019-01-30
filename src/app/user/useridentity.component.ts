import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import {  } from '@angular/forms';

@Component({
  selector: 'app-useridentity',
  templateUrl: './useridentity.component.html',
  styleUrls: ['./useridentity.component.css']
})
export class UseridentityComponent implements OnInit {
  
  idForm:FormGroup;
  authType: String = '';
  title: String = '';
  //errors: Errors = new Errors();
  isSubmitting = false;

  constructor(private route: ActivatedRoute,private router: Router,private fb:FormBuilder) { 

    this.idForm= this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'user') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.idForm.addControl('username', new FormControl());
      }
    }); 
  }

  submitForm(){
   console.log(this.idForm.value)
   
  }

}
