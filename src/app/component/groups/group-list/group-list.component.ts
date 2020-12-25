import {Component, OnInit, ViewChild} from '@angular/core';
import {GroupService} from "../../../services/group.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  groups = []
  constructor(private groupService: GroupService) { }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.groupService.getAll().subscribe(res => {
      if (res.status == 'cusses') {
        this.groups = res.data
      }
    })
  }

  delete(id) {
    if (confirm('are you sure?')) {
      this.groupService.delete(id).subscribe(res => {
        this.getAll();
      })
    }

  }



}
