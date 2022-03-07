import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebShareService {
  constructor() {}

  isSupported() {
    return 'canShare' in navigator && 'share' in navigator;
  }

  canShare(data: ShareData) {
    if (this.isSupported()) {
      return navigator.canShare(data);
    }
    return false;
  }

  share(data: ShareData) {
    return from(navigator.share(data));
  }
}
