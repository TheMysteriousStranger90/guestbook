import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {PostService} from "../../services/post.service";
import {Post} from "../../interfaces/post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = []

  constructor(public postService: PostService) {
  }

  private postsSub!: Subscription;

  ngOnInit() {
    this.posts = this.postService.getPosts()
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts
    })
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe()
  }

  deleteEvent(id: number) {
    this.postService.deletePost(id)
    this.posts = this.postService.getPosts()
  }
}
