import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../utility/services/language-provider.service';
import { LanguageModel } from '../utility/models/language-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lang-selection-tab',
  templateUrl: './lang-selection-tab.component.html',
  styleUrls: ['./lang-selection-tab.component.css']
})
export class LangSelectionTabComponent implements OnInit {
  public selectableLanguages: LanguageModel[] = [];

  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      let lang = value['lang'];
      console.log(lang);
    });
    this.languageService.getLanguageList().subscribe(languages => {
      this.selectableLanguages = languages;
      this.route.params.subscribe(value => {
        let lang = value['lang'];
        console.log(lang);
      });
    });
  }
}
