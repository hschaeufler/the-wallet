import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NonFreezingSpinnerComponent } from '../components/atoms/non-freezing-spinner/non-freezing-spinner.component';
import { ComponentType } from '@angular/cdk/portal/portal';
import { EmptyComponent } from '../components/atoms/empty/empty.component';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

  open(component: ComponentType<any>) {
    const progressSpinnerPortal = new ComponentPortal(component);
    this.overlayRef.detach();
    this.overlayRef.attach(progressSpinnerPortal);
  }

  openEmptyOverlay() {
    this.open(EmptyComponent);
  }

  openSpinnerOverlay() {
    this.open(NonFreezingSpinnerComponent);
  }

  close() {
    this.overlayRef.detach();
  }
}
