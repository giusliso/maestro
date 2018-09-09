import { TargetStoreModule } from './target-store.module';

describe('TargetStoreModule', () => {
  let targetStoreModule: TargetStoreModule;

  beforeEach(() => {
    targetStoreModule = new TargetStoreModule();
  });

  it('should create an instance', () => {
    expect(targetStoreModule).toBeTruthy();
  });
});
