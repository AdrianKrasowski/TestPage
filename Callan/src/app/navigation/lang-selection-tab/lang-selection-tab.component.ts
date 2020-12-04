import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../utility/services/language-provider.service';
import { LanguageModel } from '../utility/models/language-model';

@Component({
  selector: 'app-lang-selection-tab',
  templateUrl: './lang-selection-tab.component.html',
  styleUrls: ['./lang-selection-tab.component.css']
})
export class LangSelectionTabComponent implements OnInit {
  public selectableLanguages: LanguageModel[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.getLanguageList().subscribe(languages => {
      this.selectableLanguages = languages;
    });
  }
}
