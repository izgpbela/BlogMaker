import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { PostService } from '../services/post.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-analytics',
  template: `
    <div class="dashboard">
      <div class="stats-cards">
        <div class="card">
          <h3>Total Users</h3>
          <p>{{ totalUsers }}</p>
        </div>
        <div class="card">
          <h3>Total Logins</h3>
          <p>{{ totalLogins }}</p>
        </div>
        <div class="card">
          <h3>Total Posts</h3>
          <p>{{ totalPosts }}</p>
        </div>
        <div class="card">
          <h3>Conversion Rate</h3>
          <p>{{ conversionRate }}%</p>
        </div>
      </div>

      <div class="chart-container">
        <h3>Postagens Recentes</h3>
        <ngx-charts-line-chart
          [scheme]="colorScheme"
          [results]="chartData"
          [xAxis]="true"
          [yAxis]="true"
          [showXAxisLabel]="true"
          [showYAxisLabel]="true"
          [xAxisLabel]="'Data'"
          [yAxisLabel]="'Postagens'"
          [autoScale]="true">
        </ngx-charts-line-chart>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
    }

    .stats-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }

    .card {
      background: #f5f5f5;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }

    .card h3 {
      margin-bottom: 8px;
      color: #7E57C2;
    }

    .chart-container {
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
  `]
})
export class AnalyticsComponent implements OnInit {
  totalUsers = 0;
  totalLogins = 0;
  totalPosts = 0;
  conversionRate = 0;

  chartData: any[] = [];

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#7E57C2']
  };

  constructor(
    private loginService: LoginService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.loadAnalytics();
  }

  loadAnalytics() {
    this.loginService.getTotalUsers().subscribe(users => {
      this.totalUsers = users;

      // Garantir que login vem depois dos usuários (se necessário para o cálculo)
      this.loginService.getRecentLogins().subscribe(logins => {
        this.totalLogins = logins;

        // Calcular taxa de conversão após ambas respostas
        this.conversionRate = (this.totalLogins && this.totalUsers) ?
          Math.round((this.totalLogins / this.totalUsers) * 100) : 0;
      });
    });

    this.postService.getPosts().subscribe(posts => {
      this.totalPosts = posts.length;
    });

    this.postService.getPostStatsByDate().subscribe(stats => {
      this.chartData = stats;
    });
  }
}
