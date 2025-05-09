import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLibraryAComponent } from './shared-library-a.component';

describe('SharedLibraryAComponent', () => {
  let component: SharedLibraryAComponent;
  let fixture: ComponentFixture<SharedLibraryAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLibraryAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLibraryAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
