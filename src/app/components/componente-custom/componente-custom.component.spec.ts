import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCustomComponent } from './componente-custom.component';

describe('ComponenteCustomComponent', () => {
  let component: ComponenteCustomComponent;
  let fixture: ComponentFixture<ComponenteCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
