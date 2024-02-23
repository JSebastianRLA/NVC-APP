import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { InputValueService } from '../input-value.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  @ViewChild('exampleInput', { static: false }) exampleInput?: IonInput;

  constructor(
    private router: Router,
    private inputValueService: InputValueService
  ) {}

  ngOnInit() {
    const storedValue = localStorage.getItem('inputValue');
    if (storedValue && this.exampleInput) {
      this.exampleInput.value = storedValue;
    }
  }

  sendModify() {
    if (this.exampleInput) {
      let inputValue = this.exampleInput.value || '';
      inputValue = String(inputValue);
      localStorage.setItem('inputValue', inputValue);
      this.inputValueService.setInputValue(inputValue);
      this.router.navigateByUrl('/home');
    }
  }
}
