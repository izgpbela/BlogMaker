import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  template: `
    <mat-card class="max-w-2xl mx-auto my-8 bg-secondary-300 shadow-lg rounded-lg">
      <mat-card-header class="bg-secondary-700 text-secondary-50 p-4">
        <mat-card-title>{{ postId ? 'Edit Post' : 'Create New Post' }}</mat-card-title>
      </mat-card-header>

      <mat-card-content class="p-6">
        <form [formGroup]="postForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
          <!-- Theme Field -->
          <mat-form-field appearance="outline">
            <mat-label>Theme</mat-label>
            <mat-select formControlName="theme" required>
              <mat-option *ngFor="let theme of availableThemes" [value]="theme">
                {{ theme }}
              </mat-option>
            </mat-select>
            <mat-error *ngIf="postForm.get('theme')?.hasError('required')">
              Theme is required
            </mat-error>
          </mat-form-field>

          <!-- Title Field -->
          <mat-form-field appearance="outline">
            <mat-label>Title</mat-label>
            <input matInput formControlName="title" required>
            <mat-error *ngIf="postForm.get('title')?.errors?.['required']">
              Title is required
            </mat-error>
            <mat-error *ngIf="postForm.get('title')?.errors?.['minlength']">
              Title must be at least 5 characters
            </mat-error>
          </mat-form-field>

          <!-- Content Field -->
          <mat-form-field appearance="outline" class="min-h-[200px]">
            <mat-label>Content</mat-label>
            <textarea matInput formControlName="content" required rows="8"></textarea>
            <mat-error *ngIf="postForm.get('content')?.errors?.['required']">
              Content is required
            </mat-error>
            <mat-error *ngIf="postForm.get('content')?.errors?.['minlength']">
              Content must be at least 20 characters
            </mat-error>
          </mat-form-field>

          <!-- Action Buttons -->
          <div class="flex justify-end gap-4 mt-4">
            <button mat-stroked-button type="button" 
                    class="border-primary-700 text-primary-700 hover:bg-primary-100"
                    (click)="onCancel.emit()">
              Cancel
            </button>
            <button mat-raised-button type="submit" 
                    color="primary"
                    class="bg-primary-700 hover:bg-primary-600 text-white"
                    [disabled]="postForm.invalid">
              {{ postId ? 'Update' : 'Publish' }}
            </button>
          </div>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .mat-form-field-outline {
      @apply border-primary-300;
    }
    .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {
      @apply text-primary-500;
    }
  `]
})
export class PostFormComponent {
  @Input() postId: string | null = null;
  @Input() availableThemes: string[] = [
    'Technology',
    'Web Development',
    'Mobile Development',
    'UX/UI Design'
  ];
  @Output() formSubmit = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  // FormGroup corrigido com validadores apropriados
  postForm = new FormGroup({
    theme: new FormControl('', [Validators.required]),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ])
  });

  @Input() set postData(value: any) {
    if (value) {
      this.postForm.patchValue(value);
    }
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      this.formSubmit.emit({
        ...this.postForm.value,
        id: this.postId
      });
    }
  }
}