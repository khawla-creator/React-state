import React, { Component } from 'react'
import IMG from '../assets/Image1.png'
import './Counter.css'


export default class Counter extends Component {
                    constructor(props){
                    super(props);
                    this.state={
                    count:0,
                    fullName: "Khawla Guesmi",
                    bio: [ 
                    " Methods agent for 6 months",
                    " 1 year of work-study internship in an orthopedic company ",
                    "Internships at CNCC during 4 months "
                    ],
                    imgsrc : IMG,
                    profession :'Future Devlopper',
                    }
                    }
                    componentDidMount(){
                        this.time = setInterval(() => this.tick(),10000)
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
                                        </div>
                    )
}
}
