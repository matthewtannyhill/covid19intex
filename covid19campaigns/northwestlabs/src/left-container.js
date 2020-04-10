import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import AppContext from './context.js'


function LeftContainer(props) {

    const state = React.useContext(AppContext)
    const [min, setMin] = React.useState(0)
    const [max, setMax] = React.useState(0)

    const categories = {}
    const currencies = {}
    let charities = {}

    for (const p of state.campaigns) {
        if (p.category in categories) {
            categories[p.category] = categories[p.category] + 1
        }
        else {
            categories[p.category] = 1
        }
    }

    for (const p of state.campaigns) {
        if (p.currencycode in currencies) {
            currencies[p.currencycode] = currencies[p.currencycode] + 1
        }
        else {
            currencies[p.currencycode] = 1
        }
    }

    charities['True'] = 1
    charities['False'] = 0

    return (
        <bs.Nav className="flex-column">
            <div>
                <h4>Filter Search</h4>
            </div>
            <br></br>
            <div>
                <bs.Dropdown
                    as={ButtonGroup}
                    style={{
                        width: '90%'
                    }}
                >
                    <bs.Button
                        variant="primary"
                        style={{
                            width: "90%"
                        }}
                    >
                        <Link
                            to="/home/"
                            style={{
                                color: "black"
                            }}
                        >
                            All Categories
                        </Link>
                    </bs.Button>
                    <bs.Dropdown.Toggle
                        split
                        variant="success"
                        id="dropdown-split-basic"
                        style={{
                            width: "10%"
                        }}
                    />
                    <bs.Dropdown.Menu>
                        {Object.keys(categories).map((name, idx) => {
                            return <bs.Dropdown.Item
                                key={idx}
                                className="nav-link"
                            >
                                <Link
                                    to={"/campaign-category/" + name}
                                    className="nav-link"
                                >
                                    <i>{name} ({categories[name]})</i>
                                </Link>
                            </bs.Dropdown.Item>
                        })}
                    </bs.Dropdown.Menu>
                </bs.Dropdown>
            </div>
            <hr
                style={{
                    border: '1px solid primary'
                }}
            ></hr>
            <div>
                <bs.Dropdown
                    as={ButtonGroup}
                    style={{
                        width: '90%'
                    }}
                >
                    <bs.Button
                        variant="primary"
                        style={{
                            width: "90%"
                        }}
                    >
                        <Link
                            to="/home/"
                            style={{
                                color: "black"
                            }}
                        >
                            All Currencies
                        </Link>
                    </bs.Button>
                    <bs.Dropdown.Toggle
                        split
                        variant="success"
                        id="dropdown-split-basic"
                        style={{
                            width: "10%"
                        }}
                    />
                    <bs.Dropdown.Menu>
                        {Object.keys(currencies).map((name, idx) => {
                            return <bs.Dropdown.Item
                                key={idx}
                                className="nav-link"
                            >
                                <Link
                                    to={"/campaign-currency/" + name}
                                    className="nav-link"
                                >
                                    <i>{name} ({currencies[name]})</i>
                                </Link>
                            </bs.Dropdown.Item>
                        })}
                    </bs.Dropdown.Menu>
                </bs.Dropdown>
            </div>
            <hr
                style={{
                    border: '1px solid primary'
                }}
            ></hr>
            <div>
                <Link
                    to={"/campaign-charity/1"}
                    className="nav-link btn btn-primary"
                    style={{
                        width: '90%',
                        color: 'black'
                    }}
                >
                    Valid Charities
                </Link>
            </div>
            <hr
                style={{
                    border: '1px solid primary'
                }}
            ></hr>
            <div>
                <Link
                    to={"/campaign-goal/minGoal/" + min + "/maxGoal/" + max}
                    className="nav-link btn btn-primary"
                    style={{
                        width: '90%',
                        color: 'black'
                    }}
                >
                    Apply Goal Range
                </Link>
                <br></br>

                <input onChange={event =>
                    setMin(event.target.value)}
                    placeholder="Min"
                    style={{
                        width: '44%'
                    }}
                />
                -
                <input onChange={event =>
                    setMax(event.target.value)}
                    placeholder="Max"
                    style={{
                        width: '44%'
                    }}
                />

            </div>

        </bs.Nav>
    )
}


export default LeftContainer