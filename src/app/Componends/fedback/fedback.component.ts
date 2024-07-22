import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IEmployee } from '../interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-fedback',
  standalone: true,
  imports: [CommonModule,MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './fedback.component.html',
  styleUrls: ['./fedback.component.css',
    '/src/assets/css/style.css', ]
})
export class FedbackComponent {
  constructor(private toastr: ToastrService) {}
  formBuilder = inject(FormBuilder);
  toaster=inject(ToastrService);

  showSuccess() {
    this.toaster.success('Record added sucessfully.');
  }
  fedbackForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

  });




  onSubmit(){

  }



}
