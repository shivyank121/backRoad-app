import React from 'react'
import Title from './Title'
import {services} from '../data.js'
import Service from './Service'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
     
      <Title title='Our' subtitle='services' />
      </div>
      <div className="section-center services-center">

        {services.map((service)=>{
         
          return (
           <Service key={service.id} {...service} />
          )
        })}
    

      
      </div>
    </section>
  )
}
