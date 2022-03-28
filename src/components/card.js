import React from "react"
import timeline from '../css/timeline.module.css'

export function Card({ title, subTitle, text }) {
    return (
        <article className={timeline.card}>
            <h3 className={timeline.title}>
                {title}
            </h3>


            <p className={timeline.cardDetailedText}>
                {subTitle ? <p className={timeline.pill}>{subTitle}</p> : null}
                {text}
            </p>
        </article>
    )
}