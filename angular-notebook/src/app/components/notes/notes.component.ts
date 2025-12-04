import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from '../../mock-notes';
import { NoteService } from '../../services/note.service';
import { UiService } from '../../services/ui.service';
import { AddNoteComponent } from '../add-note/add-note.component';
import { NoteItemComponent } from '../note-item/note-item.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NoteItemComponent, AddNoteComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit, OnDestroy {
  notes: Note[] = [];
  showAddNote: boolean = false;
  private notesSub?: Subscription;
  private uiSub?: Subscription;

  constructor(private noteService: NoteService, private uiService: UiService) {}

  ngOnInit() {
    // subscribe to notes observable from the service
    this.notesSub = this.noteService.getNotes().subscribe((notes) => {
      this.notes = notes;
    });

    // subscribe to UI service for add note form visibility
    this.uiSub = this.uiService.showAddNote$.subscribe((show) => {
      this.showAddNote = show;
    });
  }

  ngOnDestroy() {
    this.notesSub?.unsubscribe();
    this.uiSub?.unsubscribe();
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id);
  }

  toggleReminder(id: number) {
    this.noteService.toggleReminder(id);
  }

  addNote(note: Omit<Note, 'id'>) {
    console.log('Adding note:', note);
    this.noteService.addNote(note);
    // Close the form after adding note
    this.uiService.setShowAddNote(false);
  }
}
