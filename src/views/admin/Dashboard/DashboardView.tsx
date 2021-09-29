import { faFile, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../../../components/cards/Card"
import { CardStatistics } from '../../../components/cards/CardStatistics';

export const DashboardView = () => {

    return (
        <div className="dashboard__container">
        <CardStatistics 
            icon={faFile}
            title="Total documentos subidos"
            value="5"

        />
        <CardStatistics 
            icon={faFile}
            title="Total documentos subidos"
            value="5"

        />
        <CardStatistics 
            icon={faUsers}
            title="Total documentos subidos"
            color="#0DB5CA"
            value="5"

        />
        <CardStatistics 
            icon={faFile}
            title="Total documentos subidos"
            value="5"

        />
         <CardStatistics 
            icon={faFile}
            title="Total documentos subidos"
            value="5"

        />
        <Card flexDirection="column">
            <h1>Dashboard</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum illo quidem culpa modi, corporis sed est harum nostrum inventore, atque unde quia. Aperiam ad vero blanditiis, quod error tenetur?</h3>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum illo quidem culpa modi, corporis sed est harum nostrum inventore, atque unde quia. Aperiam ad vero blanditiis, quod error tenetur?</h3>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum illo quidem culpa modi, corporis sed est harum nostrum inventore, atque unde quia. Aperiam ad vero blanditiis, quod error tenetur?</h3>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum illo quidem culpa modi, corporis sed est harum nostrum inventore, atque unde quia. Aperiam ad vero blanditiis, quod error tenetur?</h3>
        </Card>
        </div>
    )
}
