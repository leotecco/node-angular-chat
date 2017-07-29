import { Component, ViewChild, ElementRef } from '@angular/core';

import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('chatScroll') private chatScroll: ElementRef;
  public blockUsername: boolean = false;
  public messages: Array<any> = [];
  public message: any = {
    username: '',
    body: ''
  }

  constructor(private chatService: ChatService) {
    this.chatService.lastMessage.subscribe(message => {
      this.messages.push(message);
      this.scrollMessages();
    });
  }

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.blockUsername = true;
    this.message.body = '';
  }

  scrollMessages(){
    setTimeout(() => {
      try {
        this.chatScroll.nativeElement.scrollTop = this.chatScroll.nativeElement.scrollHeight;
      } catch(error) {
        console.log(error);
      }
    }, 200);
  }

}
