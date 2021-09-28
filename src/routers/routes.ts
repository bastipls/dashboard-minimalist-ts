
import { faChartPie, faDragon, faSmile } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { DashboardView } from "../views/admin/Dashboard/DashboardView";
import React from "react";
import { TestView } from '../views/admin/Test/TestView';
import { TestSubMenu } from '../views/SubMenuTest/TestSubMenu';
import { TestSubMenu2 } from '../views/SubMenuTest/TestSubMenu2';

export interface RoutesAdmin {
    layout?:     string ;
    path?:       string ;
    fullpath?:   string;
    name:        string;
    icon:        IconDefinition;
    groups:      string[];
    component?: React.ElementType ;
    isMenuItem:  boolean;
    isSubMenu:   boolean;
    subMenus?:   SubMenuRoute[];
}

export interface SubMenuRoute {
    layout:      string;
    path:        string;
    fullpath:   string;
    name:        string;
    component:   React.ElementType;
    groups:      string[];

}

export const routesAdmin:RoutesAdmin[] = [
    {
        layout:'/admin',
        path:'/dashboard',
        name:"Dashboard",
        fullpath:"/admin/dashboard",
        icon:faChartPie,
        groups:['admin'],
        component:DashboardView,
        isMenuItem:true,
        isSubMenu:false
    },
    {
        layout:'/admin',
        path:'/testing',
        fullpath:'/admin/testing',
        name:"Testing",
        icon:faSmile,
        groups:['admin'],
        component:TestView,
        isMenuItem:true,
        isSubMenu:false
    },
    {
        name:"Tareas",
        icon:faDragon,
        groups:['admin'],
        isMenuItem:true,
        isSubMenu:true,
        subMenus:[
            {
                layout:'/admin',
                path:'/sub-menu',
                fullpath:'/admin/sub-menu',
                name:'Test',
                component:TestSubMenu,
                groups:['admin'],
            },
            {
                layout:'/admin',
                path:'/sub-menu2',
                fullpath:'/admin/sub-menu2',
                name:'Submenu2',
                component:TestSubMenu2,
                groups:['admin'],
            }
        ]
    }

]

