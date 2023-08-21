import React from 'react'
import Title from './Title'
import services from '../data.js'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
     
      <Title title='Our' subtitle='services' />
      </div>
      <div className="section-center services-center">

        {services.map(()=>{
          const {id, icon, title, text} = services;

          return (
            <article className="service">
            <span className="service-icon"><i className={services.icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{services.title}</h4>
              <p className="service-text">
                {services.text}
              </p>
            </div>
          </article>
          )
        })}
    

      
      </div>
    </section>
  )
}
