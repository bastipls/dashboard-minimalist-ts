import axios from "axios"
import { IOrganization } from '../../interfaces/maintainers/IOrganization';

// TODO: Agregar token cuando exista auth
const getAllOrganizationsService = () =>{
    return axios.get(`${process.env.REACT_APP_URL_COMPANY}organizations`)
}
const addOrganizationService = (data:IOrganization) =>{
    return axios.post(`${process.env.REACT_APP_URL_COMPANY}organization`,data)
}
const updateOrganizationService = (idOrganization:number,data:IOrganization) => {
    return axios.put(`${process.env.REACT_APP_URL_COMPANY}organization/${idOrganization}`,data)
}
const deleteOrganizationService = (idOrganization:number) => {
    return axios.delete(`${process.env.REACT_APP_URL_COMPANY}organization/${idOrganization}`)
}
export {
    getAllOrganizationsService,
    addOrganizationService,
    updateOrganizationService,
    deleteOrganizationService
}