import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.page.html',
  styleUrls: ['./entrenamiento.page.scss'],
})
export class EntrenamientoPage implements OnInit {
  codusuario:any;
  usuarios: any [];
  txt_deporte:string;
  txt_date:string;
  txt_tiempo:string;
  interval;
  time = new Date(null);

  constructor(private ToastCtrl: ToastController,
    private servicio: AccesoService, private navCtrl:NavController) {

      this.servicio.getsesion('idusuario').then(res=>{
        this.codusuario=res;
        //this.mostrarToast( this.codusuario);
        });
     }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.listarUsuario();
    }
    listarUsuario(){
      let body={
        'accion':'Listar2',
        'codusuario': this.codusuario
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
    registrar(){
      if(this.txt_date=='')
    {
     this.mostrarToast('Fecha requerido');
    }
      if(this.txt_deporte=='')
    {
     this.mostrarToast('deporte requerido');
    }
    else if(this.txt_tiempo=='')
    {
      this.mostrarToast('Tiempo requerido');
    }
    else
    {
      let body={
        'accion': 'insertar',
        'idusuario': this.codusuario,
        'deporte':this.txt_deporte,
        'fecha': this.txt_date,
        'tiempo': this.time.toISOString().substr(11,8)  
      }
      return new Promise (resolve =>{
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado)
          {
            this.mostrarToast("registro satisfactorio");
            this.navCtrl.navigateRoot(['/menu']);
          }
          else
          {
            this.mostrarToast('Error al Guardar');
          }
        }, (err)=>{
          this.mostrarToast('Error de Conexion');
        });
      });
    }
    }

    Empezar(){
      this.interval = setInterval(()=> {
       this.time.setSeconds(this.time.getSeconds()+1);   
      }, 1000)
    }
   Pausar(){
     clearInterval(this.interval);
   }
   Reiniciar(){
     this.time.setSeconds(0);
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
