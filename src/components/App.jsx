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
  countTotalFeedback=()=>{
    const total = this.state.Good + this.state.Neutral + this.state.Bad
    return total
  }
  countPositiveFeedbackPercentage=()=>{
  const positivePercentage = Math.round(this.state.Good / this.countTotalFeedback() * 100)
    return positivePercentage
  }

 buttonClick=(e)=>{
  const {name} = e.target 
  this.setState(state=>({[name]:state[name] + 1}))
 }
  render(){
    const {Good,Neutral,Bad} = this.state
    return (
    <>
    <Section title="Please leave a feedback" children={<FeedbackOptions options={this.state} onLeaveFeedback={this.buttonClick}/>}/>
    <Section title='Statistics'
     children={<Statistics good={Good} neutral={Neutral} bad={Bad} 
     total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>}/>
    </>
  )}
};
