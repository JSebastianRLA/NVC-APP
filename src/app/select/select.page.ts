import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  @ViewChild('exampleInput', { static: false }) exampleInput?: IonInput;

  constructor(private router: Router) {}

  ngOnInit() {
    // Cuando la página se inicializa, recuperamos el valor almacenado en localStorage (si existe)
    const storedValue = localStorage.getItem('inputValue');
    if (storedValue && this.exampleInput) {
      this.exampleInput.value = storedValue; // Actualizamos el valor del IonInput con el valor almacenado
    }
  }

  redirectToHomePage() {
    this.router.navigateByUrl('/home');
  }

  sendModify() {
    if (this.exampleInput) {
      let inputValue = this.exampleInput.value || ''; // Usamos una cadena vacía como valor predeterminado si el valor es undefined
      console.log(inputValue);

      // Convertimos el valor a cadena antes de pasarlo a localStorage.setItem()
      inputValue = String(inputValue);
      localStorage.setItem('inputValue', inputValue);
    }
  }
}
