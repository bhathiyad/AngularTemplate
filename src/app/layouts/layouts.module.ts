import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutComponent } from './layout.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LeftnavComponent,
    TopnavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutsModule { }
