import React from 'react'
import Tour from './Tour'
const Tours = ({tours,removeTour}) => {
  return (
    <section className='content'>
      <div>
        <h3>Ours tours</h3>
      </div>
      <div>
        {
          tours.map((tour)=>{
            return <Tour key={tour.id} {...tour}  removeTour={removeTour}>
              {tour.info}
            </Tour>
          })
        }
      </div>
    </section>
  )
} 

export default Tours 