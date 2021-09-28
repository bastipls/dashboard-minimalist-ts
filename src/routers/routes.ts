
import { faChartPie, faSmile } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { DashboardView } from "../views/admin/Dashboard/DashboardView";
import React from "react";
import { TestView } from "../views/admin/Dashboard/Test/TestView";
export interface RoutesAdmin {
    layout?:     string ;
    path?:       string ;
    name:        string;
    icon:        IconDefinition;
    groups:      string[];
    component:  React.ElementType;
    isMenuItem:  boolean;
    isSubMenu:   boolean;
    subMenus?:   SubMenuRoute[];
}

export interface SubMenuRoute {
    layout:      string;
    path:        string;
    name:        string;
    icon:        IconDefinition;
    component:   React.ElementType;
    groups:      string[];

}

export const routesAdmin:RoutesAdmin[] = [
    {
        layout:'/admin',
        path:'/dashboard',
        name:"Dashboard",
        icon:faChartPie,
        groups:['admin'],
        component:DashboardView,
        isMenuItem:true,
        isSubMenu:false
    },
    {
        layout:'/admin',
        path:'/testing',
        name:"Testing",
        icon:faSmile,
        groups:['admin'],
        component:TestView,
        isMenuItem:true,
        isSubMenu:false
    }

]

