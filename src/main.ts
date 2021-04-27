import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "./app/app.module"


console.log("Angular starting...")
console.log("Angular bootstrap file..")

// load/bootstrap first angular module into browser

platformBrowserDynamic()
    .bootstrapModule(AppModule)