import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar/snack-bar-config';

@Injectable({
  providedIn: 'root',
})
export class UserMessageService {
  static readonly ERROR_MESSAGE_ACTION = 'OK';
  static readonly ERROR_MESSAGE_CONFIG: MatSnackBarConfig = {
    duration: 1000,
  };

  constructor(private snackBar: MatSnackBar) {}

  showErrorMessage(
    message: string,
    action: string = UserMessageService.ERROR_MESSAGE_ACTION,
    config: MatSnackBarConfig = UserMessageService.ERROR_MESSAGE_CONFIG
  ) {
    this.snackBar.open(message, action, config);
  }
}
