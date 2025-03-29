import React from 'react'
import { ChevronLeft } from 'lucide-react';
import BasicInformation from '../Components/BasicInformation';


function CreateWebinar() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <ChevronLeft /> Create webinar
        <BasicInformation/>
    </div>
  )
}

export default CreateWebinar