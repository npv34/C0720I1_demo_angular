import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from "../IUser";
import {UserService} from "../../../services/user.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle = 'Danh sach nguoi dung';
  sizeAvatar = '150';
  hideShowImage = false;
  txtMessage = '';
  p: number = 1;
  users: IUser[] = [];
  userFilter: IUser[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.userFilter = this.users
  }

  displayedColumns: string[] = ['name', 'email'];
  dataSource = new MatTableDataSource(this.userService.getAll());

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
         this.txtMessage = 'Delete success!'
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

  search(keyword) {
    this.userFilter = (keyword) ? this.filterUserByName(keyword) : this.users;
  }

  filterUserByName(keyword) {
   return this.users.filter((user: IUser) => {
      return user.name.indexOf(keyword) != -1;
    })
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
