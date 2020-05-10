import React, { Component } from 'react';
import '../css/App.css';
import SearchSchools from './SearchSchools';
import ListSchools from './ListSchools';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allSchools: [],
      orderBy: 'Suburb',
      orderDir: 'asc',
      queryText: '',
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.searchSchools = this.searchSchools.bind(this);
  }
  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }
  searchSchools(query) {
    this.setState({ queryText: query });
  }
  componentDidMount() {
    fetch('./data.json')
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

    filteredSchools = filteredSchools.sort((a,b) => {
      if (
        a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return (
        eachItem['Suburb']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['SchoolName']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase())
      );
    })


    return(
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">

                {/*<div>Add schools</div>*/}
                <SearchSchools
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchSchools={this.searchSchools}
                />
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
