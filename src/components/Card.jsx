import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
  return (
      <div className="card">
       <div>
        <div className="top">
          <img src="https://tse1.mm.bing.net/th/id/OIP.mfjIDgZfzL5i-BViz7SCnwHaD4?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <button>Save <Bookmark  size/> </button>
        </div>
        <div className="center">
          <h3>Amozon <span>4 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
               <h4>Part Time</h4>
                <h4>Senior Level</h4>
          </div>
        </div></div> 
        <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Kathmandu, Nepal</p>
            </div>
            <button>Apply now</button>
          </div>
        </div>
  )
}

export default Card
