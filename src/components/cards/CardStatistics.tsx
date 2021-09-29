import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
interface PropsCardStatistics {
    icon:IconDefinition,
    color:string,
    title:string,
    subValue:string | number,
    value:string | number
}
export const CardStatistics = ({icon,color="#4DA851",title,subValue,value}:PropsCardStatistics) => {
    return (
        <div className="components-card__container-card-stats">
            <div className="base__card components-card__card-stats">
                <div style={{background:color}} className="components-card__card-stats-icon-container">
                    <FontAwesomeIcon icon={icon} size="2x"/>
                </div>
                <div className="components-card__title-card-stats"> 
                    <p>{title}</p>
                </div>
                <div className="components-card__value-card-stats"> 
                    <p>{subValue}</p>
                    <p>{value}</p>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}
