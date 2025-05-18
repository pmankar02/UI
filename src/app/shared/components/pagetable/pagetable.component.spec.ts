import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetableComponent } from './pagetable.component';

describe('PagetableComponent', () => {
  let component: PagetableComponent;
  let fixture: ComponentFixture<PagetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
