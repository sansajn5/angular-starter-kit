import { AuthGuard } from './core/guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';

const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SocketIoModule.forRoot(config),
    Ng4LoadingSpinnerModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
