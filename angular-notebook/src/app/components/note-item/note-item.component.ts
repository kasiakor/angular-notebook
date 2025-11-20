import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Note } from '../../mock-notes';

@Component({
  selector: 'app-note-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
})
export class NoteItemComponent {
  faTimes = faTimes;
  @Input() note!: Note;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  onDelete(note: Note) {
    console.log('Deleting note with id:', note.id);
    this.delete.emit(this.note.id);
  }

  onToggle() {
    console.log('Toggling reminder for note with id:', this.note.reminder);
    // emit the id so parent can toggle and call the service
    this.toggle.emit(this.note.id);
  }
}
