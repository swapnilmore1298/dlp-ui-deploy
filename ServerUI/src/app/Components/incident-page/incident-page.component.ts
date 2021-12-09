import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/Services/incident.service';

@Component({
  selector: 'app-incident-page',
  templateUrl: './incident-page.component.html',
  styleUrls: ['./incident-page.component.css']
})
export class IncidentPageComponent implements OnInit {

  listOfIncidents:any = [];

  constructor(private incidentService : IncidentService) { }

  ngOnInit(): void {
    this.getAllIncidents();
  }

  getAllIncidents(){
    this.incidentService.getAllIncidents().subscribe(res=>{
      this.listOfIncidents = [];
      var listOfIncidentsResponse : any[] = JSON.parse(JSON.stringify(res));
      listOfIncidentsResponse.forEach(element => {
        var _id = element._id ? element._id : "na";
        var ClientHostName = element.client && element.client.hostName  ? element.client.hostName : "na";
        var PolicyScannerName = element.policy && element.policy.scannerCriteria && element.policy.scannerCriteria.name  ? element.policy.scannerCriteria.name : "na";
        var PolicyActionName = element.policy && element.policy.action && element.policy.action.name  ? element.policy.action.name : "na";

        this.listOfIncidents.push({
          _id : "",
          client : {
            hostName : ClientHostName
          },
          policy : {
            scannerCriteria : {
              name : PolicyScannerName
            },
            action : {
              name : PolicyActionName
            }
          }
        });

      });
    })
  }
}
