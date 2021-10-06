

import {  Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import { TableCompanies } from './components/TableCompanies';
import { TableLists } from './components/TableLists';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers/index';
import { IUiState } from '../../../state/reducers/uiReducer';
import { TableOrganizations } from './components/TableOrganizations';
const a11yProps = (index:number) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,

    };
}
export const MaintainersView = () => {
    const [tabValue, setTabValue] = useState<number>(0)
    const {loading}:IUiState = useSelector((state:RootState) => state.ui)
    const handleChangeTab = (_:React.ChangeEvent<{}>, newValue:any) => {
        setTabValue(newValue);
    };
    return (
        <div>
            <div className="maintainers__tab-container ">
                <Tabs indicatorColor="primary" variant="scrollable" onChange={handleChangeTab} scrollButtons="auto" value={tabValue} aria-label="simple tabs example">
                    <Tab className="maintainers__tab" label="Listas" {...a11yProps(0)} />
                    <Tab className="maintainers__tab" label="Empresas" {...a11yProps(1)} />
                    <Tab className="maintainers__tab" label="Organización" {...a11yProps(2)} />
                </Tabs>
            </div>
            <div className="maintainers__table-container">
                {
                    tabValue ===0 && 
                        <TableLists 
                            loading={loading}
                        />
                }
                {
                    tabValue ===1 && 
                        <TableCompanies
                            loading={loading}
                        />
                }
                {
                    tabValue ===2 && 
                        <TableOrganizations
                            loading={loading}
                        />
                }
            </div>
        </div>
    )
}
