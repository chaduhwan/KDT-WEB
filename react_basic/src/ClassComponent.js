import {Component} from 'react'; // 1번 방법
// import React from 'react'; // 2번방법

import PropTypes from 'prop-types';

// Class형 컴포넌트
// class 컴포넌트 entends Component() 
// class ClassComponent extends React.Component {} // 2번 방법

class ClassComponent extends Component { // 1번 방법

    // 클래스형 컴포넌트에서는 render 함수는 필수
    render() {

        const name = "차두환"
        const {age} = this.props
        
        return(
            <>
                <h1>hello {name}</h1>
                <h2>안녕하세요 {this.props.name} 나이는 {age}</h2>
                <p>여기는 클래스형 컴포넌트!</p>

    
            </>
        )
    }
}
ClassComponent.defaultProps = {
    name : "홍길동",
    age : 13
}

ClassComponent.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
}
export default ClassComponent 