import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import NOTES, { Note } from '../mock-notes';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notesSubject = new BehaviorSubject<Note[]>([...NOTES]);

  /** Observable stream of notes */
  notes$: Observable<Note[]> = this.notesSubject.asObservable();

  /** Get current notes as observable */
  getNotes(): Observable<Note[]> {
    console.log('getNotes called');
    return this.notes$;
  }

  //   /** Add a new note (id generated) */
  //   addNote(note: Omit<Note, 'id'>) {
  //     const newNote: Note = {
  //       id: Date.now(),
  //       ...note,
  //     };
  //     const current = this.notesSubject.value;
  //     this.notesSubject.next([newNote, ...current]);
  //   }

  //   /** Delete a note by id */
  //   deleteNote(id: number) {
  //     const updated = this.notesSubject.value.filter((n) => n.id !== id);
  //     this.notesSubject.next(updated);
  //   }

  //   /** Toggle reminder flag on a note */
  //   toggleReminder(id: number) {
  //     const updated = this.notesSubject.value.map((n) =>
  //       n.id === id ? { ...n, reminder: !n.reminder } : n
  //     );
  //     this.notesSubject.next(updated);
  //   }
}
