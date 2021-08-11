import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';
import { RootState } from '../store/reducers/index';
import { UiState } from '../store/reducers/uiReducer';


export const TestScreen = () => {
    const { loading }:UiState = useSelector((state:RootState) => state.ui)
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
