import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/models/policy';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {

  submitted: false;
  policyId:number;
  policy:Policy;
  policyForm:FormGroup;
  policyTypes: any = ['Medical Insurance' , 'Individual Coverage' , 'Senior Citizen Coverage', 'family floater Coverage', 'Unit Linked Health Plans']
  constructor(private route: ActivatedRoute, private router: Router,private formBuilder:FormBuilder, private  policyService:PolicyService) { }

  ngOnInit(): void {
    
    this.policyService.getPolicy(+this.route.snapshot.params['policyId']).subscribe(
      (policyInfo:Policy)=>{
        this.policy = policyInfo;
        console.log(this.policy);
        this.policyForm.get('policyName').setValue(this.policy.policyName);
        this.policyForm.get('policyType').setValue(this.policy.policyType);
        this.policyForm.get('premiumAmount').setValue(this.policy.premiumAmount);
        this.policyForm.get('duration').setValue(this.policy.duration);
        this.policyForm.get('description').setValue(this.policy.description);
        
      }
    )

    this.policyForm = this.formBuilder.group({
      policyName:['', [Validators.required, Validators.minLength(3)]],
      policyType:['', [Validators.required]],
      premiumAmount:['', [Validators.required]],
      duration:['', [Validators.required]],
      description:['',[Validators.required]],
    });
  }

  get policyName(){
    return this.policyForm.get('policyName')
  }

  get policyType(){
    return this.policyForm.get('policyType')
  }

  get premiumAmount(){
    return this.policyForm.get('premiumAmount')
  }

  get duration(){
    return this.policyForm.get('duration')
  }

  get description(){
    return this.policyForm.get('description')
  }

  update(){
    console.log(this.policyForm.value)
    this.policyForm.value.policyId = this.route.snapshot.params['policyId']
    this.policyService.updatePolicy(this.policyForm.value).subscribe(
      response =>{
        console.log('Success!', response),
        alert("Updated Successfully!")
        this.router.navigateByUrl('/admin-policy-list')
      },
      error=>console.log(error)
      
    );
  }

  nameFlag: boolean= false;
  validateName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.policy.policyName);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }



    buttonFlag:boolean=true;
    enableButton(){
        this.buttonFlag=this.nameFlag;
    }

  onSubmit(){
    this.update();
  }

  gotoList(){
    this.router.navigate(['admin-policy-list']);
  }

}
