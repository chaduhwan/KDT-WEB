import { Component } from "react";

class Message extends Component {

    ShowMessage =() => {
        alert(this.props.message)
    }
    render(){
        return(
            <>
                <button onClick={this.ShowMessage}>ShowMessage</button>
            </>
        )
    }
}

export default Message