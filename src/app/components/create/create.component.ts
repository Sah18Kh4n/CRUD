import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  title = "Create new  User"
  form!:FormGroup
  constructor(public userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl(''),
      email: new FormControl('')
    })  
  }
  get f(){
    return this.form.controls;
  }

  submit(user:any){
    // console.log(this.form.value);
    this.userService.createUser(user).subscribe(res =>{
      alert('User Create Successfully')
      this.router.navigateByUrl('/users')
    })
  }
}
