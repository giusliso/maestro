import { TestFeatureModule } from './test-feature.module';

describe('TestFeatureModule', () => {
  let testFeatureModule: TestFeatureModule;

  beforeEach(() => {
    testFeatureModule = new TestFeatureModule();
  });

  it('should create an instance', () => {
    expect(testFeatureModule).toBeTruthy();
  });
});
