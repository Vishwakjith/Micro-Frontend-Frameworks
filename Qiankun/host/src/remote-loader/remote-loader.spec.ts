import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteLoader } from './remote-loader';

describe('RemoteLoader', () => {
  let component: RemoteLoader;
  let fixture: ComponentFixture<RemoteLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteLoader],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
