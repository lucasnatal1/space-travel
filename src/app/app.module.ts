import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { DesignSystemComponent } from './components/design-system/design-system.component';
import { ColorsComponent } from './components/design-system/colors/colors.component';
import { TypographyComponent } from './components/design-system/typography/typography.component';
import { InteractiveElementsComponent } from './components/design-system/interactive-elements/interactive-elements.component';
import { AppRoutingModule } from './shared/router/app-routing.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DestinationInfoComponent } from './components/destination/destination-info/destination-info.component';
import { CrewInfoComponent } from './components/crew/crew-info/crew-info.component';
import { TechnologyInfoComponent } from './components/technology/technology-info/technology-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    DesignSystemComponent,
    ColorsComponent,
    TypographyComponent,
    InteractiveElementsComponent,
    ErrorPageComponent,
    DestinationInfoComponent,
    CrewInfoComponent,
    TechnologyInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
