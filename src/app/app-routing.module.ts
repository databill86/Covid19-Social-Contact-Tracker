import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './core/guards/intro.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [IntroGuard]
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule),
    canActivate: [IntroGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule),
    canActivate: [IntroGuard]
  },
  {
    path: 'contact-list',
    loadChildren: () => import('./pages/contact-list/contact-list.module').then( m => m.ContactListPageModule),
    canActivate: [IntroGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
