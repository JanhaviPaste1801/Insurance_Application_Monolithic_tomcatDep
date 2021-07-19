import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Policy } from 'src/app/models/policy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  policies : Observable<Policy[]>
  searchText='';
  constructor(private policyService:PolicyService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    // this.policies = this.policyService.getPolicyList();
    this.policyService.getPolicyList().subscribe(res=>this.policies=res);
  }

  deletePolicy(policyId:number){
    this.policyService.deletePolicy(policyId)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  updatePolicy(policyId: number){
    this.router.navigate(['updatePolicy',policyId])
    .then(() => {
      window.location.reload();
    });
  }

  policyDetails(policyId: number){
    this.router.navigate(['policyDetails',policyId]);
  }

  go(){
    this.router.navigate(['user-home-page'])
  }
}
