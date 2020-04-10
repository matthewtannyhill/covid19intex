import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import * as bs from 'react-bootstrap'


/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
        }
        this.state = {
            campaigns: null,
        }
    }

    render() {

        if(!this.state.campaigns){
            return <div>
                <bs.Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </bs.Spinner>
            </div>
        }

        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {

        // Local Host
        // const camps = await axios.get('http://localhost:8000/api/campaign')

        // Heroku
        const camps = await axios.get('/api/campaign')

        this.setState({
            ...this.state,
            campaigns: camps.data,
        })
    }

}