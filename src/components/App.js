import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import { Button } from 'semantic-ui-react'

export default class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      keyword: "",
      results: []
    }
  }

  /**
   * Async function that handles the form submission.
   * Sends a GET request to the Unsplash API using Axios and updates the state with the results.
   * @param {object} e - The event object.
   */
  async handleSubmit(e) {
    e.preventDefault(); // Prevents the default behavior of the form submission which is to refresh the page.

    const key = "_6BxmIaoA4_E59wZFWYzf_2cfbVSZo7S-QMrnuDcLJE";
    const term = this.state.keyword  // Search term entered by the user
    const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`)

    this.setState({
      results: data.results // Update the state with the search results
    })
  }

  /**
 * Function that updates the state with the keyword entered by the user.
 * @param {object} e - The event object.
 */
  handleChange(e) {
    this.setState({
      keyword: e.target.value // Update the state with the keyword entered by the user
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <div className="ui icon input">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={this.handleChange}
              value={this.state.keyword} //Now this is controlled component
            />
            <Button primary className='button'>Search</Button>
          </div>
        </form>
        <div>
          {
            this.state.results.map(image => {
              return <img src={image.urls.small} alt="images" />
            })
          }
        </div>
      </div>
    )
  }
}
