import React from "react"
import timeline from "../css/timeline.module.css"
import { Period } from "../components/period"
import { Event } from "../components/event"
import { Timeline } from "../components/timeline"


const secWar =
    [
        {
            title: (<Event date='1941' />),
            cardDetailedText:
                (
                    <>
                        <p>
                            Unsuccessful defence of Hong Kong from attack by Imperial Japan.
                        </p>
                    </>
                )
        },
        {
            title: (<Event date='1942' />),
            cardDetailedText:
                (
                    <>
                        <p>
                            Failed raid on Nazi-controlled Dieppe on the coast of France.
                        </p>
                    </>
                )
        },
        {
            title: (<Event date='June 6, 1944' />),
            cardDetailedText:
                (
                    <>
                        <p className={timeline.pill}>D-Day</p>
                        <p>
                            In the  invasion of Normandy in Nazi-occupied northern France 15,000 Canadian troops stormed and captured Juno Beach from the German Army. Approximately one in ten Allied soldiers on D-Day was Canadian.
                        </p>
                    </>
                )
        },
        {
            title: (<Event date='August 14, 1945' />),
            subTitle: 'Surrender of Japan',
            cardDetailedText:
                (
                    <>
                        <p>The end of four years of war in the Pacific. Japan invaded the Aleutian Islands, attacked a lighthouse on Vancouver Island, launched fire balloons over B.C. and the Prairies, and grossly maltreated Canadian prisoners of war captured at Hong Kong.</p>
                        <p>The state of war and public opinion in B.C. led to the forcible relocation of Canadians of Japanese origin by the federal government and the sale of their property without compensation. The Government of Canada apologized in 1988 for wartime wrongs and compensated the victims.</p>
                    </>
                )
        }
    ]

const firstWar =
    [
        {
            title: (<Event date='April 9, 1917' />),
            cardDetailedText:
                (
                    <>
                        <p>
                            The Canadian Corps captured Vimy Ridge, with 10,000 killed or wounded, securing the Canadians’ reputation for valour as the “shock troops of the British Empire.” It is said that this battle meant the birth of a nation.” The date is celebrated as Vimy Day.
                        </p>
                    </>
                )
        },
        {
            title: (<Event date='1918' />),
            subTitle: 'Battles of Amiens (“the black day of the German Army”)',
            cardDetailedText:
                (
                    <>
                        <p>
                            Arras, Canal du Nord, Cambrai and Mons under the command of General Sir ArthurCurrie.
                        </p>
                    </>
                )
        },
    ]

const afrWar =
    [
        {
            title: (<Event date="1900" />),
            subTitle: 'Battles of Paardeberg (“Horse Mountain”) and Lillefontein.',
            cardDetailedText:
                (
                    <>
                        <p>These victories strengthened national pride in Canada.</p>
                    </>
                )
        },

    ]

const indWar = [
    {
        title: (<Event date="1759" />),
        cardDetailedText:
            (<>
                <p className={timeline.pill}>Battle of the Plains of Abraham </p>
                <p>Plains by Quebec City where the battle took place belonged to the farmer Abraham.</p>
                <p>Britain won the battle and took Quebec City. Commanders of both armies James Wolfe and Marquis de Montcalm were killed in action but the battle became a pivot in the war and marked the end of France’s empire in America.</p>
            </>
            )
    },
]

const usWar = [
    {
        title: (<Event date="1812" />),
        cardDetailedText: 'Led by Isaak Brock, the British army captured Detroit. Later they managed to defend Queenston Heights near Niagara Falls but Brock was killed in this battle.'
    },
    {
        title: (<Event date="1813" />),
        cardDetailedText: '460 soldiers, mostly Canadiens, led by Charles de Salaberry turned back an army of 4000 US soldiers at Chateauguay, south of Montreal. The Battle of Beaver Dams was won by the British army. Originally Americans planned to win it by surprise but Laura Secord, the pioneer wife and mother of five, learned about their plans and walked 19 miles to warn lieutenant FitzGibbons. Americans burnt the Government House and Parliament buildings in York (present-day Toronto).'
    },
    {
        title: (<Event date="1814" />),
        cardDetailedText: 'In retaliation for the York burnings, the army led by Robert Ross from Nova Scotia burnt the White House and other public buildings in Washington, DC.'
    },
]

export const warAndRebbelionEvents = [
    {
        title:
            (
                <>
                    <Period start="1754" end="1763" />
                </>
            ),

        cardDetailedText: (
            <>
                <p className={timeline.pill}>Indian War </p>
                <p>In Europe known as the Seven Years War, between Britain and France.</p>
                <p>With time, British colonies in North America grew richer than French ones. Meanwhile, Britain and France started fighting over influence in the world. They fought in a few wars in the 1700s, and the Indian War became the decisive one.</p>
                <p>Britain won the war and renamed the French colony Province of Quebec.</p>
                <Timeline events={indWar} titleWidth="4rem" />
            </>
        )
    },

    {
        title: (
            <>
                <Period start="1812" end="1815" />

            </>
        ),

        cardDetailedText: (
            <>
                <p className={timeline.pill}>War with USA.</p>
                <p>While Britain fought Napoleon over navy dominance, USA started resenting British interference with their shipping. It led to the USA invading Canada. British army helped by Canadian volunteers and First Nations resisted. By 1814, the US campaign failed, and at the beginning of 1815, the was won by Britain. </p>
                <p>To prevent the USA from invading Canada in the future, Britain built a costly defence system including a citadel and naval drydock and Halifax, a citadel in Quebec City, Port Henry in Kingston, Rideau Canal. Duke of Wellington chose Bytown (now Ottawa) as an endpoint for the Rideau Canal which was crucial for it to become the state capital in the future.</p>
                <Timeline events={usWar} titleWidth="4rem" />
            </>

        )
    },

    {
        title:
            (
                <Period start="1837" end="1838" />
            ),
        cardDetailedText:
            (
                <>
                    <p className={timeline.pill}>Rebellions outside Montreal and in Toronto for democracy.</p>
                    <p>
                        Some believed Canada should adopt American republican values or even try to join the United States. Rebellions were defeated. Lord Durham was sent to report on rebellions. He proposed to merge Upper and Lower Canadas and give it the responsible government which meant that the Crown’s ministers had to have the support of the majority of the elected representatives to govern. However, he also considered it beneficial for Canadiens to assimilate into English-speaking protestant culture which showed his poor understanding of French Canadians.
                    </p>

                </>
            )
    },
    {
        title:
            (
                <Period start="1869" end="1870" />
            ),
        cardDetailedText: (
            <>
                <p className={timeline.pill}>Métis rebellion</p>
                <p>
                    When Canada was taking over North West Territories, they didn’t consult Métis of the Red River which led to a rebellion led by Lois Riel. They captured the capital of the region Fort Garry. Canada retook Fort Garry in 1870. Riel fled to the USA, and Canada established a province of Manitoba. Riel was elected to its Parliament but never took the seat. After this rebellion, in 1873 Canada established North West Mounted Police (nowadays Royal Canadian Mounted Police) to pacify the West.
                </p>
            </>
        )
    },
    {
        title: (<Event date={1885} />),
        cardDetailedText:
            (
                <>
                    <p>
                        <p className={timeline.pill}>Second Métis rebellion</p>
                        Métis and Indian rights were threatened again by Canadian settlement, and they rebelled on the territories of present-day Saskatchewan. The rebellion was defeated, and Riel was executed despite his lawyers’ attempts to plead insanity and strong opposition to the decision in Quebec.
                    </p>
                </>
            )
    },
    {
        title: (<Period start="1899" end="1902" />),
        cardDetailedText: (
            <>
                <p className={timeline.pill}>South African War</p>
                <p>
                    Popularly known as the Boer War. Over 7,000 Canadians volunteered, and over 260 died.
                </p>
                <Timeline events={afrWar} titleWidth="4rem" />
            </>
        )
    },

    {
        title: (<Period start="1914" end="1918" />),
        cardDetailedText:
            (
                <>
                    <p className={timeline.pill}>World War I</p>
                    <p>
                        Ottawa formed the Canadian Expeditionary Force (later the Canadian Corps). More than 600,000 Canadians served in the war, most of them volunteers, out of a total population of eight million. In total 60,000 Canadians were killed and 170,000 wounded.
                    </p>
                    <p>
                        Regrettably, from 1914 to 1920, Ottawa interned over 8,000 former Austro-Hungarian subjects, mainly Ukrainian men, as “enemy aliens” in 24 labour camps across Canada.'
                    </p>
                    <Timeline events={firstWar} titleWidth="5rem" />

                </>
            )
    },
    {
        title: (<Period start='1939' end='1945' />),
        cardDetailedText:
            (
                <>
                    <p className={timeline.pill}>World War II</p>
                    <p>More than one million Canadians and Newfoundlanders (Newfoundland was a separate British entity) served in the Second World War, out of a population of 11.5 million. 44,000 were killed. </p>
                    <p>The Royal Canadian Air Force took part in the Battle of Britain and provided a high proportion of Commonwealth aircrew in bombers and fighter planes over Europe. Moreover, Canada contributed more to the Allied air effort than any other Commonwealth country, with over 130,000 Allied aircrew trained in Canada under the British Commonwealth Air Training Plan. </p>
                    <p>The Royal Canadian Navy saw its finest hour in the Battle of the Atlantic, protecting convoys of merchant ships against German submarines. Canada’s Merchant Navy helped to feed, clothe and resupply Britain. At the end of the Second World War, Canada had the third-largest navy in the world.'</p>
                    <Timeline events={secWar} titleWidth="8rem" />

                </>
            )
    },

]