// src/app/components/theme-card/theme-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-theme-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card class="h-full flex flex-col">
      <mat-card-header>
        <mat-card-title>{{ title }}</mat-card-title>
        <mat-card-subtitle>{{ description }}</mat-card-subtitle>
      </mat-card-header>
      
      <mat-card-content class="flex-grow">
        <p class="text-gray-500">{{ postCount }} posts</p>
      </mat-card-content>
      
      <mat-card-actions>
        <button mat-button color="primary">Browse theme</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: []
})
export class ThemeCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() postCount: string = '';
}