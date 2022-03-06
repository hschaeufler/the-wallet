import { Component } from '@angular/core';
/* Spinner doesn't freeze when Thread is blocked, because it uses CSS animations
 * */
@Component({
  selector: 'the-wallet-non-freezing-spinner',
  template: ` <div class="the-wallet-spinner"></div> `,
  styleUrls: ['./non-freezing-spinner.component.scss'],
})
export class NonFreezingSpinnerComponent {}
