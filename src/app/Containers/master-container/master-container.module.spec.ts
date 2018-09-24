import { MasterContainerModule } from './master-container.module';

describe('MasterContainerModule', () => {
  let masterContainerModule: MasterContainerModule;

  beforeEach(() => {
    masterContainerModule = new MasterContainerModule();
  });

  it('should create an instance', () => {
    expect(masterContainerModule).toBeTruthy();
  });
});
