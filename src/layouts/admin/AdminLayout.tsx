
import { routesAdmin } from "../../routers/routes"
import { RoutesView } from "../../routers/RoutesView"
import { SideBar } from "./components/SideBar"
import fakeDataUser from "../../FAKEDATA/user.json"
export const AdminLayout = () => {
    return (
      <>
      <SideBar />
      <div className="wrapper">
          <RoutesView routes={routesAdmin} user={fakeDataUser} />
      </div>
      </>
    )
}
