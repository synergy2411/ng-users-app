import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  
})
export class SharedModule { 
  static forRoot () : ModuleWithProviders {
    return {
      ngModule : SharedModule,
      providers : [SharedService]
    }
  } 
}
