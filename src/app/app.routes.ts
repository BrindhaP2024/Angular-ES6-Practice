import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ComponentServiceComponent } from './components/component-service/component-service.component';
import { InjectbasedDIComponent } from './components/injectbased-di/injectbased-di.component';

export const routes: Routes = [

    {path: 'home',    
     title: 'App Home Page',    
     component:HomeComponent,  
    },
   { path: 'about', 
    component: AboutComponent, 
    title: 'About' },
    {path:'component-service',
    component:ComponentServiceComponent,
    },
    {path:'injectbasedDI',
    component:InjectbasedDIComponent,
    }
];