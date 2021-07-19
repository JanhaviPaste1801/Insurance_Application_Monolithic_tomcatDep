import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimedPolicy } from 'src/app/models/claimedPolicy';
import { ClaimedPolicyService } from 'src/app/services/claimed-policy.service';

@Component({
  selector: 'app-admin-user-and-policy-details',
  templateUrl: './admin-user-and-policy-details.component.html',
  styleUrls: ['./admin-user-and-policy-details.component.css']
})
export class AdminUserAndPolicyDetailsComponent implements OnInit {

  policies:Array<ClaimedPolicy>;
  userPolicies:Array<ClaimedPolicy>;
  constructor(private claimPolicyService : ClaimedPolicyService, private router: Router, private route: ActivatedRoute) {
    this.policies=[];
   }

  ngOnInit(): void {
    this.claimPolicyService.listOfAllClaimedPolicies().subscribe(
      (policyList:ClaimedPolicy[])=>{
        this.policies = policyList;
        console.log(this.policies)
      }
    )
  }

  go(){
    this.router.navigate(['admin-policy-list'])
  }

}
