import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UiModule } from '../ui/ui.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    UiModule,
    IconsModule
  ]
})
export class CoreModule { }
