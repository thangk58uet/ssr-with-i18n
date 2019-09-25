import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `
    <select #langSelect (change)="changelanguage(langSelect.value)">
      <option
        *ngFor="let lang of languages"
        [value]="lang"
        [attr.selected]="lang === currentLang ? '' : null"
      >{{lang}}</option>
    </select>
  `,
})
export class SelectLanguageComponent {

   languages: any = [];
   currentLang: string;
  constructor(public translate: TranslateService) {
     this.languages = this.translate.getLangs();
     this.currentLang = this.translate.currentLang;
  }

  changelanguage(lang) {
    this.translate.use(lang);
    setTimeout(() => {
      window.location.reload();
    },200);
  }
}
