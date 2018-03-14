import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 // template: '<app-server></app-server><app-server></app-server>',
 templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowNewSever= false;
   serverCreationStatus='No Server was created';
  constructor() { 
    setTimeout(() =>{
      this.allowNewSever = true;
    },2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
      this.serverCreationStatus='Server was Created';
  }
}
