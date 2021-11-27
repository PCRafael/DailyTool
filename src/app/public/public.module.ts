import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent, FormatTimePipe } from "./public.component";
import { HeaderComponent } from "./shared/header/header.component";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { InputSwitchModule } from 'primeng/inputswitch';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [PublicComponent, FormatTimePipe, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DragDropModule,
    InputSwitchModule,
    MatSlideToggleModule,
  ],
})
export class PublicModule {}
