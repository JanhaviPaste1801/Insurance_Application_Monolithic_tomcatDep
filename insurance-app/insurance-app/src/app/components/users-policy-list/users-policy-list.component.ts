import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Policy } from 'src/app/models/policy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-users-policy-list',
  templateUrl: './users-policy-list.component.html',
  styleUrls: ['./users-policy-list.component.css']
})
export class UsersPolicyListComponent implements OnInit {

  policies : Observable<Policy[]>
  constructor(private policyService:PolicyService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.policies = this.policyService.getPolicyList();
  }

  policyDetails(policyId: number){
    this.router.navigate(['policyDetails',policyId]);
  }
}
