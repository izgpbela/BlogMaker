import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: any = null;
  isAuthenticated: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    this.isAuthenticated = !!token;
    if (this.isAuthenticated) {
      const userData = localStorage.getItem('user');
      this.user = userData ? JSON.parse(userData) : null;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.user = null;
    this.isMenuOpen = false;
  }
}
