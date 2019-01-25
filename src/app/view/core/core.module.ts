import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavigatorComponent } from './navigator.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, RouterModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
    declarations: [NavigatorComponent, HeaderComponent, MainComponent, FooterComponent],
    exports: [NavigatorComponent]
})
export class CoreModule { }
