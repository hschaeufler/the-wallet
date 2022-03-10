import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstallPromptService {
  installPromptEventSource = new BehaviorSubject<Event | undefined>(undefined);
  installPromptEvent$ = this.installPromptEventSource.asObservable();

  reset() {
    this.installPromptEventSource.next(undefined);
  }

  init() {
    console.log('Ich bin hier!');
    fromEvent(window, 'beforeinstallprompt').subscribe((event) => {
      console.log('test 2!');
      event.preventDefault();
      this.installPromptEventSource.next(event);
    });
  }

  constructor() {}
}
