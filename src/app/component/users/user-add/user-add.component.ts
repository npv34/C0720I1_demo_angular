import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  formAdduser: FormGroup
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAdduser = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required]]
    })
  }

  create() {
    let data = this.formAdduser.value;
    this.userService.add(data);
    this.router.navigate(['users'])
  }

  get name() {
    return this.formAdduser.get('name')
  }

  get email() {
    return this.formAdduser.get('email')
  }

}
