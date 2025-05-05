import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  totalPosts: number = 0;
  latestPosts: any[] = [];
  postsByAuthor: { author: string; count: number }[] = [];

  // Chart data example for bar chart
  barChartData: any;
  barChartOptions: any;

  constructor() {}

  ngOnInit(): void {
    // Initialize with dummy data
    this.totalPosts = 42;
    this.latestPosts = [
      { id: 1, title: 'Post 1', author: 'Author A', date: '2024-06-01' },
      { id: 2, title: 'Post 2', author: 'Author B', date: '2024-06-02' },
      { id: 3, title: 'Post 3', author: 'Author A', date: '2024-06-03' }
    ];
    this.postsByAuthor = [
      { author: 'Author A', count: 20 },
      { author: 'Author B', count: 15 },
      { author: 'Author C', count: 7 }
    ];

    this.setupChart();
  }

  setupChart(): void {
    this.barChartData = {
      labels: this.postsByAuthor.map(p => p.author),
      datasets: [
        {
          label: 'Posts by Author',
          data: this.postsByAuthor.map(p => p.count),
          backgroundColor: '#3f51b5'
        }
      ]
    };

    this.barChartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          precision: 0
        }
      }
    };
  }
}
