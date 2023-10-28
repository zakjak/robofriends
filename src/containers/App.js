import React, { useEffect, useState } from 'react'
import './App.css';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';

const App = () => {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }, [robots])
  

  const onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList 
                  robots={filteredRobots}
                />
              </ErrorBoundry>
            </Scroll>
        </div>
      )
    )
    }

export default App;
