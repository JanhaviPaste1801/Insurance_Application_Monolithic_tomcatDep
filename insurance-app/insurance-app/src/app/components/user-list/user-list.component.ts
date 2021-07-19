import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : Observable<User[]>
  constructor(private userService : UserService, private router : Router) { }


  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.users = this.userService.getUserList();
  }

  deleteUser(userId:number){
    this.userService.deleteUser(userId)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  userDetails(userId: number){
    this.router.navigate(['userDetails',userId]);
  }

  updateUser(userId:number){
    this.router.navigate(['updateUser', userId]);
  }
}
