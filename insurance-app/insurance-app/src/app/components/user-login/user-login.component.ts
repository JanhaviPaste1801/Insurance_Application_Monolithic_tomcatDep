import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  userDetails: User;
  userInfo: User;

  userr:User=new User();



  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    // this.userForm = new FormGroup({
    //   username: new FormControl('', Validators.required),
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6),
    //   ]),
    // });

    // this.activatedRoute.queryParams.subscribe(
    //   (params: Params) => (this.params = params)
    // );

    // this.userForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    //   password: ['', [Validators.required, Validators.minLength(8),
    //   Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{8,}')]]
    // })
  }

  get email() {
    return this.userForm.get('email')
  }
  get password() {
    return this.userForm.get('password')
  }


  login = false

  isLoggedIn : boolean;
  onSubmit()  : boolean{

    //   this.userService.userlogin(this.userr.email, this.userr.password).subscribe(data => {
    //     this.login=true;
    //     alert("Logged In Successfully")
    //     this.router.navigate(['user-home-page'])
    //   }, error => {
    //     alert("Bad Credentials")
    //     this.router.navigate(['user-login']);
    //   });
    //   return this.login;
    // }
    
      // console.log(this.userForm.value);
      //this.user = this.userForm.value;
      this.isLoggedIn=false;
      this.userService.userlogin(this.userr.email, this.userr.password).subscribe(
        (flag: boolean) => {
          console.log(flag);
          if (flag) {
            alert("Login Successful!")
            this.isLoggedIn=true;
            this.userService.getUserId(this.userr.email).subscribe(
              (user: User) => {
                this.userInfo = user;
                console.log(this.userInfo);
                this.authService.removeUserId();
                this.authService.setUserId(this.userInfo.userId);
                this.authService.removeUserName();
                this.authService.setUserName(this.userInfo.firstName);
              })
            
            this.router.navigate(['user-home-page'])
          }
          else {
            alert("Invalid username or password!")
            this.isLoggedIn=false;
            this.router.navigate(['user-login'])
          }
        }
      );
    return this.isLoggedIn;
  }
}

