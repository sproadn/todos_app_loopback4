import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TodoDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.Todo') dataSource: TodoDataSource,
  ) {
    super(Todo, dataSource);
  }
}
