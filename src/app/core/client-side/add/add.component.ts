import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgFor, NgIf } from '@angular/common';
import { prioridad, tipo_a, tipo_b, carrera } from '../utils/data';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Dropdown, DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ButtonModule, InputTextModule, SelectButtonModule, DropdownModule, NgIf, NgFor],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  form!: FormGroup;
  loading = false;
  prioridad = prioridad;
  selectedPrioridad: any;
  tipo_a = tipo_a;
  selectedTipo_a: any;
  tipo_b = tipo_b;
  selectedTipo_b: any;
  carrera = carrera;
  selectedCarrera: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚ\s]*$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚ\s]*$/)]],
      numero: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚ\s]*$/)]],
      atencion: ['', Validators.required],
      representante: ['', Validators.required],
      colegio: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚ\s]*$/)]],
      carrera: ['', Validators.required],
      prioridad: ['', Validators.required],
    });
  }

  isInvalid(fieldName: string) {
    return this.form?.get(fieldName)?.invalid && (this.form?.get(fieldName)?.dirty || this.form?.get(fieldName)?.touched);
  }
  

}
