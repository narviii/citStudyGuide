import React from "react"
import { Card } from "./card"

export function Timeline({events,titleWidth}) {
    return (
        <div>
            {events.map((event) => <Card 
            title={event.title} 
            event = {event.event}
            vert = {event.vert}
            titleWidth={titleWidth}
            text = {event.cardDetailedText} 
            subTitle={event.subTitle}/> )}
        </div>
    )
}