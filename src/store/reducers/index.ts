import { combineReducers } from "redux"
import uiReducer from "./uiReducer";


const reducers = combineReducers({
    ui:uiReducer,
})
// Se utiliza para usar useSelector correctamente con typescript
export type RootState = ReturnType<typeof reducers>
export default reducers;