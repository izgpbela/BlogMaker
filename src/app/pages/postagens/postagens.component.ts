import { Component } from '@angular/core';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.scss']
})
export class PostagemComponent {
  postagem = {
    tema: '',
    titulo: '',
    texto: ''
  };

  publicarPostagem() {
    console.log('Postagem publicada:', this.postagem);
    // Aqui você pode chamar um serviço para salvar a postagem
  }
}
