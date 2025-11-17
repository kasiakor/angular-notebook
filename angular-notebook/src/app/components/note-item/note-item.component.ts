import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../mock-notes';

@Component({
  selector: 'app-note-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
})
export class NoteItemComponent {
  @Input() note!: Note;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.note.id);
  }
}
