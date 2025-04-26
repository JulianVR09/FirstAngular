import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: any = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router){}

  onSubmit(){
    this.authService.login(this.credentials).subscribe({

      next: (res)=>{
        console.log(res);
        alert('Usuario logueado exitosamente');
        this.router.navigate(['/home']);
    },
    error: (err) => {
      console.error('Error al iniciar sesión:', err);
      alert('Error al iniciar sesión. Por favor, verifica tus datos.');
    }

      }
    );
  }
}
