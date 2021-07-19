import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public authService :AuthService) { }
 isLoggedIn:boolean
  user:string;
  userName :string;
  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    console.log(this.userName)
  }

  logout(): void {
    this.authService.removeUserName()
    console.log(this.userName)
     this.authService.logOutUserName()
     this.authService.logOutUserId()
     
    this.router.navigate(['/'])
  }

  profile(){
    if(this.authService.getUserName() === 'Admin')
    this.router.navigate(['admin-profile'])
    else this.router.navigate(['profile'])
  }

  userLoginFlag :boolean=false;
  isLoggedInUser() :boolean{
    this.user = this.authService.getUserId();
    if(this.user != null){
      this.userLoginFlag = true;
    }
    return this.userLoginFlag;
  }


userLogoutFlag :boolean = false;
  isLoggedOut():boolean{
    return this.userLogoutFlag = this.authService.removeUserId();
  }

  // adminLoginFlag:boolean = false;
  // isAdminLoggedIn():boolean{
  //   this.adminLoginFlag = this.authService.authenticate("admin@gmail.com","admin");
  //   console.log(this.adminLoginFlag);
  //   return this.adminLoginFlag
  // }

  isLoggedInFlag = this.authService.login;
  
  
}


