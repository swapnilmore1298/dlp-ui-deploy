import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit {
  items:any = [];
  listOfClients:any = [];
  newClient = new ClientDTO();

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
  addClientVisible : boolean = false;
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
  constructor(private messageService: MessageService, private clientService : ClientService) { }

  async ngOnInit() {
     await this.getAllTargetGroups();

     this.getAllClients();

  //   this.items = [
  //     {
  //         label: 'Update',
  //         icon: 'pi pi-refresh'
  //     },
  //     {
  //         label: 'Delete',
  //         icon: 'pi pi-times'
  //     },
  //     {
  //         label: 'Angular',
  //         icon: 'pi pi-external-link',
  //         url: 'http://angular.io'
  //     },
  //     {
  //         label: 'Router',
  //         icon: 'pi pi-upload',
  //         routerLink: '/fileupload'
  //     }
  // ];
  }

  async getAllClients(){
    await this.getAllTargetGroups();
    this.clientService.getAllClients().subscribe(res=>{
      this.listOfClients = res;
      this.listOfClients.forEach((element,i) => {
        if(element.targetGroupId){
          let obj = this.targetGroupOptions.find(ele=> ele.value == element.targetGroupId);
          if(obj && obj.name){
            this.listOfClients[i]['groupName'] = obj.name;
          }
        }
      });
    })
  }

  async getAllTargetGroups(){
    this.targetGroupOptions = [];
    const res = await this.clientService.getAllTargetGroups().toPromise();
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

  addNewClient(){
    this.clientService.addNewClient(this.newClient).subscribe(res=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'New Client added successfully'});
      this.getAllClients();
      this.addClientVisible = false;
    },err=>{
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Client Add operation failed :('});
    })
  }

  openClientAddPop(){
    this.addClientVisible = true;
  }

}

class ClientDTO {
  hostName : string;
  targetGroupId : string;
}