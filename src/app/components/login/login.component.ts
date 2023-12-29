import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Message } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  messages2: Message[] | undefined;
  error: boolean = false;
  loading: boolean = false;
  ref!: DynamicDialogRef
  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService
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
    this.AuthService.login(this.form.value).subscribe(
      (res: any) => {          
      /*   this.MessagesService.showSuccessLogin(); */
        this.loading = false;      
        this.AuthService.loginSuccessEvent.emit();

      },
      (err: any) => {
        this.loading = false;
        this.error = true;
   /*      this.MessagesService.showFailedLogin(); */
      }
    );
  }

  isInvalid(fieldName: string) {
    const control = this.form.get(fieldName);
    return control && control.invalid && (control.dirty || control.touched);
  }
}
