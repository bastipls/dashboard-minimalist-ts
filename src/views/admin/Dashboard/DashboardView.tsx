import { CardWithList } from "./components/CardWithList"
import { faFile, faListAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { CardStatistics } from "../../../components/cards";
import { BarChartDocuments } from "./components/BarChartDocuments";


export const DashboardView = () => {
    const dummyList1 = [1,2,3,4,5]
    const dummyList2 = [1,2,3,4]
    const dummyList3 = [1,2,3]
    return (
        <div className="dashboard__container">
            <div className="dashboard__container-last-documents-and-cards">
                <CardWithList title="Ultimos documentos" icon={faFile} dummy={dummyList2} />
                <div className="dashboard__container-cards">
                    <CardStatistics 
                        icon={faFile}
                        title="Total documentos subidos"
                        value="5"
                        color="#E91E63"
                    />
                    <CardStatistics 
                        icon={faUsers}
                        title="Total usuarios"
                        value="25"
                        color="#00BCD4"
                    />
                     <CardStatistics 
                        icon={faFile}
                        title="Total documentos"
                        value="5"
                    />
             
                </div>
                <div className="dashboard__container-bar-chart">
                    <div className="dashboard__title-bar-chart">
                        <h4>Tipos de documentos</h4>
                        <hr  className="base__hr-right-ease" style={{marginBottom:"20px"}} />
                    </div>
                    <BarChartDocuments />
                </div>
            </div>
            
            <div className="dashboard__container-side-right">
                <CardWithList title="Actividades recientes" icon={faListAlt} dummy={dummyList1} />
                <CardWithList title="Documentos más vistos" icon={faListAlt} dummy={dummyList3} />
            </div>
        </div>
    )
}
