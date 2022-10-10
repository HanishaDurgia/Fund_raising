import React from 'react'

export default function Dummyt() {
  return (
    <div style={{width:'100%'}}>
      <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" marginBottom="550px"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div className="carousel-inner">
    <div  style={{height:'700px'}} className="carousel-item active">
      <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" className="d-block w-100 h-50" alt="..." />
    </div>
    <div style={{height:'700px'}} className="carousel-item">
      <img src="https://media.istockphoto.com/photos/image-of-open-antique-book-on-wooden-table-with-glitter-overlay-picture-id1354441996?b=1&k=20&m=1354441996&s=170667a&w=0&h=O4JDagXhIh1N13PNN6G4_L5KB5QPZryin7FOrZnzYvc=" className="d-block w-100 h-50" alt="..."/>
    </div>
    <div style={{height:'700px'}} className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="d-block w-100 h-50" alt="..."/>
    </div>
  </div>
  <button style={{marginBottom:'350px'}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button style={{marginBottom:'350px'}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
  )
}
