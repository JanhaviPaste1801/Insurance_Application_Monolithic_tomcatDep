import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AddPolicyComponent } from './components/add-policy/add-policy.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { UpdatePolicyComponent } from './components/update-policy/update-policy.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { UsersPolicyListComponent } from './components/users-policy-list/users-policy-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPolicyComponent } from './components/search-policy/search-policy.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ClaimedPolicyPageComponent } from './components/claimed-policy-page/claimed-policy-page.component';
import { LoginHomePageComponent } from './components/login-home-page/login-home-page.component';
import { HomeBackgroundComponent } from './components/home-background/home-background.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AdminPolicyListComponent } from './components/admin-policy-list/admin-policy-list.component';
import { AdminPolicyDetailsComponent } from './components/admin-policy-details/admin-policy-details.component';
import { AdminUserAndPolicyDetailsComponent } from './components/admin-user-and-policy-details/admin-user-and-policy-details.component';
import { UserHoldedPoliciesComponent } from './components/user-holded-policies/user-holded-policies.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { CarosolComponent } from './components/carosol/carosol.component';
import { UserClaimedPolicyDetailsComponent } from './components/user-claimed-policy-details/user-claimed-policy-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    UserLoginComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AddPolicyComponent,
    PolicyListComponent,
    UpdatePolicyComponent,
    UserListComponent,
    PolicyDetailsComponent,
    UserHomePageComponent,
    UsersPolicyListComponent,
    FilterPipe,
    SearchPolicyComponent,
    UserDetailsComponent,
    ClaimedPolicyPageComponent,
    LoginHomePageComponent,
    HomeBackgroundComponent,
    UpdateUserComponent,
    AdminPolicyListComponent,
    AdminPolicyDetailsComponent,
    AdminUserAndPolicyDetailsComponent,
    UserHoldedPoliciesComponent,
    FooterComponent,
    AdminHomePageComponent,
    CarosolComponent,
    UserClaimedPolicyDetailsComponent,
    ProfileComponent,
    AdminProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
