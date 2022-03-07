import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar/snack-bar-config';

@Injectable({
  providedIn: 'root',
})
export class UserMessageService {
  static readonly MESSAGE_ACTION = 'OK';
  static readonly MESSAGE_CONFIG: MatSnackBarConfig = {
    duration: 5000,
  };

  constructor(private snackBar: MatSnackBar) {}

  showUserMessage(
    message: string,
    action: string = UserMessageService.MESSAGE_ACTION,
    config: MatSnackBarConfig = UserMessageService.MESSAGE_CONFIG
  ) {
    console.info(message);
    this.snackBar.open(message, action, config);
  }
}
