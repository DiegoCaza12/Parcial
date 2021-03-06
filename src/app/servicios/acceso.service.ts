import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  serve : string = "http://localhost/deportes/crud.php"

  constructor(public http:HttpClient) { }
  postData(body)
  {
    let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = {
      headers: headers
    }
    return this.http.post(this.serve, JSON.stringify(body),options)
    .timeout(590000)
    .map(res=>res);
  }
  getData()
  {
    let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = {
      headers: headers
    }
    return this.http.get(this.serve, options)
    .timeout(590000)
    .map(res=>res);  
  }
  
  async setsesion(id, valor)
  {
    await Storage.set({
      key:id,
      value:valor
    });
  }
  async getsesion(id)
  {
    const item = await Storage.get({key:id});
    return item.value;
  }
}
