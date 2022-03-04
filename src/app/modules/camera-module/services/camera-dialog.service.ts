import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CameraDialogComponent} from "../camera-dialog/camera-dialog.component";
import {CameraService} from "./camera.service";
import {take} from "rxjs";
import {QRCodeModel} from "./QRCode.model";

@Injectable({
  providedIn: 'root'
})
export class CameraDialogService {

  constructor(
    private matDialog: MatDialog,
    private cameraService: CameraService,
  ) { }

  openCameraDialog(): MatDialogRef<CameraDialogComponent>{
    //have a look at: https://stackoverflow.com/questions/48688614/angular-custom-style-to-mat-dialog
    //style is in style.css
    return this.matDialog.open(CameraDialogComponent, {panelClass: 'camera-dialog'});
  }

  openQRCodeScannerDialog(): MatDialogRef<CameraDialogComponent, QRCodeModel | undefined>{
    //have a look at: https://stackoverflow.com/questions/48688614/angular-custom-style-to-mat-dialog
    //style is in style.css
    const dialog = this.matDialog.open<CameraDialogComponent,any,QRCodeModel | undefined>(
      CameraDialogComponent, {panelClass: 'camera-dialog'}
    );
    const qrCodeSubscription$ = this.cameraService.qrCode$.pipe(
      take(1)
    ).subscribe({
      next: qrCode => dialog.close(qrCode),
      error: err => dialog.close()
    });
    dialog.afterClosed().subscribe(()=> qrCodeSubscription$.unsubscribe());
    return dialog;
  }
}
