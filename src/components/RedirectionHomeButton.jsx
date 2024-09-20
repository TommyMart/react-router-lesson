
import React from "react";
import { Navigate } from "react-router-dom";

export class RedirectHomeButton extends React.Component {
    constructor(props) {
        super(props); // Calling the parent class constructor

        // Initializing the state with a 'shouldRedirect' property
        this.state = {
            shouldRedirect: false // Initially, no redirect will happen
        }
    }

    // Function to change 'shouldRedirect' to true when the button is clicked
    changeRedirectStatus = () => {
        // setState automatically rerenders the page
        // Use setState to correctly change the value of state
        this.setState({shouldRedirect: true}) // Updates state to trigger the redirect
    }

    render() {
        return (
            <div>
                {/* Button to trigger the state change for redirection */}
                <button onClick={this.changeRedirectStatus}>
                    Return Home
                </button>
                
                {/* Conditionally rendering the Navigate component when shouldRedirect is true */}
                {this.state.shouldRedirect && <Navigate to="/" />} 
                {/* <---- If shouldRedirect is true, the app redirects to "/" (home) */}
            </div>
        )
    }
}