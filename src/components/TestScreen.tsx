import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { RootState } from '../state/reducers/index';
import { IUiState } from '../state/reducers/uiReducer';


export const TestScreen = () => {
    const { loading }:IUiState = useSelector((state:RootState) => state.ui)
    const dispatch = useDispatch()
    const{startLoading,finishLoading} = bindActionCreators(actionCreators,dispatch)
    return (
        <div>
            <h1>{ loading.toString()}</h1>
            <button onClick={startLoading}>LOADING</button>
            <button onClick={finishLoading}>FINISH</button>
        </div>
    )
}
