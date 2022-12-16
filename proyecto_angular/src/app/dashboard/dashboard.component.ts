import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Permission from '../models/permission';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  permissionsTopbar: Permission[] = [];
  permissionsSidebar: Permission[] = [];

  constructor(private route: ActivatedRoute, private CHR: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      let permissions: any = data['permissions'];
      this.permissionsTopbar = permissions.permissionsTopbar;
      this.permissionsSidebar = permissions.permissionsSidebar;
      this.CHR.markForCheck();
    });
  }
}
