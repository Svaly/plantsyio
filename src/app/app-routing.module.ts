import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


const routes: Routes = [
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
    constructor(
        private router: Router) {

        this.router.resetConfig(routes);
    }
}
