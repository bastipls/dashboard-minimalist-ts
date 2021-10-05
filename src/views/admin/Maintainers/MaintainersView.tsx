

import {  Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import { TableLists } from './components/TableLists';
const a11yProps = (index:number) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,

    };
}
export const MaintainersView = () => {
    const [tabValue, setTabValue] = useState<number>(0)
    const handleChangeTab = (_:React.ChangeEvent<{}>, newValue:any) => {
        setTabValue(newValue);
    };
    return (
        <div>
            <div className="maintainers__tab-container ">
                <Tabs indicatorColor="primary" variant="scrollable" onChange={handleChangeTab} scrollButtons="auto" value={tabValue} aria-label="simple tabs example">
                    <Tab className="maintainers__tab" label="Listas" {...a11yProps(0)} />
                    <Tab className="maintainers__tab" label="Sectores" {...a11yProps(1)} />
                
                </Tabs>
            </div>
            <div className="maintainers__table-container">
                {tabValue ===0 && 
                    <TableLists 
                    />
                    }
            </div>
        </div>
    )
}
