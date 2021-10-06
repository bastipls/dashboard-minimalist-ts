import axios from "axios"
import { IList } from '../../interfaces/maintainers/IList';

// TODO: Agregar token cuando exista auth
const getAllListsService = () =>{
    return axios.get(`${process.env.REACT_APP_URL_LISTS}lists`)
}
const addListService = (data:IList) =>{
    return axios.post(`${process.env.REACT_APP_URL_LISTS}list`,data)
}
const updateListService = (idList:number,data:IList) => {
    return axios.put(`${process.env.REACT_APP_URL_LISTS}list/${idList}`,data)
}
const deleteListService = (idList:number) => {
    return axios.delete(`${process.env.REACT_APP_URL_LISTS}list/${idList}`)
}
export {
    getAllListsService,
    addListService,
    updateListService,
    deleteListService
}