// src/app/pages/analytics/analytics.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

// Importando os componentes diretamente do ngx-charts
import { NgxChartsModule, BarVerticalComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterLink,
    // Importando o módulo necessário
    NgxChartsModule
  ],
  template: `
    <div class="max-w-6xl mx-auto p-4">
      <h1 class="text-2xl font-bold mb-6">Blog Maker</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <mat-card class="text-center p-4">
          <div class="text-3xl font-bold">5</div>
          <div class="text-gray-500">Total Posts</div>
        </mat-card>
        
        <mat-card class="text-center p-4">
          <div class="text-3xl font-bold">3</div>
          <div class="text-gray-500">Authors</div>
        </mat-card>
        
        <mat-card class="text-center p-4">
          <div class="text-3xl font-bold">1.7</div>
          <div class="text-gray-500">Avg Posts per Author</div>
        </mat-card>
        
        <mat-card class="text-center p-4">
          <div class="text-xl font-bold">John Doe</div>
          <div class="text-gray-500">Top Author</div>
        </mat-card>
      </div>
      
      <mat-card class="p-4 mb-8">
        <h2 class="text-xl font-bold mb-4">Posts by Author</h2>
        <p class="text-gray-500 mb-4">Distribution of posts written by each author</p>
        
        <ngx-charts-bar-vertical
          [view]="view"
          [results]="chartData"
          [xAxis]="true"
          [yAxis]="true"
          [showXAxisLabel]="true"
          [showYAxisLabel]="true"
          [xAxisLabel]="'Authors'"
          [yAxisLabel]="'Posts'"
          [gradient]="false"
          [showDataLabel]="true"
          [roundDomains]="true"
          class="chart">
        </ngx-charts-bar-vertical>
      </mat-card>
    </div>
  `,
  styles: [`
    .chart {
      width: 100%;
      height: 400px;
    }
  `]
})
export class AnalyticsComponent {
  view: [number, number] = [0, 400]; // Será ajustado no afterViewInit
  chartData = [
    { name: 'John Doe', value: 2 },
    { name: 'Made 2016', value: 1.5 },
    { name: 'Carson Markets', value: 1 }
  ];

  ngAfterViewInit() {
    // Ajusta o tamanho do gráfico após a renderização inicial
    setTimeout(() => {
      this.view = [window.innerWidth * 0.9, 400];
    });
  }
}