import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './componenets/pagenotfound/pagenotfound.component';
import { MaincontainerComponent } from './containers/maincontainer/maincontainer.component';
import { VirtualwalkComponent } from './containers/virtualwalk/virtualwalk.component';
import { FbxdialogComponent } from './componenets/modals/fbxdialog/fbxdialog.component';
const routes: Routes = [ 
    {path: 'virtualwalk', component: VirtualwalkComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MaincontainerComponent},
    {path: 'fbxdialog/:id', component:FbxdialogComponent},
    {path: '**', component: PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
