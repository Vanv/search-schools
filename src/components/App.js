import React, { Component } from 'react';
import '../css/App.css';
import SearchSchools from './SearchSchools';
import ListSchools from './ListSchools';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allSchools: [],
      orderBy: 'SchoolName',
      orderDir: 'asc',
    };
  }
  componentDidMount() {
    fetch('./schooldata.json')
    .then(response => response.json())
    .then(result => {
      const schools = result.map(item => {
        return item;
      })
      this.setState({
        allSchools: schools
      });
    });
  }
  render() {
    let order;
    let filteredSchools = this.state.allSchools;
    if(this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredSchools.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    })


    return(
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">

                {/*<div>Add schools</div>*/}
                <SearchSchools />
                <ListSchools schoolList={filteredSchools}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
