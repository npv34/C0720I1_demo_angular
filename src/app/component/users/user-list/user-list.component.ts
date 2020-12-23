import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle = 'Danh sach nguoi dung';
  sizeAvatar = '150';
  hideShowImage = false;
  message = '';
  p: number = 1;
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
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  showHideAvatar() {
    this.hideShowImage = !this.hideShowImage;
  }

  changeSizeAvatar(event) {
    this.sizeAvatar = event.target.value;
  }

  deleteUser(id: number) {
    if (confirm('Are you sure?')) {
       let index = this.getUserById(id);
       if (index != -1) {
         this.users.splice(index, 1)
         this.message = 'Delete success!'
       }
    }
  }

  getUserById(id: number) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == id) {
          return i;
        }
      }

      return  -1;
  }

}
