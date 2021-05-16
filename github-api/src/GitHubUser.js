import React, { Component } from 'react';
import { withRouter } from "react-router";

class GithubUser extends Component {
    state = {
        isLoading: true,
        githubUser: null,
        error: false
    }

    // componentDidMount() {

    //     console.log("from user search", this.props);
    //     const username = this.props.match.params.username;
    //     console.log("username", username);
    //     fetch(`https://api.github.com/users/${username}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({
    //                 isLoading: false,
    //                 githubUser: data
    //             })
    //         })
    //         .catch(()=> {
    //             this.setState({
    //                 isLoading:false,
    //                 error: true
    //             })
    //         })
    // }

    componentDidMount() {
        this.userSearch();

    }

componentDidUpdate(prevProps){
    const oldUserName =  prevProps.match.params.username;
    const incomingUserName = this.props.match.params.username;
    console.log(oldUserName, incomingUserName);
    if(oldUserName !== incomingUserName){
        this.userSearch();
    }
}

    userSearch = () => {

        console.log("from user search", this.props);
        const username = this.props.match.params.username;
        console.log("username", username);
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    isLoading: false,
                    githubUser: data
                })
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    error: true
                })
            })
    }


    render() {

        const { isLoading, githubUser, error } = this.state;
        let content;

        if (githubUser) {
            content = (
                <div>
                    <h2>{githubUser.name}</h2>
                    <img
                        style={{ width: '100px' }}
                        src={githubUser.avatar_url}
                        alt={`${githubUser.name}'s avatar`}
                    />

                </div>
            )
        }
        return (
            <div>

                <h1>GitHub User</h1>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error...Please refresh and try again</p>}
                {content}
            </div>
        )

    }

}

export default withRouter(GithubUser);