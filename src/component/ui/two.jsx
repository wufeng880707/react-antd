import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { renderData } from '../common/mixin';

/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props) {
    	super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (	
		<div>
			组件二
		</div>
		);
	}
}

Main.contextTypes = {
};

export default renderData({
	id: 'twoui', // 应用关联使用的redex
	component: Main, // 接收数据的组件入口
	url: ''
});