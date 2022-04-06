import React from "react"
import timeline from '../css/timeline.module.css'

export function Card({ title, subTitle, text,titleWidth }) {
    return (
        <article className={timeline.card}>
            <div style={{width:titleWidth}} className={timeline.title}>
                {title}
            </div>


            <div className={timeline.cardDetailedText}>
                {subTitle ? <p className={timeline.pill}>{subTitle}</p> : null}
                {text}
            </div>
        </article>
    )
}