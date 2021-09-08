import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { StorageService } from 'src/app/core/services/storage.service';

import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  isLoginSuccess:boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private storageService: StorageService
    ) { 
      this.authForm = this.fb.group({
        'username': [''],
        'password': ['']
      });
    }

  ngOnInit(): void {
  }

  submitForm(){
    this.isLoginSuccess = this.authService.isAuthenticated();
    if(this.isLoginSuccess)
    {
      this.storageService.store('Token','fb99065b1be3aa1b4cb3b062fb5dfcd99bc606eceb00069fa4e51a148776f78a')
      this.router.navigate(['home'])
    }
  }
}
