import React from 'react'
const FeatureCard1 = (props) => {
  return (
    <div style={{display:"flex",justifyContent:'space-between',height:"40vh", margin:'5%',backgroundColor:'cornsilk'}}>
        <div style={{width:"50vw", height:'80%', order:1}}>
            <h4>{props.title}</h4>
            <p>{props.info}</p>
        </div>
        <img style={{marging:"10px"}}src={props.path} height='100%' width={'30%'} alt="1" />
    </div>
  )
}

export default FeatureCard1