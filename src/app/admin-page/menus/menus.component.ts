import { Component, OnInit } from '@angular/core';

import { MenusService, Menu } from 'src/app/services/menus/menus.service';


import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menuDetails: Menu = {
    title: "",
    url: ""
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ["id","title","url"];

  constructor(public menus: MenusService) { }

  ngOnInit() {
    this.menus.getMenus().subscribe((data:any) => {
      this.dataSource.data = data;
    })
  }

  addMenu() {
    this.menus.addMenu(this.menuDetails);
  }

}
