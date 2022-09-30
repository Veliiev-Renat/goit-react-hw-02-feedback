import Section from "./section/Section";
import FeedbackOptions from './feedback/FeedbackOptions'
import Statistics from "./statistics/Statistics";
import { Component } from "react";

export class App extends Component{
   state = {
    Good: 0,
    Neutral: 0,
    Bad: 0
  }
  
 buttonClick=(e)=>{
  const {name} = e.target 
  this.setState(state=>({[name]:state[name] + 1}))
 }
 
  render(){
    const {Good,Neutral,Bad} = this.state
    const total = Good+Neutral+Bad
    return (
    <>
    <Section title="Please leave a feedback" children={<FeedbackOptions options={this.state} onLeaveFeedback={this.buttonClick}/>}/>
    <Section title='Statistics'
     children={<Statistics good={Good} neutral={Neutral} bad={Bad} 
     total={total} positivePercentage={Good / total * 100}/>}/>
    </>
  )}
};
