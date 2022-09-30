import { Component } from "react";
import Notification from "components/noFeedback/Notification";
import PropTypes from 'prop-types';


export default class Statistics extends Component{
    render(){
    const{good,neutral,bad,total,positivePercentage}=this.props
       return(<>
       {total===0 ? (
       <Notification  message="There is no feedback"/>):(<ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{Math.round(positivePercentage)}%</li>
       </ul>)}
       </>     
       )   
    }
}

Statistics.propTypes = {
    good:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
    total:PropTypes.number,
    positivePercentage:PropTypes.number
}