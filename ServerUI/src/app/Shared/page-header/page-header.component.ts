import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem, MessageService} from 'primeng/api';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  items: MenuItem[] = [];
  activeItem: MenuItem = {};
  menuVisible = false;
  currentUrl = "";

  constructor(private messageService: MessageService, private router : Router, private auth: AuthService) {
    this.currentUrl = this.router.url;
    this.auth.guard.subscribe(res=>{
      if(!res){
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Please Login First!'});
      }
    })
  }


  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.items = [
      {label: 'Incidents', icon: 'pi pi-fw pi-calendar', routerLink: '/incident'},
      {label: 'Policies', icon: 'pi pi-fw pi-pencil', routerLink: '/policy'},
      {label: 'Clients', icon: 'pi pi-fw pi-user', routerLink: '/client'},
  ];
  
  this.activeItem = this.items[0];
  
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}

logOut(){
  sessionStorage.clear();
  this.router.navigate(['/']);
}

}
