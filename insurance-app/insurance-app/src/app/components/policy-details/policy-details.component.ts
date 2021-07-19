import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddClaimPolicy } from 'src/app/models/addClaim';
import { ClaimedPolicy } from 'src/app/models/claimedPolicy';
import { Policy } from 'src/app/models/policy';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimedPolicyService } from 'src/app/services/claimed-policy.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {


 // policies:Observable<any>

  constructor(private router:Router,private authService:AuthService, private policyService: PolicyService, private route: ActivatedRoute, private claimService:ClaimedPolicyService) { }
  policy:Policy;
  policyId:number;
  userId:number;
  claim:any
  planId:number
  claimPolicy : AddClaimPolicy={
    userId:undefined,
    policyId:undefined,
    claimedDate:undefined,
    status:undefined
 
  };
  ngOnInit() {
    this.policy = new Policy();

    this.policyId = this.route.snapshot.params['policyId'];
    this.userId = this.route.snapshot.params['userId'];

    this.policyService.getPolicy(this.policyId)
      .subscribe(data => {
        console.log(data)
        this.policy = data;
      }, error => console.log(error));
  }

  buy():void{
    
    this.claimPolicy.policyId = this.route.snapshot.params['policyId'];
    console.log( this.claimPolicy.policyId)
    this.claimPolicy.userId=+this.authService.getUserId();
    this.claimService.addClaimedPolicy(this.claimPolicy).subscribe(
      data=>{
        this.claim=data;
        this.planId = this.claim.planId;
        alert("Claimed successfully")
        console.log(data);
        this.router.navigate(['user-claimed-policy-details', +this.authService.getUserId(),this.planId])
      },error=>{
        alert("Already Claimed")
        console.log(error);
        
      }
    );
  }

  back(){
    this.router.navigate(['policy-list']);
  }

}
