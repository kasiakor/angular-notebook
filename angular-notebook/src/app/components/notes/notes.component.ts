import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from '../../mock-notes';
import { NoteService } from '../../services/note.service';
import { NoteItemComponent } from '../note-item/note-item.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NoteItemComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit, OnDestroy {
  notes: Note[] = [];
  private sub?: Subscription;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    // subscribe to notes observable from the service
    this.sub = this.noteService.getNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  //   deleteNote(id: number) {
  //     this.noteService.deleteNote(id);
  //   }

  //   addNote(note: Omit<Note, 'id'>) {
  //     this.noteService.addNote(note);
  //   }
}
