import React from 'react'
import NavLink from './NavLink'

export default class ListElement extends React.Component {
  render() {
    const divStyle = {
        backgroundImage: 'url(' + this.props.listElement.image + ')'
    }

    return (
      <div className="col-sm-6 col-md-4 listElement">
        <NavLink to={"/Tours/" + this.props.listElement.id}>
          <div>
            <div className="listImage center-cropped" style={divStyle}>
            </div>
          </div>
          <div className="bottomRow text-center">
            <div className="priceAndTitle">
              <span className="price">
                {'$' + this.props.listElement.price}
              </span>
              <span className="title">
                {this.props.listElement.title}
              </span>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}
