import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from "./component/users/user-list/user-list.component";
import {UserAddComponent} from "./component/users/user-add/user-add.component";
import {GroupListComponent} from "./component/groups/group-list/group-list.component";


const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/create',
    component: UserAddComponent
  },
  {
    path:'groups',
    component: GroupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
