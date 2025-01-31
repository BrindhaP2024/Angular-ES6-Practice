import { Directive } from '@angular/core';
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
import { AdminBioComponent } from './components/Dynamic rendering/admin-bio/admin-bio.component';
import { StandardBioComponent } from './components/Dynamic rendering/standard-bio/standard-bio.component';
import { NgComponentOutletComponent } from './components/Dynamic rendering/ng-component-outlet/ng-component-outlet.component';
import { ViewContainerRefComponent } from './components/Dynamic rendering/view-container-ref/view-container-ref.component';
import { CustomelementsComponent } from './components/customelements/customelements.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/bindings/two-way-binding/two-way-binding.component';
import { ControlflowComponent } from './components/controlflow/controlflow.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { StructuralDirectiveComponent } from './components/Directives/structural-directive/structural-directive.component';
import { DIrectivesComponent } from './components/Directives/directives/directives.component';
import { CustomDirectiveDirective } from './components/custom-directive.directive';
import { DataListComponent } from './components/data-list/data-list.component';
import { SignalExampleComponent } from './components/signal-example/signal-example.component';



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
        path:'ng-component-outlet',
        component:NgComponentOutletComponent
    },
    {
        path:'admin-bio',
        component:AdminBioComponent,
    },
    {
        path:'standard-bio',
        component:StandardBioComponent,
    },
    {
        path:'view-container-ref',
        component:ViewContainerRefComponent,
    },
    // {
    //     path:'Dynamic-rendering',
    //     component:DynamicRenderingComponent,
    // },
    {
        path:'customelement',
        component:CustomelementsComponent,
    },
    {
        path:'binding',
        component:BindingsComponent,
    },
    {
        path:'pipes',
        component:PipesComponent,
    },
    {
        path:'two-way binding',
        component:TwoWayBindingComponent,
    },
    {
        path:'controlflow',
        component:ControlflowComponent,
    },
    {
        path:'ng-template',
        component:NgTemplateComponent,
    },
    {
      path:'structural-directive',
      component:StructuralDirectiveComponent,
  },
  {
    path:'directive',
    component:DIrectivesComponent,
  },
  // {
  //   path:'custom-directive',
  //   component:CustomDirectiveDirective,
  // },
  {
    path:'data-list',
    component:DataListComponent,
  },
  {
    path:'signal-example',
    component:SignalExampleComponent
  },
  {
        path: '**',
        component:HomeComponent,
        title: 'Not Found'
  },


];
