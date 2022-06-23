import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/types/Auth';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  users: IUser[]
  constructor(
    private authService : AuthService
  ) { 
    this.users = []
  }

  ngOnInit(): void {
    this.GetListUser()
  }

  GetListUser() {
    this.authService.listUser().subscribe((data) =>{
      this.users = data
      console.log(data);
      
    })
  }

}
