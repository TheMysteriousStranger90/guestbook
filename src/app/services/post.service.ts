import {Injectable} from '@angular/core';
import {Post} from "../interfaces/post";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [{
    id: 1,
    name: "William",
    first_question: "Through a friend",
    second_question: "I've had these sunglasses since 2013! Ive had the lenses replaced one time but never needed to have any other repairs on them. They're polarized and very well made! Customer service is a bit meh as they tend to be snobby but they're just sales people. The products are good.",
    email : "william.blake@outlook.com"
  }, {
    id: 2,
    name: "Andrew",
    first_question: "Social Media",
    second_question: "I loved shopping at Brand! Some of their designs can be quite flashy, but on the whole I love their brand, especially their medusa head. The package arrived quite fast for overseas shipping, and was packaged really well.",
    email : "andrew.byron@outlook.com"
  }
  ]
  private postsUpdated = new Subject<Post[]>()

  getPosts() {
    return [...this.posts]
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable()
  }

  addPost(name: string, first_question: string, second_question: string, email : string) {
    const lastId: number = this.posts[this.posts.length - 1]?.id + 1 ?? 1
    const post: Post = {id: lastId, name: name, first_question: first_question, second_question: second_question, email : email}
    this.posts.push(post)
    this.postsUpdated.next([...this.posts])
  }

  deletePost(id: number) {
    const pos = this.posts.findIndex((post) => post.id === id)
    this.posts.splice(pos, 1)
  }
}
