import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userData = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  constructor(private authService: AuthService, private router: Router){}

  onSubmit(){
    if(this.userData.password !== this.userData.confirm_password){
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(this.userData).subscribe({
      next: (res) => {
        console.log(res);
        alert('Usuario registrado exitosamente');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('error:', err);
        alert('Error registering user');
      }

    })
  }
}
