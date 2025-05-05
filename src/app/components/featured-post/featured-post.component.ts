import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: []
})
export class FeaturedPostComponent {
  @Input() post!: Post;

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(date));
  }
}
