import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor(public postService: PostService) {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) return
    const {name, first_question, second_question, email} = form.value
    this.postService.addPost(name, first_question, second_question, email)
    form.resetForm()
  }
}
