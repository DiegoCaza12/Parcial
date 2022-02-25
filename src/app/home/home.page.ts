import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario:any;
  txt_usuario:string;
  txt_clave:string;

  constructor(private ToastCtrl: ToastController,
    private servicio: AccesoService, private navCtrl:NavController) {}

    public registro(){
      this.navCtrl.navigateRoot(['/usuario']);
    }
    public verificar(){
      if(this.txt_usuario=='')
      {
            this.mostrarToast("Usuario Requerido");
      }
      else if(this.txt_clave=='')
      {
          this.mostrarToast("Clave Requerida");
      }
      else
      {
          let body={
            'accion': 'login',
            'usuario':this.txt_usuario,
            'clave': this.txt_clave
          }
          return new Promise(resolve => {
            this.servicio.postData(body).subscribe((res:any)=>{
                if(res.estado)
                {
                  this.usuario=res.datos;
                  this.servicio.setsesion('idusuario', this.usuario[0].idusuario);
                  this.mostrarToast("Ingreso Satisfactorio");
                  this.navCtrl.navigateRoot(['/menu']);
                }
                else
                {
                  this.mostrarToast("Usuario o Clave Incorrecto");
                }
            }, (err)=>{
              this.mostrarToast('Error de Conexion');
            });
          });
      }
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
