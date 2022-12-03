import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'lanoroffers',
    loadChildren: () => import('./lanoroffers/lanoroffers.module').then( m => m.LanoroffersPageModule)
  },
  {
    path: 'ricosoffers',
    loadChildren: () => import('./ricosoffers/ricosoffers.module').then( m => m.RicosoffersPageModule)
  },
  {
    path: 'edwinoffers',
    loadChildren: () => import('./edwinoffers/edwinoffers.module').then( m => m.EdwinoffersPageModule)
  },
  {
    path: 'nearestcatering',
    loadChildren: () => import('./nearestcatering/nearestcatering.module').then( m => m.NearestcateringPageModule)
  },
  {
    path: 'rehistros',
    loadChildren: () => import('./rehistros/rehistros.module').then( m => m.RehistrosPageModule)
  },
  {
    path: 'we-login',
    loadChildren: () => import('./we-login/we-login.module').then( m => m.WeLoginPageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./validators/age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'username',
    loadChildren: () => import('./validators/username/username.module').then( m => m.UsernamePageModule)
  },
  {
    path: 'lospoloffers',
    loadChildren: () => import('./lospoloffers/lospoloffers.module').then( m => m.LospoloffersPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'editaccount',
    loadChildren: () => import('./editaccount/editaccount.module').then( m => m.EditaccountPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'viewreviews',
    loadChildren: () => import('./viewreviews/viewreviews.module').then( m => m.ViewreviewsPageModule)
  },
  {
    path: 'greetings',
    loadChildren: () => import('./greetings/greetings.module').then( m => m.GreetingsPageModule)
  },
  {
    path: 'eula',
    loadChildren: () => import('./eula/eula.module').then( m => m.EulaPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules , onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
