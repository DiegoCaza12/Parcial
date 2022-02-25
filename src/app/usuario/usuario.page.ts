import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { AccesoService } from '../servicios/acceso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  txt_cedula:string;
  txt_nombre:string;
  txt_apellido:string;
  txt_usuario:string;
  txt_clave:string;

  constructor(private ToastCtrl: ToastController,
    private servicio: AccesoService, 
    private navCtrl:NavController,
    public alertController:AlertController,
    private router: Router) { }

  ngOnInit() {
  }
 public cancelar(){
  this.navCtrl.navigateRoot(['/home']);
 }
 public registro(){
  if(this.txt_cedula=='')
  {
   this.mostrarToast('cedula requerida');
  }
  else if(this.txt_nombre=='')
  {
    this.mostrarToast('nombre requerido');
  }
  else if(this.txt_apellido=='')
  {
    this.mostrarToast('apellido requerido');
  }
  else if(this.txt_usuario=='')
  {
    this.mostrarToast('usuario requerido');
  }
  else if(this.txt_clave=='')
  {
    this.mostrarToast('clave requerida');
  }
  else
  {
    let body={
      'accion': 'insertarU',
      'cedula': this.txt_cedula,
      'nombre': this.txt_nombre,
      'apellido': this.txt_apellido,
      'usuario': this.txt_usuario,
      'clave': this.txt_clave   
    }
    return new Promise (resolve =>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado)
        {
          this.mostrarToast("registro satisfactorio");
          this.navCtrl.navigateRoot(['/home']);
        }
        else
        {
          this.mostrarToast('Erro al Guardar');
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

