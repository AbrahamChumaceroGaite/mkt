import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgFor, NgIf } from '@angular/common';
import { prioridad, tipo_a, tipo_b, carrera } from '../utils/data';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { PersonService } from '../service/person.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  form!: FormGroup;
  loading : boolean = false;
  prioridad = prioridad;
  selectedPrioridad: any;
  tipo_a = tipo_a;
  selectedTipo_a: any;
  tipo_b = tipo_b;
  selectedTipo_b: any;
  carrera = carrera;
  selectedCarrera: any;
  ref!: DynamicDialogRef;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService
    ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚ\s]*$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚ\s]*$/)]],
      telefono:  ['', Validators.required],
      atencion: ['', Validators.required],
      representante: ['', Validators.required],
      colegio: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚ\s]*$/)]],
      carrera: ['', Validators.required],
      prioridad: ['',]
    });
  }

  submit() {
    this.loading = true;


    this.personService.postPerson(this.form.value).subscribe(
      (data) => {
        console.log(data);
        this.loading = false;
        this.form.reset();
        this.ref.close();
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  isInvalid(fieldName: string) {
    return this.form?.get(fieldName)?.invalid && (this.form?.get(fieldName)?.dirty || this.form?.get(fieldName)?.touched);
  }
  

}
