import { combineReducers } from "redux"
import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import maintanersReducer from './maintainersReducer';


const reducers = combineReducers({
    ui:uiReducer,
    auth:authReducer,
    maintainers:maintanersReducer
})
// Se utiliza para usar useSelector correctamente con typescript
export type RootState = ReturnType<typeof reducers>
export default reducers;