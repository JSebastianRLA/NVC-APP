import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';
import { InputValueService } from '../input-value.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  inputValue: string | null = null;
  private baseUrl = 'https://monlab.ngeek.net:8083/pandora_console/mobile/';

  constructor(
    private browser: InAppBrowser,
    private router: Router,
    private inputValueService: InputValueService
  ) {}

  logToConsole() {
    this.router.navigateByUrl('/select');
    console.log('Hola mundo');
  }

  ngOnInit(): void {
    this.inputValueService.inputValue$.subscribe((value) => {
      this.inputValue = value;
      const parts = this.baseUrl.split('/');
      parts[2] = this.inputValue ? this.inputValue : 'monlab.ngeek.net:8083'; // Reemplaza solo la parte que deseas cambiar
      const url = parts.join('/');
      const browserInstance = this.browser.create(
        url,
        '_self',
        'location=no,hidenavigationbuttons=true,hideurlbar=true,zoom=no'
      );
      browserInstance.on('exit').subscribe((evt) => {
        App.exitApp();
      });
    });
  }
}
