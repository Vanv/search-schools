import React, { Component, Fragment } from 'react';


class ListSchools extends Component {
  render() {

    return(
      <div className="school-list item-list mb-3">
        { this.props.schoolList.map(item => (
          <div className="school-item col media py-3" key={item.Id}>
            {/*<div className="mr-3">
              <button className="pet-delete btn btn-sm btn-danger">
              X</button>
            </div>*/}

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span className="pet-name">
                  {item.SchoolName}
                </span>
                <span className="school-url ml-auto">
                  Website: <br/><a href={item.SchoolURL}>{item.SchoolName}</a>
                </span>
              </div>

              <div className="owner-name">
              {item.AddressList.map((sub) =>
                <Fragment key={sub.City}>
                <div className="label-item">
                  {sub.City}
                </div>
                <div>
                  {sub.StateProvince}
                </div>
                </Fragment>
                )}
              </div>
              <div className="apt-notes">

              </div>
            </div>
          </div>
        ))}


      </div>
    );
  }
}

export default ListSchools;
