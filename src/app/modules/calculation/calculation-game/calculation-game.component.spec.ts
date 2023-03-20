import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { CalculationGameComponent } from './calculation-game.component';

describe('CalculationGameComponent', () => {
  let component: CalculationGameComponent;
  let fixture: ComponentFixture<CalculationGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate random numbers', () => {
    // Act & Arrange
    component.generateRandomNumbers();

    // Assert
    expect(component.num1).toBeGreaterThanOrEqual(0);
    expect(component.num2).toBeGreaterThanOrEqual(0);
  });

  it('should test checkResult', () => {
    // Act
    component.num1 = 3;
    component.num2 = 3;
    component.result = 6;

    // Arrange
    component.checkResult();

    // Assert
    expect(component.resultObj.result).toBe("3 + 3 = 6");
    expect(component.resultObj.accuracy).toBe(true);
    expect(component.num1).not.toBe(3);
    expect(component.num2).not.toBe(3);
  })

  it('should test checkResult with wrong result', () => {
    // Act
    component.num1 = 3;
    component.num2 = 3;
    component.result = 10;

    // Arrange
    component.checkResult();

    // Assert
    expect(component.resultObj.result).toBe("3 + 3 = 10");
    expect(component.resultObj.accuracy).toBe(false);
    expect(component.num1).toBe(3);
    expect(component.num2).toBe(3);
  })

  it('should test resetState method', () => {
    // Act & Arrange
    component.resetState();

    // Assert
    expect(component.result).toBe(undefined);
    expect(component.resultObj).toEqual({ result: '', accuracy: false})
  })
});
