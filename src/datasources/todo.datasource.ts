import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Todo',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3308,
  user: 'sadonon',
  password: '1996MeSum05@',
  database: 'todos_app'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TodoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Todo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Todo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
