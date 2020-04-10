import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import * as bs from 'react-bootstrap'
import AppContext from './context.js'
import ProgressBar from 'react-bootstrap/ProgressBar'
import SiteIcon from './media/favicon-32x32-3.png'


function CampaignDetails(props) {
    const state = React.useContext(AppContext)

    const match = useRouteMatch("/campaign/:id")

    let campaign = null
    let num = ''

    for (const p of state.campaigns) {
        num = '' + p.id
        if (num === (match.params.id)) {
            campaign = p
        }
    }

    if (!campaign) {
        return (<h2>Campaign Not Found</h2>)
    }

    return (
        <div className="m-4">

            <bs.Container>
                <h1>{campaign.title}</h1>
                <bs.Row
                    style={{
                        height: '100%',
                    }}
                >

                    <bs.Col xs={7}>
                        <div>
                            <img
                                alt={campaign.name}
                                src={campaign.campaign_image_url}

                                style={{
                                    width: '100%',
                                }}
                                className="w-100"
                            />

                        </div>
                        <div>
                            <hr
                                style={{
                                    color: "black",
                                    backgroundColor: "black",
                                    height: ".5px"
                                }}
                            />
                            <p><strong> Category: {campaign.category}
                                {campaign.charity_name ?
                                    `  |  Charity: ${campaign.charity_name}` : ""
                                }
                            </strong></p>
                            <hr
                                style={{
                                    color: "black",
                                    backgroundColor: "black",
                                    height: ".5px"
                                }}
                            />
                            <p> {campaign.description}</p>
                        </div>

                    </bs.Col>
                    <bs.Col xs={5}>
                        <bs.Card
                            size="lg"
                            color="secondary"
                            style={{
                                width: '100%'
                            }}
                        >
                            <bs.Card.Body>
                                <bs.Card.Text>
                                    <bs.Card.Subtitle
                                        className="text-info"
                                    >
                                        Overall Ranking: {campaign.ranking}
                                    </bs.Card.Subtitle>
                                    <br></br>
                                    <bs.Card.Subtitle>
                                        <ProgressBar
                                            variant="info"
                                            now={(campaign.percent_fulfilled * 100).toFixed(2)}
                                            label={`${(campaign.percent_fulfilled * 100).toFixed(2)}%`}
                                            style={{
                                                marginBottom: '10px'
                                            }}
                                        />

                                            ${campaign.current_amount} raised of ${campaign.goal}
                                    </bs.Card.Subtitle>
                                    <br></br>
                                    <div>
                                        <bs.Row
                                            style={{
                                                fontSize: '.88em',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <bs.Col>
                                                <span
                                                    style={{
                                                        textDecoration: 'underline'
                                                    }}
                                                >
                                                    Days Active
                                                </span>
                                                <br></br>
                                                {campaign.days_active}
                                            </bs.Col>
                                            <bs.Col>
                                                <span
                                                    style={{
                                                        textDecoration: 'underline'
                                                    }}
                                                >
                                                    Donors
                                                </span>
                                                <br></br>
                                                {campaign.donators}
                                            </bs.Col>
                                            <bs.Col>
                                                <span
                                                    style={{
                                                        textDecoration: 'underline'
                                                    }}
                                                >
                                                    Hearts
                                                </span>
                                                <br></br>
                                                {campaign.campaign_hearts}
                                            </bs.Col>
                                            <bs.Col>
                                                <span
                                                    style={{
                                                        textDecoration: 'underline'
                                                    }}
                                                >
                                                    Shares
                                                </span>
                                                <br></br>
                                                {campaign.social_share_total}
                                            </bs.Col>
                                        </bs.Row>
                                    </div>
                                    <br></br>
                                    <bs.Card.Subtitle>
                                        <div>
                                            <bs.Row>
                                                <bs.Col>
                                                    <img
                                                        alt={campaign.name}
                                                        src={SiteIcon}
                                                        style={{
                                                            width: '50px',
                                                        }}
                                                    />
                                                </bs.Col>
                                                <bs.Col>
                                                    {campaign.user_first_name} {' '} {campaign.user_last_name}                                                    
                                                </bs.Col>
                                                <bs.Col>
                                                    {campaign.location_city}, {campaign.location_country}
                                                </bs.Col>
                                                
                                            </bs.Row>
                                        </div>
                                    </bs.Card.Subtitle>
                                    <br></br>
                                    <bs.Button
                                        variant="primary"
                                        href={campaign.url}
                                        style={{
                                            width: '100%'
                                        }}
                                    >
                                        Donate now
                                    </bs.Button>
                                    <br></br>
                                </bs.Card.Text>
                            </bs.Card.Body>
                        </bs.Card>
                    </bs.Col>
                </bs.Row>
            </bs.Container >




        </div >

    )
}

export default CampaignDetails