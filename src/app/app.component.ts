import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  titulo = 'Todo List';
  novoItem = '';
  itens: string[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.itens = this.todoService.obterItens();
  }

  adicionarItem() {
    this.todoService.adicionarItem(this.novoItem);
    this.itens = this.todoService.obterItens();
  }
}
