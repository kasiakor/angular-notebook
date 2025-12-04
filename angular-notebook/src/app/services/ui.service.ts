import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddNoteSubject = new BehaviorSubject<boolean>(false);

  /** Observable stream for add note form visibility */
  showAddNote$: Observable<boolean> = this.showAddNoteSubject.asObservable();

  toggleAddNote() {
    this.showAddNoteSubject.next(!this.showAddNoteSubject.value);
  }

  setShowAddNote(show: boolean) {
    this.showAddNoteSubject.next(show);
  }
}
