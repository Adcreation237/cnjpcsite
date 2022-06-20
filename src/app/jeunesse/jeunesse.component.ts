import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-jeunesse',
  templateUrl: './jeunesse.component.html',
  styleUrls: ['./jeunesse.component.css']
})



export default class JeunesseComponent implements OnInit {

  items: any;
  id_item:any;
  secteurs: any;
  localite: any;
  jeunes:any;
  oneYouth:any;
  
  constructor(
    private request: WebService,
  ) {

  }

  ngOnInit(): void {
    
    this.request.getMembersData().subscribe((data:any)=>{
      this.jeunes = data.data;
    });

    
    this.request.getCirconscription().subscribe((data:any)=>{
      this.items = data.data;
    });


  }
  
  Onselected(event:any){
    console.log(event);
    var result = event.itemValue ==null?event.value:event.itemValue;
    
    this.getSecteur(result);

    this.request.getMembrsCircons(result).subscribe((data:any)=>{
      console.log(data);
      this.jeunes = data.data;
      
    })
  }


  getSecteur(info:any){
   var id = info;

    this.request.getSecteurs(id).subscribe((data:any)=>{
      console.log(data);
      this.secteurs = data.data;
      
    })
  }

  setSecteur(event:any){
    var oprtion = event.value;
    this.getLocalite(oprtion);
     this.request.setSecteurs(oprtion).subscribe((data:any)=>{
       console.log(data);
       this.jeunes = data.data;
       
     })
   }

   

  getLocalite(info:any){
    var local = info;
    this.request.getLocalite(local).subscribe((data:any)=>{
      console.log(data);
      this.localite = data.data;
      
    })
  }

  setLocalite(event:any){
    var oprtion = event.value;
     this.request.setLocalite(oprtion).subscribe((data:any)=>{
       console.log(data);
       this.jeunes = data.data;
       
     })
   }

   display: boolean = false;

   showDialog(data:any){
      this.display = true;
      console.log(data);
      this.request.getOneMemberData(data).subscribe((data:any)=>{
        console.log(data);
        
        this.oneYouth = data.data;
      })
      
   }

}
