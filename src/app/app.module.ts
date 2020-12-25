import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './component/users/user-list/user-list.component';
import {NgxPaginationModule} from "ngx-pagination";
import { InputSearchComponent } from './core/input-search/input-search.component';
import { ProductListComponent } from './component/products/product-list/product-list.component';
import { MessageComponent } from './core/message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { UserAddComponent } from './component/users/user-add/user-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {GroupListComponent} from "./component/groups/group-list/group-list.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    InputSearchComponent,
    ProductListComponent,
    MessageComponent,
    UserAddComponent,
    GroupListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
