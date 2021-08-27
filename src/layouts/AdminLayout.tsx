import { FC } from "react"
import { RouteComponentProps } from "react-router-dom"
import { SideBar } from "./components/SideBar"

export const AdminLayout: FC<RouteComponentProps> = () => {
    return (
      <SideBar />
    )
}
