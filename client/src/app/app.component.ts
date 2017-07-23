import { Component } from '@angular/core';

import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public params: any = {
    message: ''
  }

  constructor(private chatService: ChatService) { }

  sendMessage(){
    this.chatService.sendMessage(this.params);
    this.params.message = '';
  }
}
