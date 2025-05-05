import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

interface PostsAnalytics {
  totalPosts: number;
  postsByAuthor: { [author: string]: number };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  analytics: PostsAnalytics | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.analytics = this.postService.getAnalytics();
  }

  prepareChartData(postsByAuthor: { [author: string]: number }) {
    return Object.entries(postsByAuthor).map(([author, count]) => ({
      name: author,
      value: count
    }));
  }
}
