import React from 'react'
import dates from './dates.module.css'

export function Period({ start, end }) {
    return (
        <div className={dates.periodContainer}>
            <div className={dates.vert}/>
            <h3 className={dates.datecontainer}>
                {start}
            </h3>
            
            
            <div className={dates.divider}>
                -
            </div>
            
            <h3 className={dates.datecontainer} >
                {end}
            </h3>
        </div>
    )

}