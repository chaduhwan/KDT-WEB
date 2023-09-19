import { Component } from 'react';

const props = {
    color : "red"
}

class Favorite extends Component {
    render() {
        return(
            <>
                    <h1>제일 좋아하는 음식은 <span style={props}>{this.props.food}</span></h1>
            </>
        )
    }
}
Favorite.defaultProps = {
    food : "무엇일까요?"
}

export default Favorite