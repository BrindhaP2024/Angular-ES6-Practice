import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ComponentServiceComponent } from './components/component-service/component-service.component';
import { InjectbasedDIComponent } from './components/injectbased-di/injectbased-di.component';
import { TdfExampleComponent } from './components/tdf-example/tdf-example.component';
import { RdfExampleComponent } from './components/rdf-example/rdf-example.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full', title: 'App Home Page' },
    
    {   path: 'home',    
        title: 'App Home Page',    
        component:HomeComponent,  
    },
    {   path: 'about', 
        component: AboutComponent, 
        title: 'About' },
    {  
        path:'component-service',
        component:ComponentServiceComponent,
    },
    { 
        path:'injectbasedDI',
        component:InjectbasedDIComponent,
    },
    {
        path:'tdf-example',
        component:TdfExampleComponent,
    },
    {
        path:'rdf-example',
        component:RdfExampleComponent,
    },
  
    { 
        path: '**', 
        component:HomeComponent, 
        title: 'Not Found'
    },
  
];