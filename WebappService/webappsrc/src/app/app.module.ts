import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MakeSurveyComponent } from './make-survey/make-survey.component';
import { LoginComponent } from './login/login.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { ProfileComponent } from './profile/profile.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';

import { HttpClientModule } from "@angular/common/http";
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent},
  { path: 'SurveyList', component: SurveyListComponent},
  { path: 'MakeSurvey', component: MakeSurveyComponent},
  { path: 'FriendsList', component: FriendsListComponent},
  { path: 'Profile', component: ProfileComponent},
  { path: 'SignUp', component: SignUpComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    TopBarComponent,
    MakeSurveyComponent,
    LoginComponent,
    FriendsListComponent,
    ProfileComponent,
    BarGraphComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}
