import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
//import Covid_Page from './covid-page.js'
//import { usePagination } from '@material-ui/lab/Pagination';
import * as bs from 'react-bootstrap'
import CampaignCard from './campaign-card.js'
import AppContext from './context.js'
// import { MDBCol, MDBIcon } from "mdbreact"

function Home(props) {

  const state = React.useContext(AppContext)
  const [initial, setInitial] = React.useState(0)
  //const [totalResults, setTotalResults] = React.useState(0)
  let totalResults = 0;
  const filteredCampaigns = []
  const pageCampaigns = []
  //let numPages = 0

  // Route match
  const match_category = useRouteMatch("/campaign-category/:name")
  const match_goal = useParams("/campaign-goal/minGoal/:min/maxGoal/:max")
  const match_currency = useRouteMatch("/campaign-currency/:name")
  const match_charity = useRouteMatch("/campaign-charity/:name")

  if (match_category != null) {
    for (const p of state.campaigns) {
      if (p.category === (match_category.params.name)) {
        filteredCampaigns.push(p)
        totalResults++
      }
    }
  }
  else if (match_goal.min != null && match_goal.max != null) {
    const { min, max } = match_goal

    for (const p of state.campaigns) {
      if (p.goal >= min && p.goal <= max) {
        filteredCampaigns.push(p)
        totalResults++
      }
    }
  }
  else if (match_charity != null) {
    console.log("match_charity.params.name: ", match_charity.params.name)
    for (const p of state.campaigns) {
      console.log("p.charity_valid: ",p.charity_valid)
      if (p.charity_valid == (match_charity.params.name)) {
        filteredCampaigns.push(p)
        totalResults++
      }
    }
  }
  else if (match_currency != null) {
    for (const p of state.campaigns) {
      if (p.currencycode === (match_currency.params.name)) {
        filteredCampaigns.push(p)
        totalResults++
      }
    }
  }
  else {
    for (const p of state.campaigns) {
      filteredCampaigns.push(p)
      totalResults++
    }
  }

  filteredCampaigns.sort(function(a,b){return a.ranking - b.ranking})

  // Pagination

  if (filteredCampaigns.length <= 6) {
    for (let i = 0; i < filteredCampaigns.length; i++) {
      pageCampaigns.push(filteredCampaigns[i])
    }
    //setInitial(0)
  }
  else {

    //numPages = Math.ceil(filteredCampaigns.length / 6)

    if (initial < 0) {
      setInitial(0)
    }
    if (initial > filteredCampaigns.length - 6) {
      setInitial(initial - 6)
    }

    for (let i = initial; i < initial + 6; i++) {
      pageCampaigns.push(filteredCampaigns[i])
    }
  }



  return (
    //<Covid_Page filteredCampaigns={pageCampaigns}/> 

    <div>

      {/* Search Bar */}

      {/* <div>
        <MDBCol md="12">
          <form className="form-inline mt-4 mb-4">
            <MDBIcon icon="search" />
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
          </form>
        </MDBCol>
      </div> */}

      <bs.Container>
        <br></br>
        <div>
          Search returned {totalResults} results.
        </div>
        <br></br>
      </bs.Container>

      <bs.Container>
        <bs.CardColumns>
          {pageCampaigns.map((campaign, idx) => {
            return (
              <CampaignCard key={ImageBitmapRenderingContext} campaign={campaign} />
            )
          })}
        </bs.CardColumns>
      </bs.Container>

      <bs.Container>
        <div>
          <bs.Pagination className="float-right">
            <bs.Pagination.Prev
              onClick={e => {
                setInitial(initial - 6)
              }}
            >
              Previous Page
                    </bs.Pagination.Prev>
            <bs.Pagination.Next
              onClick={e => {
                setInitial(initial + 6)
              }}
            >
              Next Page
              </bs.Pagination.Next>
          </bs.Pagination>
        </div>
      </bs.Container>

    </div>
  );
}

export default Home;