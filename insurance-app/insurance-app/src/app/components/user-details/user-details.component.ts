import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddClaimPolicy } from 'src/app/models/addClaim';
import { ClaimedPolicy } from 'src/app/models/claimedPolicy';
import { Policy } from 'src/app/models/policy';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimedPolicyService } from 'src/app/services/claimed-policy.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private claimedPolicyservice : ClaimedPolicyService,private authService:AuthService, private router: Router, private route : ActivatedRoute) { }
  user: User;
  policy: Policy;
  userId:number;
  claimedPolicy: ClaimedPolicy;
  claimedPolicies:Observable<ClaimedPolicy[]>
 
  ngOnInit(): void {
    this.policy = new Policy();
    this.user = new User();
    

    this.userId = this.route.snapshot.params[+this.authService.getUserId];

    this.claimedPolicyservice.getClaimPolicyByUser(this.userId)
      .subscribe(data => {
        console.log(data)
        this.policy = data;
        this.user=data;
        this.claimedPolicy=data;
        console.log(data)
      }, error => console.log(error));
  }

}
