import React from 'react'

const Gallery = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map((image) =>
          <div key={image.id}>
            <div className="hover-overlay-container">
              <img className="overlay-image" src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} />
              <div className="overlay-btn-container">
                <a href="#" className="overlay-btn" click="#"   >Details</a>
              </div>
            </div>
          </div>
        )}  
      </div>
    </div >   
  )
}

export default Gallery
