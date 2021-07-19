import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home-page',
  templateUrl: './login-home-page.component.html',
  styleUrls: ['./login-home-page.component.css']
})
export class LoginHomePageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  admin(){
    this.router.navigate(['admin-login'])
  }

  user(){
    this.router.navigate(['user-login'])
  }
}
