import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NotesComponent } from "./components/notes/notes.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, NotesComponent],
})
export class AppComponent {}
