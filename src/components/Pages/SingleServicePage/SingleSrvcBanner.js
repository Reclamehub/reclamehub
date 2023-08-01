import React from 'react'
// import "./SingleSrvcBanner.css"

const SingleSrvcBanner = (props) => {
  return (
    <>
      <div className='singlesrvcBanner_container'>
        <div className='singlesrvc_heading_div'>
          <h1 style={{ fontSize: "3.5vw", fontWeight: "600", }}>{props.title1}</h1>
          <h1 style={{ color: "#ff7722", fontSize: "3.5vw", fontWeight: "550" }}>{props.title2}</h1>
        </div>
        <div className='singlesrvc_descp_div'>
          <p className='singlesrvc_descp'>{props.descp}</p>
        </div>

      </div>
    </>
  )
}

export default SingleSrvcBanner