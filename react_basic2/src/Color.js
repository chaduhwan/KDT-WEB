import {Component }from 'react'

class Color extends Component {
    state = {
        font : "black",
        color : {color : "black"},
    }

    ChangeRed= () =>{
        this.setState({font : "Red", color :{color : "red"}})
    }
    ChangeBlue= () =>{
        this.setState({font : "Blue", color :{color : "blue"}})
    }


    render() {
        return <>
            <h1 style={this.state.color}>{this.state.font}</h1>
            <button onClick={this.ChangeRed}>빨간색</button>
            <button onClick={this.ChangeBlue}>파란색</button>
        </>
    }
}

export default Color