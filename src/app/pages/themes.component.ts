// src/app/pages/themes/themes.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ThemeCardComponent } from '../components/theme.card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';
import { Tema } from '../enum/tema.enum';

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
          [posts]="careerPosts"
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
    }

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
      }

      .section-title {
        font-size: 1.5rem;
      }

      .themes-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  `]
})
export class ThemesComponent {
  Tema = Tema;
  // Injetando o serviço PostService
  private readonly postService = inject(PostService);

  webDevPosts: any[] = [];
  techPosts: any[] = [];
  mobilePosts: any[] = [];
  designPosts: any[] = [];
  careerPosts: any[] = [];

  constructor() {
    this.postService.getPosts().subscribe({
      next: (posts) => {
        console.log('Todos os posts:', posts);

        this.webDevPosts = posts
          .filter(p => p.tema === Tema.FRONTEND)
          .map(p => ({
            id: p.id,
            titulo: p.titulo,
            conteudo: p.conteudo,
            autor: p.autor,
            dataCriacao: p.dataCriacao
          }));

        this.techPosts = posts
          .filter(p => p.tema === Tema.INTELIGENCIA_ARTIFICIAL)
          .map(p => ({
            id: p.id,
            titulo: p.titulo,
            conteudo: p.conteudo,
            autor: p.autor,
            dataCriacao: p.dataCriacao
          }));

        this.mobilePosts = posts
          .filter(p => p.tema === Tema.MOBILE) // Usando enum Tema.MOBILE
          .map(p => ({
            id: p.id,
            titulo: p.titulo,
            conteudo: p.conteudo,
            autor: p.autor,
            dataCriacao: p.dataCriacao
          }));

        this.designPosts = posts
          .filter(p => p.tema === Tema.UX) // Usando enum Tema.UX
          .map(p => ({
            id: p.id,
            titulo: p.titulo,
            conteudo: p.conteudo,
            autor: p.autor,
            dataCriacao: p.dataCriacao
          }));

        this.careerPosts = posts
          .filter(p => p.tema === Tema.SOBRECARREIRA)
          .map(p => ({
            id: p.id,
            titulo: p.titulo,
            conteudo: p.conteudo,
            autor: p.autor,
            dataCriacao: p.dataCriacao
          }));
      }
    });
  }
}
