import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup
  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.LoginForm = new FormGroup({
      email: new FormControl('',Validators.email),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const submitData = this.LoginForm.value
    this.authService.login(submitData).subscribe(data =>{
      console.log(data)
      // 1.Neu thanh cong -> luu tru du lieu user vao LocalStorage
      // setItem(key luu trong LocalStorage, chuooi gia tri)
      localStorage.setItem('loggedInUser', JSON.stringify(data))
      // dieu huong quay ve Admin
      this.router.navigateByUrl('/')
    })
  }

}