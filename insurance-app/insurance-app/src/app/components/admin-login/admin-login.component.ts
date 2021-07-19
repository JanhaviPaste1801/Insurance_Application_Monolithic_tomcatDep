import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.email, this.password)
    ) {
      this.loginservice.removeUserName();
      this.loginservice.setUserName("Admin");
      this.router.navigate(['admin-policy-list'])
      alert("Logged in Successfully")
      
     
    } else{
      alert("Bad Credentials")
      this.router.navigate(['admin-login'])
    }
      
     
  }

}
