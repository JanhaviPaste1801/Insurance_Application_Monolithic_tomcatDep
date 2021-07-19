import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/models/policy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-admin-policy-details',
  templateUrl: './admin-policy-details.component.html',
  styleUrls: ['./admin-policy-details.component.css']
})
export class AdminPolicyDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private policyService: PolicyService) { }

  policy:Policy;
  policyId:number;
 
 
  ngOnInit() {
    this.policy = new Policy();

    this.policyId = this.route.snapshot.params['policyId'];
   

    this.policyService.getPolicy(this.policyId)
      .subscribe(data => {
        console.log(data)
        this.policy = data;
      }, error => console.log(error));
  }

  back(){
    this.router.navigate(['admin-policy-list']);
  }

  updatePolicy(policyId: number){
    this.router.navigate(['updatePolicy',policyId])
    .then(() => {
      console.log(this.policy)
      this.router.navigate(['admin-policy-list'])
    });
  }
}
