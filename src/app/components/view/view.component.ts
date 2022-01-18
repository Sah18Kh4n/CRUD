import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Interface/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  title = "View User";
  declare id:number;
  declare user: Users;

  constructor(public userService:UserService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];

    this.userService.get(this.id).subscribe((data:Users)=>{
      this.user = data;
      console.log(data);
    })
  }

}
