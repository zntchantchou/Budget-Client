import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEmojModule } from 'ngx-emoj';
import { EmojiPickerComponent } from './emoji-picker.component';

@NgModule({
  exports: [EmojiPickerComponent],
  declarations: [EmojiPickerComponent],
  imports: [CommonModule, NgxEmojModule],
})
export class EmojiPickerModule {}
