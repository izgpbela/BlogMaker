import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularMaterialModule,
    // Import other modules here as needed
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FeaturedPostComponent
  ],
  providers: [
    provideHttpClient(withInterceptors([]))
  ],
  bootstrap: []
})
export class AppModule {}
