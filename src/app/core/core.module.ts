import { ApiService } from './services/api.service';
import { HeaderComponent } from './components/header/header.component';
import { SocketService } from './../core/services/socket.service';
import { AuthService } from './../core/services/auth.service';
import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageService } from './services/local-storage.service';
import { HttpTokenInterceptor } from './interceptors/http.interceptor';

const COMPONENTS = [
    HeaderComponent
]

const SERVICES = [
    ApiService,
    AuthService,
    SocketService,
    LocalStorageService
]

const BASIC_MODULES = [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [ 
        ...BASIC_MODULES,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
        ...SERVICES,
    ],
    exports: [
        ...BASIC_MODULES,
        ...COMPONENTS
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
          ngModule: CoreModule,
          providers: [ ...SERVICES ]
        };
      }
}