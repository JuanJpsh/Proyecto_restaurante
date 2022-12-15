import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Permission from '../../models/permission';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent{

  @Input() options: Permission[] = []
  @Output() clickMenu = new EventEmitter<void>();

  constructor(private authSvc: AuthService, private router: Router) { }

  onLogout() {
    this.authSvc.signout();
    this.router.navigate(['/auth'])
  }
}
