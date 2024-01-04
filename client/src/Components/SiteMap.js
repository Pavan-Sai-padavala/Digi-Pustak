import React from 'react'

const SiteMap = () => {
  return (
    <>
      <div style={{margin:'0 0 0 5%',fontStyle:'italic',fontWeight:'bolder',fontSize:'2rem'}}>Made with love &#128150;</div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignContent:'center',backgroundColor: 'lightgray'}}>
        <div className='siteMapItems' style={{display:'flex',flexDirection:'column'}}>
            <h5 style={{fontStyle:'oblique'}}>What's new</h5>
            <h6>Microsoft 365</h6>  
            <h6>Games</h6>  
            <h6>Surface pro 9</h6>  
            <h6>Surface Laptop 5</h6>    
            <h6>Windows 11 apps</h6>  
        </div>
        <div className='siteMapItems' style={{display:'flex',flexDirection:'column'}}>
            <h5 style={{fontStyle:'oblique'}}>Microsoft Store</h5>
            <h6>Account profile</h6>  
            <h6>Download Center</h6>  
            <h6>Microsoft Store Support</h6>  
            <h6>Returns</h6>    
            <h6>Order tracking</h6>  
        </div>
        <div className='siteMapItems' style={{display:'flex',flexDirection:'column'}}>
            <h5 style={{fontStyle:'oblique'}}>Company</h5>
            <h6>Careers</h6>  
            <h6>About Microsoft</h6>  
            <h6>Company news</h6>  
            <h6>Privacy at Microsoft</h6>    
            <h6>Investors</h6>  
        </div>
      </div>
    </>
  )
}

export default SiteMap