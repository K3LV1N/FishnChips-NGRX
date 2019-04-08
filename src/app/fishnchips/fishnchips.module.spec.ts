import { FishnchipsModule } from './fishnchips.module';

describe('FishnchipsModule', () => {
  let fishnchipsModule: FishnchipsModule;

  beforeEach(() => {
    fishnchipsModule = new FishnchipsModule();
  });

  it('should create an instance', () => {
    expect(fishnchipsModule).toBeTruthy();
  });
});
