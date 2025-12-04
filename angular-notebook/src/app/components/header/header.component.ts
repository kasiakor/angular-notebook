import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [ButtonComponent],
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string = 'My Notebook';
  showAddNote: boolean = false;
  private sub?: Subscription;

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.sub = this.uiService.showAddNote$.subscribe((show) => {
      this.showAddNote = show;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  toggleAddNote() {
    this.uiService.toggleAddNote();
  }
}
