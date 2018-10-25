import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, increment_async, get_users } from '../actions';

class App extends Component {
    render() {
        let { counter, user } = this.props;

        let usersComponent = null;
        if (user) {
            if (user.isLoading) {
                usersComponent = <h2>is loading...</h2>
            } else if (!user.users.length) {
                usersComponent = <h2>no users...</h2>;
            } else {
                usersComponent = user.users.map(item => <h2 key={item.id}>{item.name}</h2>)
            }
        }

        return (
            <div style={{ textAlign: 'center' }}>
                <h1>{counter}</h1>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>decrement</button>
                <br />
                <button onClick={this.props.increment_async}>increment_async</button>
                <br />
                <button onClick={this.props.get_users}>get_users</button>
                {usersComponent}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        user: state.user
    };
};

export default connect(
    mapStateToProps,
    { increment, decrement, increment_async, get_users }
)(App);
