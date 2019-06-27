import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleTest';

 servers:any=[];

 count:number=0;
   
 OnAddServer(){
   this.servers.push("Added new Server"+this.count++);
 }

 onRemoveServer(id:number){
    let val=id;
    this.servers.splice(id,2);
 }


}
