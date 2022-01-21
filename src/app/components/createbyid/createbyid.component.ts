import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/Interface/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createbyid',
  templateUrl: './createbyid.component.html',
  styleUrls: ['./createbyid.component.scss']
})
export class CreatebyidComponent implements OnInit {

  title = "Create User By UserId"
  form!: FormGroup;
  constructor(public userService:UserService,
    public router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl(''),
      email: new FormControl('')
    }) 
  }

  get f(){
    return this.form.controls
  }

  submitUser(user:Users){
    if(user.id === null){
      this.userService.createUserById(user.id,user).subscribe(res =>{
        alert("User Create by Id Successfully");
        this.router.navigateByUrl('/users')
      })
    }
  }
}
