import { Component, OnInit } from '@angular/core';
import User from '../../User';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    if (!f.valid) {
      this.error = 'Username or Password is missing';
      return;
    }

    this.auth.register(this.user).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }
}
