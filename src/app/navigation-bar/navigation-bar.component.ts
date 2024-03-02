import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './navigation-bar.component.html',
  styles: ``
})
export class NavigationBarComponent {
  show_sidebar: boolean = false;

}
