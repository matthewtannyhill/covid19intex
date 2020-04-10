import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import * as bs from 'react-bootstrap'
import HeaderContainer from './header-container'
import LeftContainer from './left-container'
import RightContainer from './right-container'
import FooterContainer from './footer-container'
import CampaignDetails from './campaign-details.js'
import Home from './home.js'
import './App.scss'
import './index.scss'


function App(props) {
  return (
    <Router>

      <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">

        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-0 py-0 bg-primary">
            <HeaderContainer />
          </bs.Col>
        </bs.Row>

        <bs.Row noGutters className="flex-grow-1">
          <bs.Col md="2" className="px-3 py-4 shadow bg-secondary">
            <LeftContainer />
          </bs.Col>

          <bs.Col md="8" className="bg-white">
            <Switch>

              {/* COVID19 */}
              
              <Route path="/campaign-details">
                <CampaignDetails />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/campaign/:id">
                <CampaignDetails />
              </Route>

              {/* 1 Filter */}
              <Route path="/campaign-category/:name">
                <Home />
              </Route>
              <Route path="/campaign-goal/minGoal/:min/maxGoal/:max">
                <Home />
              </Route>
              <Route path="/campaign-currency/:name">
                <Home />
              </Route>
              <Route path="/campaign-charity/:name">
                <Home />
              </Route>

            </Switch>
          </bs.Col>

          <bs.Col md="2" className="px-3 py-4 shadow bg-secondary">
            <RightContainer />
          </bs.Col>
        </bs.Row>

        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-0 py-0 bg-primary">
            <FooterContainer />
          </bs.Col>
        </bs.Row>

      </bs.Container>
    </Router>
  )
}

export default App