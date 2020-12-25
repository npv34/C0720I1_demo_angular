import { Injectable } from '@angular/core';
import {IUser} from "../component/users/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gmail.com',
      avatar: 'https://image.thanhnien.vn/768/uploaded/ngocthanh/2020_07_13/ngoctrinhmuonsinhcon1_swej.jpg'
    },
    {
      id: 2,
      name: 'tuan',
      email: 'tuan@gmail.com',
      avatar: 'https://nghesiviet.vn/storage/files/7/kieutrinh/hot-girl-kieu-trinh.jpg'
    },
    {
      id: 3,
      name: 'hung',
      email: 'hung@gmail.com',
      avatar: 'https://ttol.vietnamnetjsc.vn/images/2019/06/25/15/55/photo-5-15614490509941040341487.jpg'
    },
    {
      id: 4,
      name: 'nam2',
      email: 'nam2@gmail.com',
      avatar: 'https://ttol.vietnamnetjsc.vn/images/2019/06/25/15/55/photo-5-15614490509941040341487.jpg'
    },
    {
      id: 5,
      name: 'nam2',
      email: 'nam2@gmail.com',
      avatar: 'https://ttol.vietnamnetjsc.vn/images/2019/06/25/15/55/photo-5-15614490509941040341487.jpg'
    },
    {
      id: 6,
      name: 'nam2',
      email: 'nam2@gmail.com',
      avatar: 'https://ttol.vietnamnetjsc.vn/images/2019/06/25/15/55/photo-5-15614490509941040341487.jpg'
    },
  ]
  constructor() { }

  getAll() {
    return this.users;
  }

  add(user) {
    this.users.push(user)
  }
}
