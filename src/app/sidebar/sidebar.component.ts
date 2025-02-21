import { Component } from '@angular/core';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isClosed = false;
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isClosed = !this.isClosed;
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

}
