import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component implements OnInit {

  constructor(private dataService: DataService){

  }

  ngOnInit(): void{
    this.dataService.dataEmitter.subscribe((value) => {
      this.inputText = value;
    })
  }

  inputText: string | undefined;
}
