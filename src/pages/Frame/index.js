import React, { Component } from 'react'

export default class Frame extends Component {
    render() {
        return (
            <iframe src={this.props.frameUrl} 
            style={{width:'100%',height:'100%'}}
            scrolling={false}
            ></iframe>            
        )
    }
}
