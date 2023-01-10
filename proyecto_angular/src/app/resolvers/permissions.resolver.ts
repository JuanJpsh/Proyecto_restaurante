import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { PERMISSIONS } from '../dashboard/dashboard.permissions';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsResolver implements Resolve<any> {
  permissionsTopbar = PERMISSIONS.slice(0, 1);
  permissionsSidebar = PERMISSIONS.slice(1);
  constructor(
    private userSvc: UserService,
    private authSvc: AuthService,
    private router: Router
  ) {}
  resolve(): Observable<any> {
    return this.userSvc.getPermissions().pipe(
      map((resp) => {
        let permissions: String[] = resp.permissions;
        this.permissionsTopbar = this.permissionsTopbar.filter((pt) =>
          permissions.some((ps) => ps == pt.permission)
        );
        this.permissionsSidebar = this.permissionsSidebar.filter((pt) =>
          permissions.some((ps) => ps == pt.permission)
        );
        return {
          permissionsTopbar: this.permissionsTopbar,
          permissionsSidebar: this.permissionsSidebar,
        };
      }),
      catchError((err) => {
        this.authSvc.signout();
        this.router.navigate(['/auth']);
        throw new Error(err.error.error);
      })
    );
  }
}
