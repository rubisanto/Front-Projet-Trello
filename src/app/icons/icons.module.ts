import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAddComponent } from './icon-add/icon-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';



@NgModule({
  declarations: [
    IconAddComponent,
    IconEditComponent,
    IconDeleteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconAddComponent,
    IconEditComponent,
    IconDeleteComponent
  ]
})
export class IconsModule { }
