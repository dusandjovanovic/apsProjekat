import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index';
import ListElement from '../../components/list-element/listElement';

export class Social extends Component {
    componentDidMount() {
        this.props.onGetUserData(this.props.username);
        // napravi nalozi Debug i Sender
        // uloguj se kao Debug prvo
        // predji na User Management tab
        this.props.onAddFriend("Sender", "Debug");
        this.props.onGetFriendRequests("Debug");
        // console: requestsData
    };

    render() {
        let friends = null;
        if (this.props.friends) {
            friends = (
                this.props.friends.map((friend => (
                    <ListElement
                        username={friend}
                        key={friend}
                        picture={null}
                        bio={"Lorem ipsum dolor sit amet, eu mel congue dolores definiebas. Te cum enim iusto ponderum, eos et enim saepe quaeque."}
                    />
                )))
            );
        }
        return (friends);
    };
}

const mapStateToProps = state => {
    return {
        username: state.user.username,
        friends: state.user.friends
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUserData: (username) => dispatch(actions.userData(username)),
        onGetFriendRequests: (username) => dispatch(actions.friendRequests(username)),
        onAddFriend: (sender, receiver) => dispatch(actions.friendAdd(sender, receiver)),
        onConfirmFriend: (requestId) => dispatch(actions.friendConfirm(requestId)),
        onDeleteFriend: (requestId) => dispatch(actions.friendDelete(requestId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Social);