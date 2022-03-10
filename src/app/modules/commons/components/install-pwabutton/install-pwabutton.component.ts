import { Component, OnDestroy, OnInit } from '@angular/core';
import { InstallPromptService } from '../../services/install-prompt.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'the-wallet-install-pwabutton',
  template: `
    <button
      class="install-pwabutton"
      color="accent"
      *ngIf="installPromptEvent"
      (click)="installPWA()"
      mat-button
    >
      <mat-icon>install_mobile</mat-icon>Install App
    </button>
  `,
  styleUrls: ['./install-pwabutton.component.scss'],
})
export class InstallPWAButtonComponent implements OnInit, OnDestroy {
  installPromptEvent?: Event;
  private installPromptEventSubscription?: Subscription;

  constructor(private installPromptService: InstallPromptService) {}

  ngOnDestroy(): void {
    if (this.installPromptEventSubscription) {
      this.installPromptEventSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.installPromptEventSubscription =
      this.installPromptService.installPromptEvent$.subscribe((event) => {
        this.installPromptEvent = event;
      });
  }

  installPWA() {
    if (this.installPromptEvent && 'prompt' in this.installPromptEvent) {
      //@ts-ignore
      this.installPromptEvent.prompt();
      //@ts-ignore
      this.installPromptEvent.userChoice.then(({ outcome }) => {
        console.log('AppInstallationState: ' + outcome);
        this.installPromptService.reset();
      });
    }
  }
}
