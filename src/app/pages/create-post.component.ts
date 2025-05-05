// src/app/pages/create-post/create-post.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from '../components/footer.component';

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
    FooterComponent
  ],
  template: `
    <div class="max-w-3xl mx-auto p-4">
      <h1 class="text-2xl font-bold mb-6">Postagem</h1>
      
      <form [formGroup]="postForm" class="flex flex-col gap-6">
        <mat-form-field appearance="outline">
          <mat-label>Tema</mat-label>
          <input matInput formControlName="theme" placeholder="Digite o nome do tema">
        </mat-form-field>
        
        <mat-form-field appearance="outline">
          <mat-label>Título</mat-label>
          <input matInput formControlName="title" placeholder="Digite o título da postagem">
        </mat-form-field>
        
        <mat-form-field appearance="outline" class="h-64">
          <mat-label>Texto</mat-label>
          <textarea matInput formControlName="content" placeholder="Digite o conteúdo da postagem" rows="10"></textarea>
        </mat-form-field>
        
        <div class="border-t pt-4">
          <button mat-raised-button color="primary" type="submit">Publicar</button>
        </div>
      </form>
      
      <app-footer />
    </div>
  `,
  styles: []
})
export class CreatePostComponent {
  postForm = new FormGroup({
    theme: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  });
}