import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent {
  public onAddItem(item: Item): void {
    console.log(item);
    this.dialogRef.close(item);
  }

  constructor(
    public dialogRef: MatDialogRef<DialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item) {}

  public onCancelAdd(_: boolean): void {
    this.dialogRef.close();
  }
}
