import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPolicyComponent } from './components/add-policy/add-policy.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPolicyDetailsComponent } from './components/admin-policy-details/admin-policy-details.component';
import { AdminPolicyListComponent } from './components/admin-policy-list/admin-policy-list.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminUserAndPolicyDetailsComponent } from './components/admin-user-and-policy-details/admin-user-and-policy-details.component';
import { CarosolComponent } from './components/carosol/carosol.component';
import { HomeBackgroundComponent } from './components/home-background/home-background.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginHomePageComponent } from './components/login-home-page/login-home-page.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchPolicyComponent } from './components/search-policy/search-policy.component';
import { UpdatePolicyComponent } from './components/update-policy/update-policy.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserClaimedPolicyDetailsComponent } from './components/user-claimed-policy-details/user-claimed-policy-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserHoldedPoliciesComponent } from './components/user-holded-policies/user-holded-policies.component';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UsersPolicyListComponent } from './components/users-policy-list/users-policy-list.component';

const routes: Routes = [
 {path:'' , component:HomeBackgroundComponent},
  { path: 'register', component: HomePageComponent },
  { path: 'login', component: LoginHomePageComponent },
  {path: 'user-login' , component:UserLoginComponent},
  {path: 'admin-home-page' , component:AdminHomePageComponent},
  {path: 'admin-login' , component:AdminLoginComponent},
  {path:'add-Policy', component:AddPolicyComponent},
  {path:'policy-list', component:PolicyListComponent},
  {path:'policyDetails/:policyId', component:PolicyDetailsComponent},
  {path:'updatePolicy/:policyId', component:UpdatePolicyComponent},
  {path:'user-home-page', component:UserHomePageComponent},
  {path:'user-list', component:UserListComponent},
  {path:'users-policy-list', component:UsersPolicyListComponent},
  {path:'search-policy', component:SearchPolicyComponent},
  {path:'userDetails/:userId', component:UserDetailsComponent},
  {path:'updateUser/:userId', component:UpdateUserComponent},
  {path:'admin-policy-list', component:AdminPolicyListComponent},
  {path:'admin-policy-details/:policyId', component:AdminPolicyDetailsComponent},
  {path:'admin-userpolicy-details', component:AdminUserAndPolicyDetailsComponent},
  {path:'user-holded-policies/:userId', component:UserHoldedPoliciesComponent},
  {path:'corosol', component:CarosolComponent},
  {path:'user-claimed-policy-details/:userId/:planId' , component:UserClaimedPolicyDetailsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'admin-profile',component:AdminProfileComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

