import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publication:any;
  constructor(
    private request: WebService,) { }

  ngOnInit(): void {

    this.request.getPub().subscribe((data:any)=>{
        this.publication = data.data;
    })
  }

}
