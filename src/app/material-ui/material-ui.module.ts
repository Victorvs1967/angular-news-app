import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatButtonModule,
];

@NgModule({
  exports: [ ...MATERIAL_COMPONENTS ],
  imports: [  CommonModule , ...MATERIAL_COMPONENTS ]
})
export class MaterialUiModule { }
