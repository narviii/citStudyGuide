import React from 'react'
import dates from './dates.module.css'

export function Event({ date }) {
    return (
            <h3 className={dates.datecontainer} >
                {date}
            </h3>
      
    )

}