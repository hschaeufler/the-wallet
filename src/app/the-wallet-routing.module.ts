import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WalletPageComponent} from "./components/wallet-page/wallet-page.component";
import {CertificatePageComponent} from "./components/certificate-page/certificate-page.component";
import {RouteNotFoundPageComponent} from "./components/route-not-found-page/route-not-found-page.component";

const routes: Routes = [
  {path: 'certificates', component: WalletPageComponent},
  {path: 'certificate/:id', component: CertificatePageComponent},
  {path: '404', component: RouteNotFoundPageComponent},
  {path: '', redirectTo: "/certificates", pathMatch: 'full'},
  {path: '**', redirectTo: "/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TheWalletRoutingModule { }
