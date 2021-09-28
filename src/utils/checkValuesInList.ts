import { IUserGroup } from "../interfaces/IUser";


export const checkValuesInList  = (user_gp:IUserGroup[],route_gp:string[]) => {
    const user_gp_list = user_gp.map( gp  => gp.name   ) 
    const in_list = route_gp.every( gp => user_gp_list.includes(gp) )
    return in_list;
}