import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import Permission from '../models/permission';
import { PERMISSIONS } from './dashboard.permissions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  permissionsTopbar: Permission[] = [];
  permissionsSidebar: Permission[] = [];

  constructor(
    private userSvc: UserService,
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.permissionsTopbar = PERMISSIONS.slice(0, 1);
    this.permissionsSidebar = PERMISSIONS.slice(1);

    this.userSvc.getPermissions().subscribe({
      next: (resp) => {
        let permissions: String[] = resp.permissions;
        this.permissionsTopbar = this.permissionsTopbar.filter((pt) =>
          permissions.some((ps) => ps == pt.permission)
        );
        this.permissionsSidebar = this.permissionsSidebar.filter((pt) =>
          permissions.some((ps) => ps == pt.permission)
        );
      },
      error: (er) => {
        this.authSvc.signout();
        console.error(er);
        this.router.navigate(['/auth']);
      },
    });
  }
}
