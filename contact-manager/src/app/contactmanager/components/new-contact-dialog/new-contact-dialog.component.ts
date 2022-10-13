import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss'],
})
export class NewContactDialogComponent implements OnInit {
  user: User = new User();
  name = new FormControl('', [Validators.required]);

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.user = new User();
  }

  onSave() {
    this.user.name = this.name.value!;
    this.user.avatarUrl = `https://robohash.org/${Math.random()}`;

    this.userService.addUser(this.user).then((user: User) => {
      this.dialogRef.close(user);
    });
  }

  onDismiss() {}

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('required') ? 'You must enter a name' : '';
  }
}
