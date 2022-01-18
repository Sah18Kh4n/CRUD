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
  id:number = -1
  users!: Users;
  form!: FormGroup

  constructor(
    public userService: UserService,
    public router: Router,
    private route: ActivatedRoute,
  ) { 
    this.id = this.route.snapshot.params['userId'];

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    console.log(this.id);
    this.userService.get(this.id).subscribe((data: Users) => {
      this.users = data;
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
    this.userService.update(this.id, this.form.value).subscribe(res => {
      console.log("user Updated successfully");
      this.router.navigateByUrl('/users');
    })
  }
}