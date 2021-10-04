import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface PropsCardWithList {
    title:string,
    icon:IconDefinition,
    dummy:number[]
}
export const CardWithList = ({title,icon,dummy}:PropsCardWithList) => {
  
    return (
        <div className="dashboard__list-container">
            <div className="dashboard__list-section-title">
                <h4>{title}</h4>
                <hr className="base__hr-right-ease" />
            </div>
            <div className="dashboard__list-section-items">
                {
                 dummy.map((v,index) => (
                        <div key={index}>
                        <div className="dashboard__list-item">
                            <div className="dashboard__list-name">
                                <FontAwesomeIcon icon={icon} />  <p>Administrator SuperCopley Subio Mevacuno.Pdf</p>
                            </div>
                            <div className="dashboard__list-date">
                                <p>Creado el mar, 13 de julio de 2021 21:01</p>
                            </div>
                        </div>
                        <hr className="base__hr-right-left-ease" />
                        </div>
                 ))
                }
            </div>
        </div>
    )
}
