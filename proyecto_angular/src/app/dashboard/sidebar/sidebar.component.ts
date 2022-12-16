import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Permission from '../../models/permission';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent{
  
  @Input() options: Permission[] = []

}
