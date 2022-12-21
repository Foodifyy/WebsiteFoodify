import React from 'react'

function Footer() {
  return (
<footer className="text-center text-lg-start  text-muted bg-slate-800">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block text-white">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="https://www.linkedin.com/company/foodifyy/" className="me-4 text-reset text-white">
        <i className="fab fa-linkedin text-white"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-white">
            Foodifyy
          </h6>
          <p className='text-yellow-50'>
          Foodifyy is a machine learning-based health tech startup. At Foodifyy we aim to provide you with a new experience to know more about what you are eating.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4 text-gray-100">
            JUMP TO
          </h6>
            <p>
            <a href="#home" className={`text-base font-semibold text-gray-300`}>HOME</a>
            </p>
            <p >
            <a href="#service" className={`text-base font-semibold text-gray-300`}>SERVICES</a>
            </p>
            <p >
            <a href="#about" className={`text-base font-semibold text-gray-300`}>ABOUT US</a>
            </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4 text-gray-100" >Contact</h6>
          <p className='text-gray-300'><i className="fas fa-home me-3"></i> New Delhi, Delhi</p>
          <p className='text-gray-300'>
            <i className="fas fa-envelope me-3"></i>
            Fooddifyy@gmail.com
          </p>
        </div>
      </div>
    </div>
  </section>
</footer>
  )
}

export default Footer