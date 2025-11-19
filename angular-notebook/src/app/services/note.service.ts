import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../mock-notes';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notesSubject = new BehaviorSubject<Note[]>([]);

  /** Observable stream of notes */
  notes$: Observable<Note[]> = this.notesSubject.asObservable();

  private readonly apiUrl = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {
    this.loadNotes();
  }

  private loadNotes() {
    this.http.get<Note[]>(this.apiUrl).subscribe({
      next: (notes) => this.notesSubject.next(notes),
      error: (err) => console.error('Failed to load notes from API', err),
    });
  }

  /** Get current notes as observable */
  getNotes(): Observable<Note[]> {
    return this.notes$;
  }

  /** Add a new note (POST to API) */
  addNote(note: Omit<Note, 'id'>) {
    this.http.post<Note>(this.apiUrl, note).subscribe({
      next: (created) =>
        this.notesSubject.next([created, ...this.notesSubject.value]),
      error: (err) => console.error('Failed to add note', err),
    });
  }

  /** Delete a note by id (DELETE to API) */
  deleteNote(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () =>
        this.notesSubject.next(
          this.notesSubject.value.filter((n) => n.id !== id)
        ),
      error: (err) => console.error('Failed to delete note', err),
    });
  }

  /** Toggle reminder flag (PATCH to API) */
  toggleReminder(id: number) {
    const note = this.notesSubject.value.find((n) => n.id === id);
    if (!note) return;
    const patch = { reminder: !note.reminder } as Partial<Note>;
    this.http.patch<Note>(`${this.apiUrl}/${id}`, patch).subscribe({
      next: (updated) =>
        this.notesSubject.next(
          this.notesSubject.value.map((n) => (n.id === id ? updated : n))
        ),
      error: (err) => console.error('Failed to toggle reminder', err),
    });
  }
}
