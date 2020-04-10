import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import ProgressBar from 'react-bootstrap/ProgressBar'

function CampaignCard(props) {
    return (
        <bs.Card
            size="lg"
            color="secondary"
            style={{
                width: '100%'
            }}
        >
            <bs.Card.Img
                variant="top"
                // style={{
                //     width: '50px',
                //     height: '50px'
                // }}
                src={props.campaign.campaign_image_url}
            />
            <bs.Card.Body>
                <bs.Card.Title>
                    {props.campaign.title}
                </bs.Card.Title>
                <br></br>
                <bs.Card.Text>
                    <bs.Card.Subtitle>
                        {props.campaign.description.length > 150 ?
                            `${props.campaign.description.substring(0, 150)}...` : props.campaign.description
                        }
                    </bs.Card.Subtitle>
                    <br></br>
                    <bs.Card.Subtitle
                        className="text-info"
                    >
                        Overall Ranking: {props.campaign.ranking}
                    </bs.Card.Subtitle>
                    <br></br>
                    <bs.Card.Subtitle>
                        <ProgressBar 
                            variant="info" 
                            now={(props.campaign.percent_fulfilled*100).toFixed(2)} 
                            label={`${(props.campaign.percent_fulfilled*100).toFixed(2)}%`}
                            style={{
                                marginBottom: '5px'
                            }}
                        />
                        
                        ${props.campaign.current_amount} raised of ${props.campaign.goal}
                    </bs.Card.Subtitle>
                </bs.Card.Text>
                <Link to={"/campaign/" + props.campaign.id} className="btn btn-primary position-absolute" style={{ top: '5px', right: '10px' }}>
                    Details
                    </Link>
            </bs.Card.Body>
        </bs.Card>
    )
}

export default CampaignCard