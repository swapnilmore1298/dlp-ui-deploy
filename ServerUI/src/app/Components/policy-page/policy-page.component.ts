import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PolicyService } from 'src/app/Services/policy.service';

@Component({
  selector: 'app-policy-page',
  templateUrl: './policy-page.component.html',
  styleUrls: ['./policy-page.component.css']
})
export class PolicyPageComponent implements OnInit {
  items:any = [];
  listOfPolicies:any = [];

  scannerOptions = [
    {
      name:"Scan1",
      value:"Scan1"
    },
    {
      name:"Scan2",
      value:"Scan2"
    }
  ];

  actionOptions = [
    {
      name:"Action1",
      value:"Action1"
    },
    {
      name:"Action1",
      value:"Action1"
    }
  ];

  targetGroupOptions = [];

  // add new 
  addPolicyVisible : boolean = false;
  listOfNewParameters : string[] = [];
  nameOfNewPolicy : string = "";
  listOfNewParametersAction : string[] = [];
  nameOfNewPolicyAction : string = "";
  directoryNewPolicy : string = "";
  targetGroupIdNewPolicy : string = "";

  //update exisiting
  selectedPolicy = null;
  updatePolicyVisible : boolean = false;

  //add new target
  addTargetVisible: boolean = false;
  newTargetAdd : string = "";
  constructor(private policyService : PolicyService, private messageService: MessageService) { }

  async ngOnInit() {
    await this.getAllTargetGroups();

    this.getAllPolicies();

    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }
  ];
  }

  async getAllPolicies(){
    await this.getAllTargetGroups();
    this.policyService.getAllPolicies().subscribe(res=>{
      this.listOfPolicies = res;
      this.listOfPolicies.forEach((element,i) => {
        if(element.targetGroupId){
          let obj = this.targetGroupOptions.find(ele=> ele.value == element.targetGroupId);
          this.listOfPolicies[i]['groupName'] = obj.name;
        }
      });
    })
  }

  async getAllTargetGroups(){
    this.targetGroupOptions = [];
    const res = await this.policyService.getAllTargetGroups().toPromise();
    if(res){
      var groupList = JSON.parse(JSON.stringify(res));
      groupList.forEach(element => {
        this.targetGroupOptions.push({
          name : element.groupName,
          value : element._id
        });
    })
    }
    else{

    }
     
  }

  addNewPolicy(){
    if(this.listOfNewParameters.length>0 && this.listOfNewParametersAction.length>0){
      var policyObj = {
        directory : this.directoryNewPolicy,
        scannerCriteria : {
          name : this.nameOfNewPolicy,
          parameters : this.listOfNewParameters
        },
        action : {
          name : this.nameOfNewPolicyAction,
          parameters : this.listOfNewParametersAction
        },
        targetGroupId : this.targetGroupIdNewPolicy,
        isActive : true
      };

      this.policyService.addNewPolicy(policyObj).subscribe(res=>{
        this.messageService.add({severity:'success', summary: 'Success', detail: 'New Policy added successfully'});
        this.getAllPolicies();
        this.addPolicyVisible = false;
      },
      err=>{
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Policy Add operation failed :('});
      })
    }
    else{
      this.messageService.add({severity:'warn', summary: 'Invalid Data', detail: 'Fields cannot be empty, make sure you press comma after each entry'});
    }
  }

  updatePolicy(){
    if(this.selectedPolicy && this.selectedPolicy._id){
      this.policyService.updatePolicy(this.selectedPolicy).subscribe(res=>{
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Policy updated successfully'});
        this.getAllPolicies();
        this.updatePolicyVisible = false;
        this.selectedPolicy = null;
      },
      err=>{
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Policy Update operation failed :('});
      })
    }
    else{
      this.messageService.add({severity:'error', summary: 'Error', detail: 'No Id found :('});
    }
  
  }

  openPolicyAddPop(){
    this.addPolicyVisible = true;
  }

  resetAddPolicy(){
    this.nameOfNewPolicy = "";
    this.listOfNewParameters = [];
    this.nameOfNewPolicyAction = "";
    this.listOfNewParametersAction = [];
    this.directoryNewPolicy = "";
    this.targetGroupIdNewPolicy = "";
  }

  openPolicyUpdatePop(){
    if(this.selectedPolicy){
      this.updatePolicyVisible = true;

    }
    else{
      this.messageService.add({severity:'warn', summary: 'Invalid Data', detail: 'Please select a policy to Update!'});
    }
  }

  onCloseUpdate(){
    this.selectedPolicy = null;
    this.getAllPolicies();
  }

  openNewTarget(){
    this.addTargetVisible = true;
  }

  addNewTarget(){
    this.policyService.addNewTarget(this.newTargetAdd).subscribe(res=>{
      this.newTargetAdd = "";
      this.getAllTargetGroups();
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Target Group added successfully'});
      this.addTargetVisible = false;
    },
    err=>{
      this.messageService.add({severity:'error', summary: 'Error', detail: 'operation failed :('});
    });
  }

}
