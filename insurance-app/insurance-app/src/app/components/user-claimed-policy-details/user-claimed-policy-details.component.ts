import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClaimedPolicy } from 'src/app/models/claimedPolicy';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimedPolicyService } from 'src/app/services/claimed-policy.service';

@Component({
  selector: 'app-user-claimed-policy-details',
  templateUrl: './user-claimed-policy-details.component.html',
  styleUrls: ['./user-claimed-policy-details.component.css']
})
export class UserClaimedPolicyDetailsComponent implements OnInit {

  claimpolicy:any;
  planId:number;

  constructor(private route:ActivatedRoute, private router:Router, private claimedPolicyService : ClaimedPolicyService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.planId=this.route.snapshot.params['planId'];
    console.log(+this.authservice.getUserId())
    console.log(this.planId)
    this.claimedPolicyService.findByPlanIdAndUserId(+this.authservice.getUserId(),+this.planId).subscribe(
      data=>{
        this.claimpolicy=data;
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }


  go(){
    this.router.navigate(['policy-list'])
  }

}
