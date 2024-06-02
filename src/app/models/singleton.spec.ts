import { Singleton } from './singleton';

describe('Singleton', () => {
  it('should create an instance', () => {
    expect(new Singleton()).toBeTruthy();
  });
});
