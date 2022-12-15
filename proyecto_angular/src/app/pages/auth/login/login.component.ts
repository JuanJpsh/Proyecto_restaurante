import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading!: boolean;
  failedSession!: boolean;
  credentialsFormGroup!: FormGroup;

  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loading = false;
    this.failedSession = false;
    this.credentialsFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  getError(controlName: string) {
    let controlGroup = this.credentialsFormGroup.get(controlName);
    if (controlGroup?.hasError('required')) return 'Este campo es obligatorio';
    return controlGroup?.hasError('email')
      ? 'Correo invalido, Escriba un correo valido'
      : '';
  }

  onLogin() {
    if (this.credentialsFormGroup.invalid) return;
    this.loading = true;
    this.authSvc
      .signin({
        email: this.credentialsFormGroup.get('email')?.value,
        password: this.credentialsFormGroup.get('password')?.value,
      })
      .subscribe({
        next: (resp) => {
          localStorage.setItem(`Manager_Restaurant_Name`, resp.name);
          localStorage.setItem(`Manager_Restaurant_Token`, resp.access_token);
        },
        error: (e) => {
          this.failedSession = true;
          this.loading = false;
        },
        complete: () => this.router.navigate(['/']),
      });
  }
}
