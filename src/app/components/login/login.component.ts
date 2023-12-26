import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Message } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup;
  messages2: Message[] | undefined;
  error: boolean = false;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loadform();
  }

  loadform() {
    this.form = this.fb.group({
      ci: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  onSubmit(): void {
    this.loading = true;
/*     this.authService.login(this.form.value).subscribe(
      (res: any) => {      
        this.MessagesService.showSuccessLogin();
        this.loading = false;       
      },
      (err: any) => {
        this.loading = false;
        this.error = true;
        this.MessagesService.showFailedLogin();
      }
    ); */
  }

  isInvalid(fieldName: string) {
    const control = this.form.get(fieldName);
    return control && control.invalid && (control.dirty || control.touched);
  }
}
