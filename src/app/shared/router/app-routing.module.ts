import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from 'src/app/components/home/home.component';
import { DesignSystemComponent } from 'src/app/components/design-system/design-system.component';
import { DestinationComponent } from 'src/app/components/destination/destination.component';
import { CrewComponent } from 'src/app/components/crew/crew.component';
import { TechnologyComponent } from 'src/app/components/technology/technology.component';
import { ErrorPageComponent } from 'src/app/components/error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'destination', component: DestinationComponent, },
  { path: 'crew', component: CrewComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'design', component: DesignSystemComponent },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { anchorScrolling: 'enabled', preloadingStrategy: PreloadAllModules }),
  ], //preloadingStrategy: PreloadAllModules - preloads all lazy loaded modules after the app has been loaded
  exports: [RouterModule],
})
export class AppRoutingModule {}
