import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Root } from './root';
import { RouterModule } from '@angular/router';

describe('Root', () => {
  let component: Root;
  let fixture: ComponentFixture<Root>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([{ path: '', component: Root }]),
        Root,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Root);
    component = fixture.componentInstance;
    await fixture.whenStable();

  });

  it('should create the app', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });
});
