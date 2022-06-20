import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-dortoir',
  templateUrl: './dortoir.component.html',
  styleUrls: ['./dortoir.component.css']
})
export class DortoirComponent implements OnInit {

  items:any;
  jeunes:any;
  
  
  constructor(
    private request: WebService,
  ) {

  }

  ngOnInit(): void {
    this.request.getDortoirs().subscribe((data:any)=>{
      this.items = data.data;
    })
  }

  selectedDort(event:any){
    console.log(event.value);
    
    this.request.getMemberDortoirs(event.value).subscribe((data:any)=>{
        this.jeunes = data.data;
    })
  }

}
