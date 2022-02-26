import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WalletPageComponent} from "./components/pages/wallet-page/wallet-page.component";
import {CertificatePageComponent} from "./components/pages/certificate-page/certificate-page.component";
import {RouteNotFoundPageComponent} from "./components/pages/route-not-found-page/route-not-found-page.component";

const routes: Routes = [
  {path: 'wallet', component: WalletPageComponent},
  {path: 'certificate/:id', component: CertificatePageComponent},
  {path: '404', component: RouteNotFoundPageComponent},
  {path: '', redirectTo: "/wallet", pathMatch: 'full'},
  {path: '**', redirectTo: "/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TheWalletRoutingModule { }
