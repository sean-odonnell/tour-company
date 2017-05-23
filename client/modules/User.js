import React from 'react'
import UserInfo from './UserInfo'
import UserTimeline from './UserTimeline'
import store from '../store'
import { getUser } from '../actions/currentUserPageActions'

export default class User extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    store.dispatch(getUser());
  }

  render() {
    if (!this.props.currentUserPage.lookedForCurrentUserPage) {
        return (<div className="container">
                    <div className="space"></div>
                    <h1>User does not exist</h1>
                </div>);
    }
    // return this.props.currentUserPage.lookedForCurrentUserPage ? (
    //   <div>{this.props.currentUserPage.username}</div>
    //   ) : (<div>User does not exist</div>)

    else if (!this.props.currentUserPage.isGuide) {
      if (this.props.user.username !== this.props.currentUserPage.username) {
        return (
          <div className="container add-padding">
            <div className="user-header">
            <h1>
              {this.props.currentUserPage.username}
            </h1>
            </div>
            <UserInfo currentUserPage={this.props.currentUserPage}/>
            <div className="add-padding">
                <h2>Tours Taken</h2>
                <UserTimeline whichTours='past' auth='public' tours={this.props.currentUserPage.tours}/>
            </div>
          </div>
        );

      } else {
        return (
          <div className="container add-padding">
            <div className="user-header">
            <h1>
              {this.props.currentUserPage.username}
            </h1>
            </div>

            <div className="add-padding">
            <h2>Upcoming Tours</h2>
            <UserTimeline whichTours='upcoming' auth='private' tours={this.props.currentUserPage.tours}/>
            <h2>Tours Taken</h2>
            <UserTimeline whichTours='past' auth='private' tours={this.props.currentUserPage.tours}/>
            </div>
          </div>
        );
      } 
    } else if (this.props.currentUserPage.isGuide) {
        if (this.props.user.username !== this.props.currentUserPage.username) {
          // render "all" different tours, not all iterations
          return (
            <div className="container add-padding">
              <div className="user-header">
              <h1>
                Guide:  {this.props.currentUserPage.username}
              </h1>
              </div>
                <div className="add-padding">
                  <UserInfo currentUserPage={this.props.currentUserPage}/>
                  <hr></hr>   
                  <h4>Rating</h4>
                  <UserTimeline whichTours='all' auth='public' tours={this.props.currentUserPage.tours}/>
                </div>
                <hr></hr>   
                <div className="add-padding">
                  <h4>Recent Reviews</h4>
                  <span>Maybe get the latest review from each tour</span>
                </div>
            </div>
          );

        } else {
          // <UserTimeline whichTours='upcoming' auth='private' tours={this.props.currentUserPage.tours}/>
          return (
            <div className="container add-padding">
              <div className="user-header">
              <h1>
                Guide:  {this.props.currentUserPage.username}
              </h1>
              </div>
              <button>
              New Tour
              </button>
            
            <div className="add-padding">
              <h2>Upcoming Tours</h2>
              <span>Modifiable list of upcoming tours</span>
            </div>
            </div>
          );
      }
    }
  }
}