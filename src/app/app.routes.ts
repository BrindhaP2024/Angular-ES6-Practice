import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ComponentServiceComponent } from './components/component-service/component-service.component';
import { InjectbasedDIComponent } from './components/injectbased-di/injectbased-di.component';
import { TdfExampleComponent } from './components/tdf-example/tdf-example.component';
import { RdfExampleComponent } from './components/rdf-example/rdf-example.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { StyleComponent } from './components/style/style.component';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { SampleSelectorComponent } from './components/sample-selector/sample-selector.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { CardComponent } from './components/card/card.component';
import { HostnameExampleComponent } from './components/hostname-example/hostname-example.component';


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
        path:'child',
        component:ChildComponent,
    },
    {
        path:'parent',
        component:ParentComponent,
    },
    {
        path:'lifecycle',
        component:LifecycleComponent,
    },
    {
        path:'style',
        component:StyleComponent,
    },
    {
        path:'selectors',
        component:SelectorsComponent,
    },
    {
        path:'card',
        component:CardComponent,
    },
    {
        path:'sample-selector',
        component:SampleSelectorComponent,
    },
    {
        path:'hostname-example',
        component:HostnameExampleComponent,
    },
    { 
        path: '**', 
        component:HomeComponent, 
        title: 'Not Found'
    },

  
];