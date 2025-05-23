// src/app/models/post.model.ts
export interface Post {
  id?: number;
  titulo: string;
  conteudo: string;
  autor: string;
  dataCriacao?: string;
  status: string; // Ou um enum específico
  tema: string;   // Ou um enum específico
  imagemUrl?: string;
}