import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
//import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { IfAndroidDirective, IfIosDirective } from "./if-platform.directive";

@NgModule({
  declarations: [AppComponent,IfAndroidDirective,IfIosDirective],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
