import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostCreateComponent} from "../../components/post-create/post-create.component";
import {PostListComponent} from "../../components/post-list/post-list.component";
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PostCreateComponent,
    PostListComponent
  ],
  exports: [
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule
  ]
})
export class PostsModule {
}
