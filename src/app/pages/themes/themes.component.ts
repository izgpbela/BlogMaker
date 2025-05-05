import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

interface Theme {
  id: number | string;
  name: string;
  description?: string;
}

interface Post {
  id: number | string;
  theme: Theme;
}

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  themes: Theme[] = [];
  posts: Post[] = [];
  themesLoading = true;
  postsLoading = true;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getThemes().then((themes) => {
      this.themes = themes;
      this.themesLoading = false;
    });

    this.postService.getPosts().then((posts) => {
      this.posts = posts;
      this.postsLoading = false;
    });
  }

  getPostCountByTheme(themeId: string | number): number {
    return this.posts.filter(post => post.theme.id === themeId).length;
  }
}
