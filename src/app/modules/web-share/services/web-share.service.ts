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
    return this.isSupported() && navigator.canShare(data);
  }

  share(data: ShareData) {
    return from(navigator.share(data));
  }
}
