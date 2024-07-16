import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { signupComponent } from './Componends/signup/signup.component';





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    signupComponent,
    AppComponent,
      ],
  providers: [],
})
export class AppModule {}

// Bootstrap the application with the standalone component
bootstrapApplication(AppComponent, {
  providers: []
});
