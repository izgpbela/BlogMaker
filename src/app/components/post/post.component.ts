import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  searchAuthor: string = '';
  searchDate: string = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(post: Post): void {
    this.postService.createPost(post).subscribe(() => {
      this.loadPosts();
    });
  }

  updatePost(post: Post): void {
    this.postService.updatePost(post.id, post).subscribe(() => {
      this.loadPosts();
    });
  }

  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe(() => {
      this.loadPosts();
    });
  }

  searchPosts(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts.filter(post => {
        const matchesAuthor = this.searchAuthor ? post.author.toLowerCase().includes(this.searchAuthor.toLowerCase()) : true;
        const matchesDate = this.searchDate ? new Date(post.date).toDateString() === new Date(this.searchDate).toDateString() : true;
        return matchesAuthor && matchesDate;
      });
    });
  }
}
