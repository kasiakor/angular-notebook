import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  imports: [CommonModule],
})
export class ButtonComponent {
  @Input() label: string = 'Add';
  @Input() color: string = 'green';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    console.log('button clicked');
    this.buttonClick.emit();
  }
}
