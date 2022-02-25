import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CameraDialogComponent} from "./camera-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class CameraDialogService {

  constructor(private matDialog: MatDialog) { }

  //have a look at: https://stackoverflow.com/questions/48688614/angular-custom-style-to-mat-dialog
  //style is in style.css
  openCameraDialog(): MatDialogRef<CameraDialogComponent>{
    return this.matDialog.open(CameraDialogComponent, {panelClass: 'camera-dialog'});
  }
}
