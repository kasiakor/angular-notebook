import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import NOTES, { Note } from '../../mock-notes';
import { NoteItemComponent } from '../note-item/note-item.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NoteItemComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = NOTES;

  ngOnInit() {
    // Load mock notes if needed
    // this.loadNotes();
    console.log(this.notes);
  }

  loadNotes() {
    // Mock data - can be replaced with API call
    // this.notes = [
    //   {
    //     id: 1,
    //     title: 'Welcome',
    //     content: 'This is your first note.',
    //     createdAt: new Date(),
    //   },
    //   {
    //     id: 2,
    //     title: 'Angular Tips',
    //     content: 'Remember to use standalone components!',
    //     createdAt: new Date(),
    //   },
    // ];
  }

  //   addNote() {
  //     if (this.newNoteTitle.trim() && this.newNoteContent.trim()) {
  //       const note: Note = {
  //         id: this.notes.length + 1,
  //         title: this.newNoteTitle,
  //         content: this.newNoteContent,
  //         createdAt: new Date(),
  //       };
  //       this.notes.unshift(note);
  //       this.newNoteTitle = '';
  //       this.newNoteContent = '';
  //     }
  //   }

  //   deleteNote(id: number) {
  //     this.notes = this.notes.filter((note) => note.id !== id);
  //   }
}
