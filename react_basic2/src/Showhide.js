import React, { Component } from 'react';

class ShowHide extends Component {
    state = {
        button: "사라져라",
        display: { display: "flex" },
    }

    ShowHide = () => {
        this.setState(prevState => ({
            button: prevState.display.display === "flex" ? "보여라" : "사라져라",
            display: { display: prevState.display.display === "flex" ? "none" : "flex" }
        }));
    }

    render() {
        return (
            <>
                <h1 style={this.state.display}>안녕하세요</h1>
                <button onClick={this.ShowHide}>{this.state.button}</button>
            </>
        );
    }
}

export default ShowHide;
