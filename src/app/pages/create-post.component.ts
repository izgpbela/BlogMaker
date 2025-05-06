// src/app/pages/create-post/create-post.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from '../components/footer.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FooterComponent,
    MatIconModule
  ],
  template: `
    <div class="create-post-container">
      <mat-card class="post-card">
        <mat-card-header>
          <mat-card-title class="post-title">Nova Postagem</mat-card-title>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="postForm" class="post-form">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Tema</mat-label>
              <mat-select formControlName="theme" required>
                <mat-option value="web-development">Web Development</mat-option>
                <mat-option value="technology">Technology</mat-option>
                <mat-option value="mobile-development">Mobile Development</mat-option>
                <mat-option value="ux-ui-design">UX/UI Design</mat-option>
              </mat-select>
              <mat-hint>Selecione o tema da postagem</mat-hint>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Título</mat-label>
              <input matInput formControlName="title" placeholder="Digite o título da postagem" required>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Conteúdo</mat-label>
              <textarea matInput formControlName="content" placeholder="Digite o conteúdo da postagem" rows="10" required></textarea>
            </mat-form-field>
            
            <div class="form-actions">
              <button mat-raised-button color="primary" type="submit" [disabled]="!postForm.valid">
                <mat-icon>publish</mat-icon>
                Publicar
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
      
      <app-footer />
    </div>
  `,
  styles: [`
    .create-post-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    
    .post-card {
      padding: 2rem;
      background-color: #FAF5FF; /* Cor de fundo do tema */
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .post-title {
      color: #4A148C; /* Roxo escuro */
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    
    .post-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #EDE7F6; /* Lilás claro */
    }
    
    /* Estilização dos campos do formulário */
    ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {
      color: #B39DDB; /* Lilás médio */
    }
    
    ::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {
      color: #7E57C2; /* Roxo médio */
    }
    
    ::ng-deep .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
      color: #7E57C2; /* Roxo médio */
    }
    
    /* Botão primário */
    ::ng-deep .mat-raised-button.mat-primary {
      background-color: #7E57C2; /* Roxo médio */
      color: white;
    }
    
    ::ng-deep .mat-raised-button.mat-primary:hover {
      background-color: #9C27B0; /* Roxo vibrante */
    }
  `]
})
export class CreatePostComponent {
  postForm = new FormGroup({
    theme: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  });
}