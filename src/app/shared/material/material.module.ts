import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
