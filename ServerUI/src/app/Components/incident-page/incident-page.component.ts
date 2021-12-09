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
      this.listOfIncidents = res;
    })
  }
}
