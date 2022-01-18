import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Interface/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  title ="Users";
  
  users: Users[]=[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: Users[]) => {
      this.users = data;
    })
  }

  delete(id:number){
    this.userService.deleteUser(id).subscribe(res =>{
      this.users = this.users.filter(item => item.id !== id)
      alert("User Delete Successfull!")
    });
  }

  
}
