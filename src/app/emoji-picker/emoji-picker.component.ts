import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss'],
})
export class EmojiPickerComponent implements OnInit {
  @Input() height: string;
  @Input() width: string;
  
  toggled = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEmojiPick(e: Event) {
    console.log('onEmojiPick', e);
  }
}
