import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

const mockListaTodo = ['Estudar Testes', 'Estudar Angular'];

class MockTodoService {
  private itens: string[] = mockListaTodo;

  obterItens(): string[] {
    return this.itens;
  }

  adicionarItem(item: string): void {
    this.itens.push(item);
  }
}

describe('AppComponent', () => {
  let componente: AppComponent;
  let servico: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: TodoService, useClass: MockTodoService },
      ],
    });

    componente = TestBed.inject(AppComponent);
    servico = TestBed.inject(TodoService);
  });

  it('deveria ser criado com lista vazia (antes de buscar do serviço)', () => {
    expect(componente.itens).toEqual([]);
  });

  it('deveria obter lista do TodoService', () => {
    componente.ngOnInit();
    expect(componente.itens).toEqual(mockListaTodo);
  });

  it('deveria adicionar item', () => {
    componente.ngOnInit();

    const novoItem = 'Assinar Alura';
    componente.novoItem = novoItem;
    componente.adicionarItem();

    expect(componente.itens).toContain(novoItem);
  });
});
