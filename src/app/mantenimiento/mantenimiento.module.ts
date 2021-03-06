import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UprespcertComponent } from './pages/uprespcert/uprespcert.component';
import { ModulesMaterialModule } from '../modules_material/modules-material.module';
import { ComponentsGlobalsModule } from '../components-globals/components.globals.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MantenimentoRoutingModule } from './mantenimiento-routing.module';
import { ModalAsigrescertComponent } from './components/modal-asigrescert/modal-asigrescert.component';
import { ModalBusquedatrabajadorComponent } from './components/modal-busquedatrabajador/modal-busquedatrabajador.component';



@NgModule({
  declarations: [UprespcertComponent, ModalAsigrescertComponent, ModalBusquedatrabajadorComponent],
  imports: [
    CommonModule,
    MantenimentoRoutingModule,
    ModulesMaterialModule,
    ComponentsGlobalsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MantenimientoModule { }
