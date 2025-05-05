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
    // Simplified user and auth state initialization
    const token = localStorage.getItem('authToken');
    this.isAuthenticated = !!token;
    if (this.isAuthenticated) {
      // For demo, user info can be stored in localStorage or fetched from a user service
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
    // Optionally navigate to login or home page after logout
  }
}
