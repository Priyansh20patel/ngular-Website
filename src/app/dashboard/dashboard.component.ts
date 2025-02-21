// dashboard.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  totalUsers: number = 500;  // Example statistic
  activeSessions: number = 120;  // Example statistic
  newMessages: number = 8;  // Example statistic

  
  activities = [
    { time: '2025-02-10 09:30', description: 'New user signed up' },
    { time: '2025-02-10 10:00', description: 'Profile updated' },
    { time: '2025-02-10 10:30', description: 'Password change request' },
    { time: '2025-02-10 11:00', description: 'Message received from user' },
    { time: '2025-02-10 11:30', description: 'New comment on your post' },
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize any data or fetch from APIs if necessary
  }
}
