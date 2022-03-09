import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'the-wallet-page-template',
  template: `
    <ng-content select="[theWalletPageTemplateHeader]"></ng-content>
    <div class="container">
      <main [class]="isLargeScreen ? 'main-large' : 'main'">
        <ng-content></ng-content>
      </main>
    </div>
  `,
  styleUrls: ['./page-template.component.scss'],
})
export class PageTemplateComponent implements OnInit, OnDestroy {
  @Input()
  title: string = '';

  private beakpointSubscription$?: Subscription;
  isLargeScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.beakpointSubscription$ = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((result) => {
        console.log(result);
        this.isLargeScreen = !result.matches;
      });
  }

  ngOnDestroy() {
    if (this.beakpointSubscription$) {
      this.beakpointSubscription$.unsubscribe();
    }
  }
}
