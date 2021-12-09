import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  items: MenuItem[] = [];
  activeItem: MenuItem = {};
  constructor(private messageService: MessageService) {}


  ngOnInit(): void {
    this.items = [
      {label: 'Incidents', icon: 'pi pi-fw pi-calendar', routerLink: '/incident'},
      {label: 'Policies', icon: 'pi pi-fw pi-pencil', routerLink: '/policy'},
  ];
  
  this.activeItem = this.items[0];
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}
}
