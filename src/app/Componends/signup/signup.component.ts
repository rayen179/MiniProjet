import { Component, inject } from '@angular/core';
import { IEmployee } from '../../user';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',
    '/src/assets/css/style.css', ],
  imports: [CommonModule, FormsModule]
})
export class signupComponent {
    userGroup = new FormGroup({
    id: new FormControl(-1, { nonNullable: true }),
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });
  user: IEmployee[]=[];

  constructor(private userService: HttpService) {
    this.userService
      .getAll()
      .pipe(take(1))
      .subscribe((users) => (this.user = users));
  }
  createOrUpdateUser(): void {
    this.userGroup.value.id === -1 ? this.createUser()  : this.updateUser();

  }
  createUser(): void {
    this.userService
      .create(this.userGroup.value as IEmployee)
      .pipe(take(1))
      .subscribe((createdUser) => {
        this.user.push(createdUser);
        this.userGroup.reset();
      });
  }
  updateUser(): void {
    this.userService
      .update(this.userGroup.value as IEmployee)
      .pipe(take(1))
      .subscribe((updatedUser) => {
        const index = this.user.findIndex((u) => u.id === updatedUser.id);
        this.user[index] = updatedUser;
        this.userGroup.reset();
      });
  }


}

