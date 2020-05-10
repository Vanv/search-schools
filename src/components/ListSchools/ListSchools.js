import React, { Component, Fragment } from 'react';


class ListSchools extends Component {
  render() {

    return(
      <div data-testid="listschools" className="school-list item-list mb-3">
        { this.props.schoolList.map(item => (
          <div className="school-item col media py-3" key={item.Id}>
            <div className="school-info media-body">
              <div className="school-head d-flex row">
                <div className="school-name col-md-6 col-xs-12">
                  {item.SchoolName}
                </div>
                <div className="school-url ml-auto col-md-6 col-xs-12">
                  Website: <br/><a href={item.SchoolURL}>{item.SchoolName}</a>
                </div>
              </div>
              <div className="suburb">
                <b>Suburb </b>: {item.Suburb}
              </div>
              <div className="city-state">
              {item.AddressList.map((sub) =>
                <Fragment key={sub.City}>
                <div className="label-item">
                  <b>State Province </b>:{sub.StateProvince}
                </div>
                </Fragment>
                )}
              </div>
            </div>
          </div>
        ))}


      </div>
    );
  }
}

export default ListSchools;
