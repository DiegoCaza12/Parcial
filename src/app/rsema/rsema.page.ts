import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-rsema',
  templateUrl: './rsema.page.html',
  styleUrls: ['./rsema.page.scss'],
})
export class RsemaPage implements OnInit {
  codusuario:any;
  usuarios: any [];
  txt_fecha: string;
  txt_fecha1: string;
  txt_fecha2: string;
  txt_fecha3: string;
  constructor(private ToastCtrl: ToastController,
    private servicio: AccesoService, private navCtrl:NavController) { 
      this.servicio.getsesion('idusuario').then(res=>{
        this.codusuario=res;
        //this.mostrarToast( this.codusuario);
        });
    }

  ngOnInit() {
  }
  public listardiario(){
    let body={
      'accion':'ListarS',
      'idusuario': this.codusuario,
      'fecha':this.txt_fecha

    }
    return new Promise (resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.usuarios=res.datos
          
        }else{
          this.mostrarToast('Datos no encontrados');
        }
      },(error)=>{
        this.mostrarToast('Error de conexion')
      });
    });
  }
  public listardiario1(){
    let body={
      'accion':'ListarS1',
      'idusuario': this.codusuario,
      'fecha':this.txt_fecha1,


    }
    return new Promise (resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.usuarios=res.datos
          
        }else{
          this.mostrarToast('Datos no encontrados');
        }
      },(error)=>{
        this.mostrarToast('Error de conexion')
      });
    });
  }
  public listardiario2(){
    let body={
      'accion':'ListarS2',
      'idusuario': this.codusuario,
      'fecha':this.txt_fecha2,


    }
    return new Promise (resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.usuarios=res.datos
          
        }else{
          this.mostrarToast('Datos no encontrados');
        }
      },(error)=>{
        this.mostrarToast('Error de conexion')
      });
    });
  }
  public listardiario3(){
    let body={
      'accion':'ListarS3',
      'idusuario': this.codusuario,
      'fecha':this.txt_fecha3,


    }
    return new Promise (resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.usuarios=res.datos
          
        }else{
          this.mostrarToast('Datos no encontrados');
        }
      },(error)=>{
        this.mostrarToast('Error de conexion')
      });
    });
  }
  async mostrarToast(texto)
  {
    const toast= await this.ToastCtrl.create({
      message: texto,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }
}
