import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { FooterPanelComponent } from './navigation/footer-panel/footer-panel.component';
import { LangSelectionTabComponent } from './navigation/lang-selection-tab/lang-selection-tab.component';
import { LanguageService } from './navigation/utility/services/language-provider.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterPanelComponent,
    LangSelectionTabComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [LanguageService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
