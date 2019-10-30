import React from 'react';
import HeaderComponent from "./HeaderComponent";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux-components/AuthenticationReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.getAuthUserData();
    }

    render() {
        return <HeaderComponent {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);