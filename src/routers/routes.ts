
import { faChartPie, faSearch, faToolbox, faUpload } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { DashboardView } from "../views/admin/Dashboard/DashboardView";
import React from "react";
import { UploadDocumentView } from '../views/admin/UploadDocument/UploadDocumentView';
import { SearchDocumentsView } from '../views/admin/SearchDocuments/SearchDocumentsView';
import { MaintainersView } from '../views/admin/Maintainers/MaintainersView';

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
        layout:'/admin',
        path:'/search-documents',
        fullpath:'/admin/search-documents',
        name:"Buscar documento",
        icon:faSearch,
        groups:['admin'],
        component:SearchDocumentsView,
        isMenuItem:true,
        isSubMenu:false
    },
    {
        layout:'/admin',
        path:'/maintainers',
        fullpath:'/admin/maintainers',
        name:"Mantenedores",
        icon:faToolbox,
        groups:['admin'],
        component:MaintainersView,
        isMenuItem:true,
        isSubMenu:false
    },

    // {
    //     name:"Test",
    //     icon:faToolbox,
    //     groups:['admin'],
    //     isMenuItem:true,
    //     isSubMenu:true,
    //     subMenus:[
    //         {
    //             layout:'/admin',
    //             path:'/sub-menu',
    //             fullpath:'/admin/sub-menu',
    //             name:'Test',
    //             component:TestSubMenu,
    //             groups:['admin'],
    //         },
    //         {
    //             layout:'/admin',
    //             path:'/sub-menu2',
    //             fullpath:'/admin/sub-menu2',
    //             name:'Submenu2',
    //             component:TestSubMenu2,
    //             groups:['admin'],
    //         }
    //     ]
    // }

]

