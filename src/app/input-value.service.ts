import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputValueService {
  private inputValueSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  inputValue$: Observable<string | null> = this.inputValueSubject.asObservable();

  setInputValue(value: string | null) {
    this.inputValueSubject.next(value);
  }
}
