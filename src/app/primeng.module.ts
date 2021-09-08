import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [],
  imports: [
    TableModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    InputTextareaModule,
    CheckboxModule
  ],
  exports: [
    TableModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    InputTextareaModule,
    CheckboxModule
  ]
})
export class PrimengModule { }
