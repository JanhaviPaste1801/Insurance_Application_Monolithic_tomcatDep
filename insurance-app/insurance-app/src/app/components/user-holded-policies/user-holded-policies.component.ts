import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimedPolicy } from 'src/app/models/claimedPolicy';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimedPolicyService } from 'src/app/services/claimed-policy.service';

@Component({
  selector: 'app-user-holded-policies',
  templateUrl: './user-holded-policies.component.html',
  styleUrls: ['./user-holded-policies.component.css']
})
export class UserHoldedPoliciesComponent implements OnInit {

  policies:Array<ClaimedPolicy>;
  userPolicies:Array<ClaimedPolicy>;
  constructor(private claimedPolicyservice : ClaimedPolicyService, private authservice: AuthService, private route: ActivatedRoute, private router: Router) {
    this.policies=[];
   }

  ngOnInit(): void {

    this.claimedPolicyservice.getClaimPolicyByUser(+this.authservice.getUserId()).subscribe(
      (policyList:ClaimedPolicy[])=>{
        this.policies = policyList;
        console.log(this.policies)
      },
      error=>{
        console.log(error);
      }
    )
  }

  go(){
    this.router.navigate(['user-home-page'])
  }

}
