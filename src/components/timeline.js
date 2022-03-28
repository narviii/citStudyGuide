import React from "react"
import { Card } from "./card"

export function Timeline({events}) {
    return (
        <div>
            {events.map((event) => <Card title={event.title} text = {event.cardDetailedText} subTitle={event.subTitle}/> )}
        </div>
    )
}