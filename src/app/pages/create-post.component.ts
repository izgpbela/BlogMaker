import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

// Enums para status e tema
enum Status {
  RASCUNHO = 'RASCUNHO',
  PUBLICADO = 'PUBLICADO',
  ARQUIVADO = 'ARQUIVADO'
}

enum Tema {
  BACKEND = 'BACKEND',
  FRONTEND = 'FRONTEND',
  INTELIGENCIA_ARTIFICIAL = 'INTELIGENCIA_ARTIFICIAL',
  SEGURANCA = 'SEGURANCA',
  DEVOPS = 'DEVOPS',
  SOBRECARREIRA = 'SOBRECARREIRA'
}

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
    MatIconModule,
    MatTooltipModule
  ],
  template: `
    <div class="create-post-container">
      <mat-card class="post-card">
        <mat-card-header>
          <mat-card-title class="post-title">Create New Post</mat-card-title>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="postForm" class="post-form" (ngSubmit)="onSubmit()">
            <!-- Image Upload -->
            <div class="image-upload-container">
              <input type="file" id="imageUpload" (change)="onFileSelected($event)" accept="image/*" hidden>
              
              <div class="image-preview" *ngIf="imagePreview">
                <img [src]="imagePreview" alt="Preview">
                <button mat-icon-button class="remove-image" (click)="removeImage()">
                  <mat-icon>close</mat-icon>
                </button>
              </div>
              
              <label for="imageUpload" class="upload-button">
                <mat-icon>add_photo_alternate</mat-icon>
                {{ imagePreview ? 'Change Image' : 'Add Featured Image' }}
              </label>
            </div>

            <!-- Author Field -->
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Author*</mat-label>
              <input matInput formControlName="autor" placeholder="Enter author name" required>
              <mat-error *ngIf="postForm.get('autor')?.hasError('required')">
                Author is required
              </mat-error>
            </mat-form-field>

            <!-- Status Field -->
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Status*</mat-label>
              <mat-select formControlName="status" required>
                <mat-option *ngFor="let status of statusOptions" [value]="status">
                  {{ status }}
                </mat-option>
              </mat-select>
              <mat-error *ngIf="postForm.get('status')?.hasError('required')">
                Status is required
              </mat-error>
            </mat-form-field>

            <!-- Theme Field -->
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Theme*</mat-label>
              <mat-select formControlName="tema" required>
                <mat-option *ngFor="let tema of temaOptions" [value]="tema">
                  {{ getTemaDisplayName(tema) }}
                </mat-option>
              </mat-select>
              <mat-error *ngIf="postForm.get('tema')?.hasError('required')">
                Theme is required
              </mat-error>
            </mat-form-field>

            <!-- Title Field -->
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Title*</mat-label>
              <input matInput formControlName="titulo" placeholder="Enter post title" required>
              <mat-error *ngIf="postForm.get('titulo')?.hasError('required')">
                Title is required
              </mat-error>
              <mat-error *ngIf="postForm.get('titulo')?.hasError('minlength')">
                Title must be at least 5 characters
              </mat-error>
            </mat-form-field>

            <!-- Content Field -->
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Content*</mat-label>
              <textarea matInput formControlName="conteudo" 
                       placeholder="Write your post content here" 
                       rows="10" required></textarea>
              <mat-error *ngIf="postForm.get('conteudo')?.hasError('required')">
                Content is required
              </mat-error>
              <mat-error *ngIf="postForm.get('conteudo')?.hasError('minlength')">
                Content must be at least 20 characters
              </mat-error>
            </mat-form-field>

            <!-- Action Buttons -->
            <div class="form-actions">
              <button mat-stroked-button type="button" 
                      class="cancel-button"
                      (click)="cancel()">
                Cancel
              </button>
              <button mat-raised-button color="primary" type="submit"
                      class="submit-button"
                      [disabled]="postForm.invalid || isUploading">
                <mat-icon>publish</mat-icon>
                {{ isUploading ? 'Publishing...' : 'Publish' }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
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
      background-color: #FAF5FF;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .post-title {
      color: #4A148C;
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
      font-family: 'Cascadia Mono', monospace;
    }
    
    .post-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    /* Image Upload Styles */
    .image-upload-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .image-preview {
      position: relative;
      max-height: 300px;
      overflow: hidden;
      border-radius: 8px;
      border: 2px dashed #B39DDB;
      
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    
    .remove-image {
      position: absolute;
      top: 8px;
      right: 8px;
      background-color: rgba(255, 255, 255, 0.8);
    }
    
    .upload-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px;
      background-color: #EDE7F6;
      color: #4A148C;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
      
      &:hover {
        background-color: #D1C4E9;
      }
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #EDE7F6;
      gap: 1rem;
    }
    
    .cancel-button {
      border-color: #B39DDB;
      color: #4A148C;
    }
    
    .submit-button {
      background-color: #7E57C2;
      color: white;
      
      &:disabled {
        background-color: #B39DDB;
      }
    }
    
    /* Estilização dos campos do formulário */
    ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {
      color: #B39DDB;
    }
    
    ::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {
      color: #7E57C2;
    }
    
    ::ng-deep .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
      color: #7E57C2;
    }
    
    /* Responsividade */
    @media (max-width: 600px) {
      .create-post-container {
        padding: 0;
      }
      
      .post-card {
        padding: 1.5rem;
        border-radius: 0;
      }
      
      .form-actions {
        flex-direction: column;
      }
      
      .image-preview {
        max-height: 200px;
      }
    }
  `]
})
export class CreatePostComponent {
  private readonly postService = inject(PostService);
  private readonly router = inject(Router);

  // Enums para uso no template
  statusOptions = Object.values(Status);
  temaOptions = Object.values(Tema);

  postForm = new FormGroup({
    titulo: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    conteudo: new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ]),
    autor: new FormControl('', [Validators.required]),
    status: new FormControl(Status.RASCUNHO, [Validators.required]),
    tema: new FormControl('', [Validators.required]),
    imagemUrl: new FormControl('')
  });

  imagePreview: string | ArrayBuffer | null = null;
  selectedImage: File | null = null;
  isUploading = false;

  // Função para obter o nome de exibição do tema
  getTemaDisplayName(tema: string): string {
    switch (tema) {
      case Tema.BACKEND: return 'Backend';
      case Tema.FRONTEND: return 'Frontend';
      case Tema.INTELIGENCIA_ARTIFICIAL: return 'Inteligência Artificial';
      case Tema.SEGURANCA: return 'Segurança da Informação';
      case Tema.DEVOPS: return 'DevOps';
      case Tema.SOBRECARREIRA: return 'Sobre Carreira';
      default: return tema;
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedImage = input.files[0];
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.postForm.patchValue({
          imagemUrl: reader.result as string
        });
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  removeImage(): void {
    this.imagePreview = null;
    this.selectedImage = null;
    this.postForm.patchValue({
      imagemUrl: ''
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    if (this.postForm.invalid) return;

    this.isUploading = true;
    
    const formValue = this.postForm.value;
    const postData = {
      titulo: formValue.titulo ?? '',
      conteudo: formValue.conteudo ?? '',
      autor: formValue.autor ?? '',
      status: formValue.status ?? '',
      tema: formValue.tema ?? '',
      imagemUrl: formValue.imagemUrl ?? '',
      dataCriacao: new Date().toISOString()
    };

    // Aqui você chamaria o serviço para enviar os dados
    this.postService.createPost(postData).subscribe({
      next: (response) => {
        this.isUploading = false;
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creating post:', error);
        this.isUploading = false;
      }
    });
  }
}