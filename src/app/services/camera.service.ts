import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }


  isUsable():boolean {
    return 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
  }
}
