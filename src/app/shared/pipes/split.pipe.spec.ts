import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SplitPipe } from './split.pipe';



describe('SpinnerComponent', () => {
  let component: SplitPipe;


  beforeEach(() => {
    component =new SplitPipe();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return empty', ( ) => {
    expect(component.transform('' , [])).toBe('');
  })

  it('Should return tobic before ;',()=>{
    expect(component.transform('Tobic; tobic2',[])).toBe('Tobic');
  })
});
