import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  itens: string[] = [
    'Estudar Angular',
    'Estudar Testes'
  ];

  obterItens(): string[] {
    return this.itens;
  }

  adicionarItem(item: string): void {
    this.itens.push(item);
  }
}
