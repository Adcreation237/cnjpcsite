import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Jeunes } from '../models/jeunes';
import { Circonscription } from '../models/circonscription';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private httpservice : HttpClient,
  ) { }
  
  baseUrl:string ='http://localhost/cnjpc-api/api/';
  //baseUrl:string ='https://jpc-cnjpc-api.mdbgo.io/api/';

  
  public getMembersData() {
    return this.httpservice.get<Jeunes[]>(
      this.baseUrl+'members.php'
    )
  }

  public getOneMemberData(id:number) {
    return this.httpservice.get<Jeunes[]>(
      this.baseUrl+'members.php?id='+id
    )
  }

  public getCirconscription(){
    return this.httpservice.get<Circonscription[]>(
      this.baseUrl+'circonscription.php'
    )
  }

  public getMembrsCircons(circons:number){
    return this.httpservice.get<any[]>(
      this.baseUrl+'mem_where.php?circons='+circons
    )
  }


  public getSecteurs(circons:number){
    return this.httpservice.get<any[]>(
      this.baseUrl+'get_secteur.php?circons='+circons
    )
  }

  
  public setSecteurs(circons:string){
    return this.httpservice.get<any[]>(
      this.baseUrl+'membr_sect.php?circons='+circons
    )
  }

  public getLocalite(circons:string){
    return this.httpservice.get<any[]>(
      this.baseUrl+'get_localite.php?circons='+circons
    )
  }

  public setLocalite(circons:string){
    return this.httpservice.get<any[]>(
      this.baseUrl+'membr_local.php?circons='+circons
    )
  }

  public getDortoirs(){
    return this.httpservice.get<any[]>(
      this.baseUrl+'dortoirs.php'
    )
  }

  public getOneDortoirs(dort:any){
    return this.httpservice.get<any[]>(
      this.baseUrl+'dortoirs.php?dortoir='+dort
    )
  }

  public getMemberDortoirs(dort:any){
    return this.httpservice.get<any[]>(
      this.baseUrl+'view_dortoir.php?row='+dort
    )
  }

  public getPub(){
    return this.httpservice.get<any[]>(
      this.baseUrl+'publication.php'
    )
  }
  
  public getOnePub(id:any){
    return this.httpservice.get<any[]>(
      this.baseUrl+'publication.php?id'+id
    )
  }

}
