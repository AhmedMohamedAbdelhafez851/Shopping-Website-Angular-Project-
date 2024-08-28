import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsServicesService } from '../../services/posts-services.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: any;

  form = new FormGroup ({
    title: new FormControl ('', [Validators.required]),
    message: new FormControl ('', [Validators.required]),
  })
  
  constructor(private postsService: PostsServicesService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getAllPosts().subscribe((data: any) => {
      this.posts = data;
    })
  }

  deleteItem(id: number) {
    this.postsService.deletePost(id).subscribe(data => {
      this.posts = data;
      this.getPosts();
    })
  }

  addPost() {
    this.postsService.createPost(this.form.value).subscribe((res) => {
      console.log(res);
      this.getPosts();
      this.form.reset();
    })
  }
}
