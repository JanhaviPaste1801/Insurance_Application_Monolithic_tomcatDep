import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  healthinsurance = "healthinsurance.png";
  userId:number;
  constructor(private router : Router, private authservice : AuthService) { }

  ngOnInit(): void {
  }

  go(){
    this.router.navigate(['policy-list'])
  }

  explore(){
    this.userId = +this.authservice.getUserId();
    this.router.navigate(['user-holded-policies' ,this.userId]);
  }

}
