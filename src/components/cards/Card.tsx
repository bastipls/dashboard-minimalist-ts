import React from 'react'
interface PropsCard{
    children:JSX.Element | JSX.Element[],
    flexDirection?:"row" |"row-reverse" | "column" | "column-reverse",
    flexWrap?:"wrap" | "nowrap" 
    
    
}
export const Card = ({children,flexDirection='row',flexWrap="wrap"}:PropsCard) => {
    return (
        <div 
            style={{
                flexWrap:flexWrap,
                flexDirection:flexDirection
            }}
            className="components-card__card-container"
            >
            {children}
        </div>
    )
}
