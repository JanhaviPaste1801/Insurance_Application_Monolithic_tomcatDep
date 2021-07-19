import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from 'src/app/models/policy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-search-policy',
  templateUrl: './search-policy.component.html',
  styleUrls: ['./search-policy.component.css']
})
export class SearchPolicyComponent implements OnInit {

  constructor(private policyservice : PolicyService) { }
  searchText = '';
  policies:Observable<[Policy[]]>
 
  
  ngOnInit(): void {
   this.policyservice.getPolicyList().subscribe(res=>this.policies=res);
  }

  

}
