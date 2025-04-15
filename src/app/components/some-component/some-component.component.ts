// src/app/components/some-component/some-component.component.ts
import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.css']
})
export class SomeComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
