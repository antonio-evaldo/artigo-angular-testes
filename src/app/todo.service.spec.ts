import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let servico: TodoService;

  beforeEach(() => {
    // servico = new TodoService();
    TestBed.configureTestingModule({ providers: [TodoService] });
    servico = TestBed.inject(TodoService);
  });

  it('deveria ser criado', () => {
    expect(servico).toBeTruthy();
  });

  it('deveria inicialmente retornar uma lista vazia', () => {
    expect(servico.obterItens()).toEqual([]);
  });

  it('deveria adicionar um item na lista', () => {
    const item = 'Estudar testes';

    servico.adicionarItem(item);
    expect(servico.obterItens()).toContain(item);
  });
});
