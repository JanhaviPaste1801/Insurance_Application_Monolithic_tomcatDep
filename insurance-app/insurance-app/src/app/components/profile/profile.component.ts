import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService, private userService:UserService, private route :ActivatedRoute) { }

  user:any

  userId:number

  ngOnInit(): void {
    this.userService.getUser(+this.authService.getUserId()).subscribe(
      data =>{
        this.user =data;
        console.log(this.user)
      },
      error=>{
        console.log(error)
      }
    )
  }

  explore(){
    this.userId = +this.authService.getUserId();
    this.router.navigate(['user-holded-policies' ,this.userId]);
  }

  go(){
    this.router.navigate(['user-home-page'])
  }

}
