import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task10';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  useLanguage1(language: string) {
    this.translate.use('en');
  }
  useLanguage2(language: string) {
    this.translate.use('vi');
  }
}
