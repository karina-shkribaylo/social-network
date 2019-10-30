import React from 'react';
import ProfilePage from "./ProfilePage";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux-components/ProfilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
      
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1714 ;
        }
        this.props.getUserProfile(userId);
    }


    render() {
        return (
            <ProfilePage {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);




