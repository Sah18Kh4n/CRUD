import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Interface/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id:number = 3-1
  users!: Users;
  form!: FormGroup

  // constructor(
  //   public userService: UserService,
  //   public router: Router,
  //   private route: ActivatedRoute,
  // ) { 
  //   // this.id = this.route.snapshot.params['userId'];
  //   this.route.params.subscribe(params => {
  //     this.id = params['userId'];
  // }
  constructor(public router: Router, private route: ActivatedRoute,public userService:UserService) {
    this.route.params.subscribe(params => {
      console.log(params)
    this.id = +params.usersId;
    console.log('UserId :'+this.id);
}); 
}



  ngOnInit(): void {
    // this.id = this.route.snapshot.params['userId'];
    console.log(this.id);
    this.userService.get(this.id).subscribe((data: Users) => {
      this.users = data;
      console.log(data)
      this.form.controls["name"].setValue(this.users.name);
      this.form.controls["email"].setValue(this.users.email)
    });

    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    const payload ={
      id: this.id,
      name: this.form.controls['name'].value,
      email:this.form.controls['email'].value
     }
    this.userService.update(payload).subscribe(res => {
      console.log("user Updated successfully");
      this.router.navigateByUrl('/users');
    })
  }

  
}