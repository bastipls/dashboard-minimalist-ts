
import { faChartPie, faToolbox, faUpload } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { DashboardView } from "../views/admin/Dashboard/DashboardView";
import React from "react";
import { TestSubMenu } from '../views/admin/SubMenuTest/TestSubMenu';
import { TestSubMenu2 } from '../views/admin/SubMenuTest/TestSubMenu2';
import { UploadDocumentView } from '../views/admin/UploadDocument/UploadDocumentView';

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
        path:'/upload-document',
        fullpath:'/admin/testing',
        name:"Cargar documento",
        icon:faUpload,
        groups:['admin'],
        component:UploadDocumentView,
        isMenuItem:true,
        isSubMenu:false
    },
    {
        name:"Mantenedores",
        icon:faToolbox,
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

