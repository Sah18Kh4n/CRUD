import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../components/create/create.component';
import { UpdateComponent } from '../components/update/update.component';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { ViewComponent } from '../components/view/view.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'users/:usersId', component: ViewComponent },
  { path: 'user/:usersId', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }