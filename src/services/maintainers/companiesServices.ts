import axios from "axios"
import { ICompany } from '../../interfaces/maintainers/IComapny';

// TODO: Agregar token cuando exista auth
const getAllComapniesService = () =>{
    return axios.get(`${process.env.REACT_APP_URL_COMPANY}companies`)
}
const addCompanyService = (data:ICompany) =>{
    return axios.post(`${process.env.REACT_APP_URL_COMPANY}company`,data)
}
const updateCompanyService = (idCompany:number,data:ICompany) => {
    return axios.put(`${process.env.REACT_APP_URL_COMPANY}company/${idCompany}`,data)
}
const deleteCompanyService = (idCompany:number) => {
    return axios.delete(`${process.env.REACT_APP_URL_COMPANY}company/${idCompany}`)
}
export {
    getAllComapniesService,
    addCompanyService,
    updateCompanyService,
    deleteCompanyService
}