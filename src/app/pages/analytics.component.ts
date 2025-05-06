// src/app/pages/analytics/analytics.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { Post } from '../models/post';
import { ScaleType, Color } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PostService } from '../services/post.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NgxChartsModule
  ],
  template: `
    <div class="analytics-container">
      <h1 class="page-title">analytics</h1>
      
      <!-- Cards de Estatísticas -->
      <div class="stats-grid">
        <mat-card class="stat-card">
          <div class="stat-value">{{ totalPosts }}</div>
          <div class="stat-label">Total de Postagens</div>
          <mat-icon class="stat-icon">library_books</mat-icon>
        </mat-card>
        
        <mat-card class="stat-card">
          <div class="stat-value">{{ totalAuthors }}</div>
          <div class="stat-label">Autores</div>
          <mat-icon class="stat-icon">people</mat-icon>
        </mat-card>
        
        <mat-card class="stat-card">
          <div class="stat-value">{{ avgPostsPerAuthor | number:'1.1-1' }}</div>
          <div class="stat-label">Média por Autor</div>
          <mat-icon class="stat-icon">equalizer</mat-icon>
        </mat-card>
        
        <mat-card class="stat-card">
          <div class="stat-value">{{ topAuthor?.name || '-' }}</div>
          <div class="stat-label">Autor Top</div>
          <mat-icon class="stat-icon">star</mat-icon>
        </mat-card>
      </div>
      
      <!-- Gráfico de Postagens por Autor -->
      <mat-card class="chart-card">
        <h2 class="section-title">Últimas Postagens</h2>
        <p class="section-subtitle">Distribuição de postagens por autor</p>
        
        <ngx-charts-bar-vertical
          [view]="view"
          [results]="postsByAuthor"
          [scheme]="colorScheme"
          [xAxis]="true"
          [yAxis]="true"
          [showXAxisLabel]="true"
          [showYAxisLabel]="true"
          [xAxisLabel]="'Autor'"
          [yAxisLabel]="'Postagens'"
          [gradient]="false"
          [showDataLabel]="true"
          [roundDomains]="true">
        </ngx-charts-bar-vertical>
      </mat-card>
      
      <!-- Tabela de Últimas Postagens -->
      <mat-card class="posts-table">
        <h2 class="section-title">Detalhes das Postagens</h2>
        <div class="table-header">
          <span>Postagens</span>
          <span>Autor</span>
        </div>
        <div class="table-content">
          <div *ngFor="let post of recentPosts" class="table-row">
            <span class="post-title">{{ post.title }}</span>
            <span class="post-author">{{ post.author }}</span>
          </div>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    .analytics-container {
      @apply max-w-6xl mx-auto p-4;
    }
    .page-title {
      @apply text-3xl font-bold text-primary-800 mb-8;
      font-family: 'Cascadia Mono', monospace;
    }
    .stats-grid {
      @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8;
    }
    .stat-card {
      @apply p-6 relative overflow-hidden;
      background-color: #EDE7F6 !important;
    }
    .stat-value {
      @apply text-4xl font-bold text-primary-600 mb-2;
    }
    .stat-label {
      @apply text-gray-600 text-lg;
    }
    .stat-icon {
      @apply absolute -bottom-2 -right-2 text-primary-300;
      font-size: 5rem;
      opacity: 0.3;
    }
    .chart-card, .posts-table {
      @apply p-6 mb-8;
      background-color: #FAF5FF !important;
    }
    .section-title {
      @apply text-xl font-bold text-primary-700 mb-2;
      font-family: 'Cascadia Mono', monospace;
    }
    .section-subtitle {
      @apply text-gray-500 mb-4;
    }
    .table-header {
      @apply flex justify-between font-bold text-primary-600 border-b-2 border-primary-100 pb-2 mb-4;
    }
    .table-content {
      @apply space-y-3;
    }
    .table-row {
      @apply flex justify-between py-2 border-b border-gray-100;
    }
    .post-title {
      @apply text-gray-700;
    }
    .post-author {
      @apply text-primary-600 font-medium;
    }
    ngx-charts-bar-vertical {
      @apply w-full;
      height: 400px;
    }
  `]
})
export class AnalyticsComponent implements AfterViewInit {
  view: [number, number] = [0, 400];
  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#7E57C2', '#B39DDB', '#D1C4E9', '#EDE7F6']
  };

  // Dados de exemplo (substituir por dados reais do serviço)
  totalPosts = 5;
  totalAuthors = 7;
  avgPostsPerAuthor = 0;
  topAuthor: any = null;
  postsByAuthor: any[] = [];
  recentPosts: any[] = [];

  constructor(private postService: PostService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.view = [window.innerWidth * 0.9, 400];
    });

    // Simulando carregamento de dados
    this.loadAnalyticsData();
  }

  loadAnalyticsData() {
    // Substituir por chamada real ao serviço
    this.postService.getPosts().pipe(
      map((posts: Post[]) => {
        // Processar dados para analytics
        this.totalPosts = posts.length;
        
        const authors = [...new Set(posts.map(p => p.author))];
        this.totalAuthors = authors.length;
        
        this.avgPostsPerAuthor = this.totalPosts / this.totalAuthors;
        
        // Contar posts por autor
        const authorCounts = authors.map(author => ({
          name: author,
          value: posts.filter(p => p.author === author).length
        }));
        
        this.postsByAuthor = authorCounts;
        this.topAuthor = [...authorCounts].sort((a, b) => b.value - a.value)[0];
        
        // Últimas 5 postagens
        this.recentPosts = [...posts]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 5);
      })
    ).subscribe();
  }
}