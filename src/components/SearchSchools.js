import React, { Component } from 'react';


class SearchSchools extends Component {
  render() {
    return(
      <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-10">
          <div className="input-group">
            <input
              id="search-schools"
              type="text"
              className="form-control"
              placeholder="Search schools by suburb"
              onChange={e => this.props.searchSchools(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button className={
                  'sort-by dropdown-item ' +
                  (this.props.orderBy === 'Suburb' ? 'active': '')
                }
                onClick={ e => this.props.changeOrder('Suburb', this.props.orderDir)}
                href="#">
                  Suburb
                </button>
                <button
                  className={
                   'sort-by dropdown-item ' +
                   (this.props.orderBy === 'SchoolName' ? 'active': '')
                 }
                 onClick={ e => this.props.changeOrder('SchoolName', this.props.orderDir)}
                 href="#">
                  School Name
                </button>
                <div role="separator" className="dropdown-divider" />
                <button  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'asc' ? 'active': '')
                  }
                  onClick={e => this.props.changeOrder(this.props.orderBy, 'asc')}
                  href="#">
                  Asc
                </button>
                <button
                    className={
                     'sort-by dropdown-item ' +
                     (this.props.orderDir === 'desc' ? 'active': '')
                   }
                   onClick={e => this.props.changeOrder(this.props.orderBy, 'desc')}
                   href="#">
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSchools;
