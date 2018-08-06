// Code CoordinatesButton Component Here
import React, { Component} from 'react'


export default class CoordinatesButton extends Component {
    eventHandler(e){
       const values = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(values)
    }

    render(){
        return (
            <button onClick={(event)=> this.eventHandler(event)}/>
        )
    }

}