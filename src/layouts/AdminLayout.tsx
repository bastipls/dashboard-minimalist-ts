import { FC } from "react"
import { RouteComponentProps } from "react-router-dom"
import { SideBar } from "./components/SideBar"

export const AdminLayout: FC<RouteComponentProps> = () => {
    return (
      <>
      <SideBar />
      <div className="wrapper">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt delectus at quasi, in et, ipsum saepe vel
             vero ea a nisi animi eos iusto, magnam laboriosam autem aliquid ex.</h1>
             <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt delectus at quasi, in et, ipsum saepe vel
             vero ea a nisi animi eos iusto, magnam laboriosam autem aliquid ex.</h1>
             <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt delectus at quasi, in et, ipsum saepe vel
             vero ea a nisi animi eos iusto, magnam laboriosam autem aliquid ex.</h1>
             
      </div>
      </>
    )
}
