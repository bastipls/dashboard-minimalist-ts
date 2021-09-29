import React from 'react'
interface PropsCard{
    children:JSX.Element | JSX.Element[]
}
export const Card = ({children}:PropsCard) => {
    return (
        <div className="components-card__card-container">
            {children}
        </div>
    )
}
