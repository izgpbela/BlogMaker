// src/app/pages/themes/themes.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ThemeCardComponent } from '../components/theme.card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ThemeCardComponent,
    MatIconModule,
    MatDividerModule,
    RouterModule
  ],
  template: `
    <div class="themes-container">
      <div class="header-section">
        <h2 class="section-title">Explore Themes</h2>
        <p class="section-description">
        Descubra conteúdo organizado por temas. Cada tema contém postagens sobre tópicos específicos.
        </p>
      </div>
      
      <div class="themes-grid">
        <app-theme-card 
          title="Web Development" 
          description="Everything about web development"
          [posts]="webDevPosts"
          icon="web">
        </app-theme-card>
        
        <app-theme-card 
          title="Technology" 
          description="Articles about the latest in tech"
          [posts]="techPosts"
          icon="code">
        </app-theme-card>
        
        <app-theme-card 
          title="Mobile Development" 
          description="iOS, Android and cross-platform development"
          [posts]="mobilePosts"
          icon="phone_iphone">
        </app-theme-card>
        
        <app-theme-card 
          title="UX/UI Design" 
          description="Design principles and practices"
          [posts]="designPosts"
          icon="palette">
        </app-theme-card>
        <app-theme-card 
          title="Carreira Technology" 
          description="Carreira na tecnologia"
          [posts]="designPosts"
          icon="palette">
        </app-theme-card>
      </div>
    </div>
  `,
  styles: [`
    .themes-container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header-section {
      margin-bottom: 32px;
      text-align: center;

      .section-title {
        font-size: 2rem;
        font-weight: 500;
        color: #4A148C; /* Roxo escuro */
        margin-bottom: 16px;
      }

      .section-description {
        font-size: 1rem;
        color: #718096; /* Cinza médio */
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .themes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
      padding: 16px 0;
    }

    @media (max-width: 768px) {
      .themes-container {
        padding: 16px;
      }

      .header-section {
        margin-bottom: 24px;

        .section-title {
          font-size: 1.5rem;
        }
      }

      .themes-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  `]
})
export class ThemesComponent {
  webDevPosts = [
    {
      title: 'React vs Angular: A Developer\'s Perspective',
      summary: 'Comparing React and Angular from different angles to help you choose the right tool.',
      author: 'John Doe',
      date: 'May 17, 2023'
    },
    {
      title: 'Understanding CSS Grid',
      summary: 'Learn how to use CSS Grid to create complex layouts with ease.',
      author: 'Maria Silva',
      date: 'April 19, 2023'
    },
    {
      title: 'Getting Started with Angular',
      summary: 'An introduction to Angular framework and how to set up your first project.',
      author: 'John Doe',
      date: 'April 14, 2023'
    }
  ];

  techPosts = [
    {
      title: 'The Future of AI',
      summary: 'Exploring the latest advancements in artificial intelligence.',
      author: 'Alex Johnson',
      date: 'June 5, 2023'
    },
    {
      title: 'Blockchain Basics',
      summary: 'Understanding the fundamentals of blockchain technology.',
      author: 'Sam Wilson',
      date: 'May 22, 2023'
    }
  ];

  mobilePosts = [
    {
      title: 'Flutter for Cross-Platform Development',
      summary: 'Why Flutter is becoming popular for mobile app development.',
      author: 'Taylor Swift',
      date: 'June 10, 2023'
    }
  ];

  designPosts = [
    {
      title: 'Design Thinking Principles',
      summary: 'Key principles for effective UX design.',
      author: 'Emma Stone',
      date: 'May 30, 2023'
    }
  ];
}