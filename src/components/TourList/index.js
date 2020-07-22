import React, { Component } from 'react'
import './tourlist.scss'
import Tour from '../Tour/Tour'
import {tourData} from '../tourData'

export default class TourList extends Component {
    state ={

        tours:tourData
    }
    removeTour = id => {
        const{tours} = this.state
        const newTours = tours.filter(tour => tour.id!== id)
        this.setState({
            tours: newTours
        })
    }
    render() {
        const {tours} = this.state
        return (
            <section className="tourlist">
                {tours.map((tour,index) => {
                    return (
                        <Tour key={index} tour={tour} removeTour={this.removeTour}/>
                    )
                })}
            </section>
        )
    }
}
