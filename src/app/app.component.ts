import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './services/flowbite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flowbite-app';

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  users = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 2 === 0 ? 'Admin' : 'Member',
  }));

  currentPage = 1;
  itemsPerPage = 10;

  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.users.slice(start, start + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
  
}