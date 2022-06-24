import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private toasrt: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // lấy ra thông tin người dùng đã đăng nhập
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') as string)
    // kiêm tra nếu có thì cho vào admin
    if (loggedInUser) {
      if(loggedInUser.user.role == '1'){
        return true
      }
      else{
        this.toasrt.info("Bạn không có quyền truy cập");
        this.router.navigateByUrl('/')
        return false
      }
    }
    // nếu không thì quay ra login
    else {
      this.toasrt.info("Bạn chưa đăng nhập. Vui lòng mời bạn đăng nhập!");
      this.router.navigateByUrl('/login')
      return false
    }
  }
  
}
