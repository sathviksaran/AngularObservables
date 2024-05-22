import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {

  constructor(private dataService: DataService){

  }

  enteredText!: string;

  OnBtnClick(){
    // console.log(this.enteredText);
    this.dataService.raiseDataEmitterEvent(this.enteredText);
  }
}
