import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn:boolean

  isAdminLogin : boolean=false
  authenticate(email, password) {
    if (email === "admin@gmail.com" && password === "admin") {
      sessionStorage.setItem('email', email)
      this.isAdminLogin = true
      console.log(this.isAdminLogin);
      return true;
    } else {
      this.isAdminLogin =false
      console.log(this.isAdminLogin);
      return false;
    }
    
  }

  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem('email')
  //   console.log(!(user === null))
  //   return !(user === null)
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userName')
    console.log(!(user === null))
    return !(user === null)
  }

  // logOut() {
  //   sessionStorage.removeItem('email')
  // }

  logOut() {
    sessionStorage.removeItem('userName')
  }

  flag : boolean=false
  setUserId(userId) {
    sessionStorage.setItem('userId', userId)
    console.log(userId)
    this.flag=true
    console.log(this.flag)
    return true;

}

// getUserId() {
//   let user = sessionStorage.getItem('userId')
//   console.log(user);
//   return user;
  
// }

isUserloggedin:boolean=false;
getUserId(){
  let user = sessionStorage.getItem('userId')
  //console.log(user);
  if(user==null){
    this.isUserloggedin=false;
   
  }
  else {
    this.isUserloggedin = true;
    console.log(this.isUserloggedin)
  }

  return user;
}

isRemoved:boolean=false;
removeUserId():boolean {
  sessionStorage.removeItem('userId')
  return this.isRemoved = true;
}

setUserName(userName){
  sessionStorage.setItem('userName',userName)
  console.log(userName)
  return true;
}

getUserName() {
  let user = sessionStorage.getItem('userName')
  console.log(user);
  return user;
  
}

removeUserName() {
  sessionStorage.removeItem('userName')
}

logOutUserName() {
  sessionStorage.removeItem('userName')
}

logOutUserId() {
  sessionStorage.removeItem('userId')
}

login:boolean = this.isAdminLogin || this.flag;


}
