import React from 'react'
import NavBar from '../Components/NavBar'
import SiteMap from '../Components/SiteMap'
import FeatureCard from '../Components/FeatureCard'
import FeatureCard1 from '../Components/FeatureCard1'
import pic2 from '../Assests/2.png'
import pic1 from '../Assests/1.png'
import pic3 from "../Assests/3.png"
const Landing = () => {
  return (
   <>
        <NavBar />
        <FeatureCard title="Your world, organized" path={pic1} info="Get organized in notebooks you can divide into sections and pages. 
               With easy navigation and search, you’ll always find your notes right
               where you left them"/>
        <FeatureCard1 title="Gather your thoughts, then make them even better" path={pic2} info="Revise your notes with type, highlighting, or ink annotations. With OneNote 
                across all your devices, you’ll never miss a flash of inspiration."/>
        <FeatureCard title="Share and collaborate" path={pic3} info="Great minds don’t always think alike, but they can share ideas 
                and create together in OneNote."/>
        <SiteMap />
   </>
  )
}

export default Landing