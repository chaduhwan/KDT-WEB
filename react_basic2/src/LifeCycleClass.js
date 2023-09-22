import{Component} from 'react'

class MyComponent extends Component {

    //생성 될뗴
    componentDidMount(){
        console.log('Mount')
    }

    //업데이트 될때
    componentDidUpdate(){
        console.log('Update')
    }

    //제거 될때
    componentWillUnmount(){
        console.log('UnMount')
    }

    render() {
        return(
            <>
                <div>MyComponent{this.props.number}</div>
            </>
        )
    }
}


class LifeCycleClass extends Component{
    state = {
        number : 0,
        visible : true
    };

    changeNumderState = () => {
        this.setState({number: this.state.number + 1 })
    }

    changeVisibleState = () => {
        this.setState({visible: !this.state.visible})
    }

    render() {
        return <>

            <button onClick={this.changeNumderState}>PLUS</button>
            <button onClick={this.changeVisibleState}>On/Off</button>
            {this.state.visible && <MyComponent number={this.state.number}/>}
        </>
    }
}

export default LifeCycleClass;