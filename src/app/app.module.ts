import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/components/header/header.component';
import { RootComponent } from './main/components/root/root.component';
import { NavigationComponent } from './main/components/navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './main/components/footer/footer.component';
import { DialogComponent } from './main/components/dialogs/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogLoginComponent } from './main/components/dialogs/dialog-login/dialog-login.component';
import { DialogRegisterComponent } from './main/components/dialogs/dialog-register/dialog-register.component';
import { ProblemsComponent } from './main/components/problems/problems.component';
import { MatTableModule } from '@angular/material/table';
import { ProblemDataComponent } from './main/components/problem-data/problem-data.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RootComponent,
    NavigationComponent,
    FooterComponent,
    DialogComponent,
    DialogLoginComponent,
    DialogRegisterComponent,
    ProblemsComponent,
    ProblemDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    CodeEditorModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HeaderComponent]
})
export class AppModule { }
