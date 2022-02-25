import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-rdeporte',
  templateUrl: './rdeporte.page.html',
  styleUrls: ['./rdeporte.page.scss'],
})
export class RdeportePage implements OnInit {

  codusuario:any;
  usuarios: any [];
  txt_deporte:string;
  constructor(private ToastCtrl: ToastController,
    private servicio: AccesoService, private navCtrl:NavController) { 
      this.servicio.getsesion('idusuario').then(res=>{
        this.codusuario=res;
        this.mostrarToast( this.codusuario);
        });
    }

  ngOnInit() {
  }
  public listardiario(){
    let body={
      'accion':'ListarDep',
      'idusuario': this.codusuario,
      'deporte':this.txt_deporte

    }
    return new Promise (resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.usuarios=res.datos
          
        }else{
          this.mostrarToast('Error al cargar datos');
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
