import React, { Component } from 'react'

class Circles extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      this.type = "circle"
      this.radius = radius
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h3>Circles</h3>
      </div>
    )
  }
}

export default Circles

//
// function circleObject(radius) {
//     //set local type property
//     this.type = "circle";
//     this.radius = radius;
//     //has a ‘getArea’ method that returns the area of the circle
//     this.getArea = function() {
//       return Math.PI * this.radius * this.radius;
//     };//end getArea method
//     //has a 'toString' method that returns the following: Circle: Radius = X, Area = Y, (where X and Y are the radius and the area of the circle)
//     this.toString = function() {
//       return "Circle: Radius = " + this.radius + ", Area = " + vm.getArea();
//     };//end toString method
//     // console.log(this);//logs out instance of circle object with varying radius and getArea()/toString() methods
//   }
