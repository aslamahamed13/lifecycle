import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { encapsulationEmulatedComponent } from './encapsulationemulated.component';
import { encapsulationShadowComponent } from './encapsulationshadow.component';
import { encapsulationNoneComponent } from './encapsulationnone.component';
import { highlihghtDirective } from './hightlight.directive';
import { AppendPipe } from './newpipe.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    encapsulationEmulatedComponent,
    encapsulationShadowComponent,
    encapsulationNoneComponent,
    highlihghtDirective,
    AppendPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
