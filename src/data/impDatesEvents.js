import { Period } from "../components/period"
import { Event } from "../components/event"
import React from 'react'
import timeline from "../css/timeline.module.css"


export const impDatesEvents = [
    {
        title: (<Event date='January 1' />),
        cardDetailedText:
            (
                <p>
                    New Year’s Day.
                </p>
            )
    },
    {
        title: (<Event date='January 11' />),
        cardDetailedText:
            (
                <p>
                    Sir John A. Macdonald Day.
                </p>
            ),
    },
    {
        title: (<Event date='Friday, preceding Easter Sunday' />),
        cardDetailedText:
            (
                <p>
                    Good Friday.
                </p>
            )
    },
    {
        title: (<Event date='Monday, following Easter Sunday' />),
        cardDetailedText:
            (
                <p>
                    Easter Monday
                </p>
            )
    },
    {
        title: (<Event date='April 9' />),
        cardDetailedText:
            (
                <p>
                    Vimy Day.
                </p>
            )
    },
    {
        title: (<Event date='Monday, preceding May 25' />),
        cardDetailedText: (
            <p>
                Victoria Day
            </p>
        )
    },
    {
        title: (<Event date='May 25' />),
        cardDetailedText: (
            <p>
                Sovereign’s birthday
            </p>
        )
    },
    {
        title: (<Event date='June 24' />),
        cardDetailedText:
            (
                <>
                    <p className={timeline.pill}>Quebec</p>
                    <p>Feast of St. John the Baptist.</p>
                </>

            ),
    },
    {
        title: (<Event date='July 1' />),
        cardDetailedText:
            (
                <p>
                    🇨🇦 Canada Day.
                </p>
            )
    },
    {
        title: (<Event date='First Monday of September' />),
        cardDetailedText:
            (
                <p>
                    Labour Day.
                </p>
            )
    },
    {
        title: (<Event date='Second Monday of October' />),
        cardDetailedText:
            (
                <p>
                    Thanksgiving Day.
                </p>
            )
    },
    {
        title: (<Event date='November 11' />),
        cardDetailedText:
            (
                <p>
                    Remembrance Day. Canadians wear the red poppy and observe a moment of silence at the 11th hour of the 11th day of the 11th month to honour the sacrifices of over a million people who have served and the 110,000 who have given their lives in all wars Canadians took part.                </p>
            )
    },
    {
        title: (<Event date='November 20' />),
        cardDetailedText:
            (
                <p>
                    Sir Wilfrid Laurier Day.
                </p>
            )
    },
    {
        title: (<Event date='December 25' />),
        cardDetailedText:
            (
                <p>
                    Christmas Day.
                </p>
            )
    },
    {
        title: (<Event date='December 26' />),
        cardDetailedText:
            (
                <p>
                    Boxing day.
                </p>
            )
    }
]