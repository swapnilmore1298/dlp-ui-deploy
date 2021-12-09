import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  loginId : string = "";
  password : string = "";
 success = false;
  errorMessage: string;
  constructor(private adminService : AdminService, private router: Router) { 
    this.loginId = "";
    this.password = "";
    this.success = false;
    this.errorMessage = "";
  }

  ngOnInit(): void {
    this.loginId = "";
    this.password = "";
    this.success = false;
    this.errorMessage = "";
  }

  onLogin(){
    this.success=true;
    this.adminService.loginValidate(this.loginId).subscribe(data=>{
      var res = JSON.parse(JSON.stringify(data));
      var flag = false;
      if(res){
        res.forEach(element => {
          if(element.username == this.loginId && element.password == this.password){
            flag = true;
            this.loginSuccessful();        
          }
        });
        if(!flag){
          this.errorMessage = "Invalid Credentials! Please try again.."
        }
      }
    },err=>{
      this.errorMessage = "Error occurred in Login, Please try again.."
    })
  }

  loginSuccessful(){
    sessionStorage.setItem('username',this.loginId.toString());
    sessionStorage.setItem('loggedIn',"1");
    this.router.navigate(['/incident']);
  }

}
