import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private router:Router, private userService:UserService,private route:ActivatedRoute, private formBuilder: FormBuilder) { }
  user:User;
  userForm:FormGroup;
  ngOnInit(){
    this.userService.getUser(+this.route.snapshot.params['userId']).subscribe(
      (userInfo:User)=>{
        this.user = userInfo;
        console.log(this.user);
        this.userForm.get('firstName').setValue(this.user.firstName);
        this.userForm.get('lastName').setValue(this.user.lastName);
        this.userForm.get('city').setValue(this.user.city);
        this.userForm.get('phoneNo').setValue(this.user.phoneNo);
        this.userForm.get('password').setValue(this.user.password);
        this.userForm.get('email').setValue(this.user.email);
      }
    )

    this.userForm = this.formBuilder.group({
      firstName:['', [Validators.required, Validators.minLength(3)]],
      lastName:['', [Validators.required, Validators.minLength(3)]],
      city:['', [Validators.required, Validators.minLength(3)]],
      phoneNo:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  get firstName(){
    return this.userForm.get('firstName')
  }

  get lastName(){
    return this.userForm.get('lastName')
  }

  get city(){
    return this.userForm.get('city')
  }

  get phoneNo(){
    return this.userForm.get('phoneNo')
  }

  get password(){
    return this.userForm.get('password')
  }

  get email(){
    return this.userForm.get('email')
  }

  // UserName Validations
  nameFlag: boolean= false;
  validateName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.user.firstName);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }

  // UserPhone valdiations
  phoneFlag:boolean=false;
    validatePhone(){
        let phone=String(this.user.phoneNo);
        if(phone.length!=10){
            this.phoneFlag=true;
        }else{
            this.phoneFlag=false;
        }
    }

     //UserEmail Validation
     emailFlag:boolean=false;
     validateEmail(){
         var flag=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email);
         if(!flag){
             this.emailFlag=true;
         }else{
             this.emailFlag=false;
         }
     }

    buttonFlag:boolean=true;
    enableButton(){
        this.buttonFlag=this.nameFlag||this.phoneFlag||this.emailFlag;
    }

  onSubmit(){
    console.log(this.userForm.value)
    this.userForm.value.userId = this.route.snapshot.params['userId']
    this.userService.updateUser(this.userForm.value).subscribe(
      response =>{
        console.log('Success!', response),
        alert("Updated Successfully!")
        this.router.navigateByUrl('/user-list')
      },
      error=>console.log(error)
      
    );
  }

}
