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
import { HomepageComponent } from './content/homepage/homepage.component';
import { CoursesPageComponent } from './content/courses/courses-page/courses-page.component';
import { CoursesBussinessEnglishComponent } from './content/courses/courses-page/courses-bussiness-english/courses-bussiness-english.component';
import { CoursesSelectorComponent } from './content/courses/courses-page/courses-selector/courses-selector.component';
import { CoursesEnglishComponent } from './content/courses/courses-page/courses-english/courses-english.component';
import { CoursesSpanishComponent } from './content/courses/courses-page/courses-spanish/courses-spanish.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { EnglishGeneralComponent } from './content/courses/courses-page/courses-english/sections/english-general/english-general.component';
import { EnglishPricingButtonComponent } from './content/courses/courses-page/courses-english/sections/english-pricing-button/english-pricing-button.component';
import { EnglishLessonsComponent } from './content/courses/courses-page/courses-english/sections/english-lessons/english-lessons.component';
import { EnglishTeachersComponent } from './content/courses/courses-page/courses-english/sections/english-teachers/english-teachers.component';
import { EnglishExcercisesComponent } from './content/courses/courses-page/courses-english/sections/english-excercises/english-excercises.component';
import { EnglishPricingComponent } from './content/courses/courses-page/courses-english/sections/english-pricing/english-pricing.component';
import { EnglishPlanComponent } from './content/courses/courses-page/courses-english/sections/english-plan/english-plan.component';
import { SpanishExcercisesComponent } from './content/courses/courses-page/courses-spanish/spanish-excercises/spanish-excercises.component';
import { SpanishLessonsComponent } from './content/courses/courses-page/courses-spanish/spanish-lessons/spanish-lessons.component';
import { SpanishGeneralComponent } from './content/courses/courses-page/courses-spanish/spanish-general/spanish-general.component';
import { SpanishPricingComponent } from './content/courses/courses-page/courses-spanish/spanish-pricing/spanish-pricing.component';
import { SpanishPlanComponent } from './content/courses/courses-page/courses-spanish/spanish-plan/spanish-plan.component';
import { SpanishPricingButtonComponent } from './content/courses/courses-page/courses-spanish/spanish-pricing-button/spanish-pricing-button.component';
import { SpanishTeachersComponent } from './content/courses/courses-page/courses-spanish/spanish-teachers/spanish-teachers.component';
import { BeExcecisesComponent } from './content/courses/courses-page/courses-bussiness-english/sections/be-excecises/be-excecises.component';
import { BeGeneralComponent } from './content/courses/courses-page/courses-bussiness-english/sections/be-general/be-general.component';
import { BeLessonsComponent } from './content/courses/courses-page/courses-bussiness-english/sections/be-lessons/be-lessons.component';
import { BePlanComponent } from './content/courses/courses-page/courses-bussiness-english/sections/be-plan/be-plan.component';
import { BePricingComponent } from './content/courses/courses-page/courses-bussiness-english/sections/be-pricing/be-pricing.component';
import { BePricingButtonComponent } from './content/courses/courses-page/courses-bussiness-english/sections/be-pricing-button/be-pricing-button.component';
import { BeTeachersComponent } from './content/courses/courses-page/courses-bussiness-english/sections/be-teachers/be-teachers.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterPanelComponent,
    LangSelectionTabComponent,
    HomepageComponent,
    CoursesPageComponent,
    CoursesSelectorComponent,
    CoursesEnglishComponent,
    CoursesSpanishComponent,
    CoursesBussinessEnglishComponent,
    EnglishGeneralComponent,
    EnglishPricingButtonComponent,
    EnglishLessonsComponent,
    EnglishTeachersComponent,
    EnglishExcercisesComponent,
    EnglishPricingComponent,
    EnglishPlanComponent,
    SpanishExcercisesComponent,
    SpanishGeneralComponent,
    SpanishLessonsComponent,
    SpanishPlanComponent,
    SpanishPricingComponent,
    SpanishPricingButtonComponent,
    SpanishTeachersComponent,
    BeExcecisesComponent,
    BeGeneralComponent,
    BeLessonsComponent,
    BePlanComponent,
    BePricingComponent,
    BePricingButtonComponent,
    BeTeachersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [LanguageService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
