import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedService } from './shared.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  // providers : [SharedService]
})
export class SharedModule { 
  static forRoot () : ModuleWithProviders {
    return {
      ngModule : SharedModule,
      providers : [SharedService]
    }
  } 
}


//npm cache clean --force