import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalPosts: number = 0;
  postsByAuthor: { [author: string]: number } = {};

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.totalPosts = posts.length;
      this.postsByAuthor = this.groupPostsByAuthor(posts);
    });
  }

  groupPostsByAuthor(posts: Post[]): { [author: string]: number } {
    return posts.reduce((acc, post) => {
      acc[post.author] = (acc[post.author] || 0) + 1;
      return acc;
    }, {} as { [author: string]: number });
  }
}
