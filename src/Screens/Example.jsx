import React from 'react'
import moment from 'moment';

export default function  ExampleExcersise() {

 let date = moment([1970, 0, 25]).fromNow(); 


  return (
    <div>
        <h1>{date}</h1>
    </div>
  )
}
