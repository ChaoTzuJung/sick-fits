import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

import styled from 'styled-components';

const MyButton = styled.button`
    background: red;
    span {
        border: 1px solid #fff;
    }
    .poop {
        font: 100px;
    }
    font-size:  ${props => (props.huge ? '100px' : '')};
`
export default class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                <MyButton>
                    Click me
                    <span className="poop">💩</span>
                </MyButton>
                <MyButton huge>
                    Click me
                </MyButton>
                {this.props.children}
            </div>
        )
    }
}
