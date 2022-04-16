import { Component, OnInit } from '@angular/core';
import User from '../../User';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    if (!f.valid) {
      this.error = 'Username or Password is missing';
      return;
    }
    this.auth.login(this.user).subscribe(
      (response) => {
        this.auth.setToken(response.token);
        this.router.navigate(['/admin']);
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }
}
