import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';  



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'login failed';
  roles: string[] = [];
  public usernameerror = false;
  username:any;
  password:any;

  

  ngOnInit(): void {
    
  }
  changeuser(event: any){
    console.log(event.target.value)
    this.username = event.target.value

  }
  changepass(event: any){

    this.password = event.target.value
  }
  sendform(){
    if( this.username === undefined){
      alert("username is required")
    }
    if( this.password === undefined){
      alert("password is required")
    }
    if(this.password !== undefined){
      if(this.password.length < 6){
        alert("password must be greater than 6 characters")
      }
    }
    if(this.username !== undefined){
      if(this.username.length < 6){
        alert("username must be greater than 6 characters")
      }
    }
    if(this.username === "itachi" && this.password === "uchiha"){
      
      this.router.navigateByUrl('/home')

    }
  }

  // onSubmit(): void {
  //   const { username, password } = this.form;
  //   console.log("submitting")
  //   if(username === "itachi" && password === "uchiha"){
  //     alert("this is itachi")
  //     this.router.navigateByUrl('/home')

  //   }

   
    
  // }

  reloadPage(): void {
    window.location.reload();
  }
}


// <form
      
// name="form"


// novalidate
// >
// <div class="form-group">
//   <label for="username">Username</label>
//   <input
//     type="text"
//     class="form-control"
//     name="username"
//     angular
  
  
   
//   />
//   <div
//     class="alert alert-danger"
//     role="alert"
//     *ngIf="usernameerror"
//   >
//     Username is required!
//   </div>
// </div>
// <div class="form-group">
//   <label for="password">Password</label>
//   <input
//     type="password"
//     class="form-control"
//     name="password"
    
//     required
//     minlength="6"
 
//   />
//   <div
//     class="alert alert-danger"
//     role="alert"
    
//   >
//     <div *ngIf="password.errors.required">Password is required</div>
//     <div *ngIf="password.errors.minlength">
//       Password must be at least 6 characters
//     </div>
//   </div>
// </div>
// <div class="form-group">
//   <button class="btn btn-primary btn-block">
//     Login
//   </button>
// </div>
// <div class="form-group">
//   <div
//     class="alert alert-danger"
//     role="alert"
  
//   >
//     Login failed
//   </div>
// </div>
// </form>