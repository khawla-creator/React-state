import React, { Component } from 'react'
import IMG from '../assets/Image1.png'
import './Counter.css'


export default class Counter extends Component {
                    constructor(props){
                    super(props);
                    this.state={
                    fullName: "Khawla Guesmi",
                    bio: [ 
                    " Methods agent for 6 months",
                    " 1 year of work-study internship in an orthopedic company ",
                    "Internships at CNCC during 4 months "
                    ],
                    imgsrc : IMG,
                    profession :'Future Devlopper',
                    date: new Date()
                    }
                    }
                    componentDidMount() {
                        this.timerID = setInterval(
                          () => this.tick(),
                          1000
                        );
                      }
                                        
                    tick() {
                        this.setState({
                        date: new Date()
                        });
                    }

                  render() {
                    return (
                                        <div className="counterProfile">
                                        <img alt= 'mine' src={this.state.imgsrc}/>
                                        <h1> {this.state.fullName} </h1>
                                        <div className='listBio'> { 
                                        this.state.bio.map((el,i)=>  <li key ={i}>{el}</li>
                                        )}
                                        </div>
                                        <h1> {this.state.profession} </h1>
                                        <h2> Time: {this.state.date.toLocaleTimeString()}</h2>
                                        </div>
                    )
}
}
