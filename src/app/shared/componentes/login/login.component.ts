import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicioLoginService } from '../../servicios/servicio-login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("inputCorreo") correo!:ElementRef<HTMLInputElement>
  @ViewChild("inputPassword") password!:ElementRef<HTMLInputElement>

  constructor(private servicio:ServicioLoginService, private router:Router, private formBuilder: FormBuilder){}

  submit(){
    this.servicio.login(this.correo.nativeElement.value,this.password.nativeElement.value)
    .subscribe((data)=>{
      this.router.navigate(["/inicio"])
    });
  }


  public myForm: FormGroup = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.minLength(4), Validators.email]],
    password: ["", [Validators.required, Validators.minLength(4)]],
  })


  getFieldError(field: string): string | null {

    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'email':
          return 'El campo no es de tipo email';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracteres.`;
      }
    }

    return null;
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }
  onSave() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}
