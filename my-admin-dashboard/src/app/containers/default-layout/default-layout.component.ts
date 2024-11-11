import { Component } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {
  navItems = [
    { name: 'Dashboard', url: '/dashboard', icon: 'cil-speedometer' },
    { name: 'Settings', url: '/settings', icon: 'cil-settings' },
    { name: 'Profile', url: '/profile', icon: 'cil-user' }
  ];
}
