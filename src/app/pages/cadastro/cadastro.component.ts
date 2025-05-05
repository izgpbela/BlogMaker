import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
    registerForm: FormGroup;
    registerError: string = '';
    registerSuccess: string = '';
  
    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
    ) {
      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        username: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }
  
    register() {
      if (this.registerForm.valid) {
        const { name, username, password } = this.registerForm.value;
    
        this.authService.register(name, username, password).subscribe({
          next: (response) => {
            // Cadastro deu certo! Agora vamos logar
            this.authService.login(username, password).subscribe({
              next: (loginResponse) => {
                // Sucesso no login
                localStorage.setItem('token', loginResponse.token); // <-- salva o token
                this.router.navigate(['/posts']); // <-- redireciona pro posts
              },
              error: (error) => {
                this.registerError = 'Erro ao fazer login automático. Tente entrar manualmente.';
              }
            });
          },
          error: (error) => {
            if (error.status === 400 || error.status === 409) {
              this.registerError = 'Usuário já existe ou dados inválidos.';
            } else {
              this.registerError = 'Erro no servidor. Tente novamente mais tarde.';
            }
          }
        });
      } else {
        this.registerError = 'Preencha todos os campos corretamente.';
        this.registerForm.markAllAsTouched();
      }
    }
}
