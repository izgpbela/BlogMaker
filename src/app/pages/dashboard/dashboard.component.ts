import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts: Post[] = [];
  totalPosts: number = 0;
  lastPosts: Post[] = [];
  postsByAuthor: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().then((data) => {
      this.posts = data;
      this.totalPosts = data.length;
      this.lastPosts = data
        .slice()
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5);
      this.calculatePostsByAuthor();
    });
  }

  calculatePostsByAuthor() {
    const counts: { [key: string]: number } = {};
    this.posts.forEach(post => {
      const authorName = post.author?.name || 'Unknown';
      counts[authorName] = (counts[authorName] || 0) + 1;
    });
    this.postsByAuthor = Object.keys(counts).map(key => ({
      name: key,
      value: counts[key]
    }));
  }
}
