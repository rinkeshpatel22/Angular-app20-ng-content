import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

 public showAlert(): void{
    alert('This is Parent component... Calling from child component view');
  }
}
