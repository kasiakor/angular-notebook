import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../mock-notes';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  @Output() noteAdded = new EventEmitter<Omit<Note, 'id'>>();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  onAddNote() {
    if (!this.text) {
      alert('Plese add a note text');
    } else if (this.text.trim() && this.day.trim()) {
      // emit added task
      this.noteAdded.emit({
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      });
      // reset form
      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
}
