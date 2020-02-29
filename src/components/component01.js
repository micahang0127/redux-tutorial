import React, { Component } from 'react';
import * as actions from '../action/action01';
import {connect} from 'react-redux';

class component01 extends Component {

    constructor(props){
        super(props);
        this.state = {
            aa : 0
        }
    }

    click = (e) => {
        const bb = 2;
    //     this.setState({
    //         aa : bb,     // aa +1 같은 연산자 쓰면 에러남
    //    });
        this.setState(prevState => ({    // 클릭 시 +1식 표시가 늘어난다!!
            aa : prevState.aa +1
        }));
    }


    render() {
        return (
            <div>
                <span>{this.state.aa}</span>
                <input type="button" onClick={this.click}/>
                <span>{this.props.numberData}</span>
                <input type="button" onClick={this.props.reduxClick}/> 
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    numberData : state.number
});

const mapDispatchToProps = (dispatch) => ({
    reduxClick : () => {               //  위에서 반영시, this.props.reduxClick으로 사용해야한다. 
        const num = 3;  // 임시
        dispatch(actions.button(num))
    }
});

component01 = connect(
    mapStateToProps, mapDispatchToProps
)(component01);


export default component01;