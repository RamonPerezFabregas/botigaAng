import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DbServei implements InMemoryDbService {
  createDb() {
    let sessio = [ {ses: false }];
    return {sessio};
  }
}