import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cargando!: boolean;
  sesionFallida!: boolean;
  credencialesFormGroup!: FormGroup;

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.cargando = false;
    this.sesionFallida = false;
    this.credencialesFormGroup = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasenia: new FormControl('', [Validators.required])
    });
  }

  darError(nombreControl: string) {
    let contolGroup = this.credencialesFormGroup.get(nombreControl);
    if (contolGroup?.hasError('required')) return 'Este campo es obligatorio'
    return contolGroup?.hasError('email') ? 'Correo invalido, Escriba un correo valido' : ''
  }

  enIniciarSesion() {
    if (this.credencialesFormGroup.invalid) return
    this.cargando = true;
    this.authSvc.iniciarSesion(
      {
        correo: this.credencialesFormGroup.get('correo')?.value,
        contrasenia: this.credencialesFormGroup.get('contrasenia')?.value
      }
    ).subscribe({
      next: (resp) => {
        localStorage.setItem(`Proyecto_Rest_Nombre`, resp.nombre);
        localStorage.setItem(`Proyecto_Rest_Token`, resp.tokenAcceso);
      },
      error: (e) => {
        this.sesionFallida = true;
        this.cargando = false;
      },
      complete: () => this.router.navigate(['/'])
    });
  }

}
