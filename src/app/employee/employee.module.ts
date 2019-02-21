import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

@NgModule({
    declarations :      [ NewEmployeeComponent ],
    imports     :       [ CommonModule ],
    providers     :     [],
    exports        :    [NewEmployeeComponent]      // export when using with Selector
    //bootstrap :         []            //bootstrap must be part of only Root module
})
export class EmployeeModule{}