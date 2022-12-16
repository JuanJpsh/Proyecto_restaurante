import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import Permission from '../models/permission';
import { PERMISSIONS } from './dashboard.permissions';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  permissionsTopbar: Permission[] = [];
  permissionsSidebar: Permission[] = [];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.pipe(
      map((data) => {
        let permissions: any = data['permissions'];
        this.permissionsTopbar = permissions.permissionsTopbar
        this.permissionsSidebar = permissions.permissionsSidebar
      })
    );
  }
}
