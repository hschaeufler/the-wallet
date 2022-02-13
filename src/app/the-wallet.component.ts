import { Component } from '@angular/core';
import {CameraDialogComponent} from "./camera-module/camera-dialog/camera-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'the-wallet-root',
  templateUrl: './the-wallet.component.html',
  styleUrls: ['./the-wallet.component.scss']
})
export class TheWalletComponent {
  title = 'the wallet';

  constructor(private matDialog: MatDialog) {
  }

  openDialog(){
    const dialogRef = this.matDialog.open(CameraDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
