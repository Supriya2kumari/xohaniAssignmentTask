import React from 'react'

function BasicInformation() {
  return (
    <div>
        <h3>Basic information</h3>
        <label required>Title*</label>
        <input type="text" placeholder='Enter' required/>
        <label required>Description*(Write a short introduction)</label>
        <textarea placeholder='Enter' required/>
        <label required>Description</label>
        <textarea placeholder='Enter' />
        <div>
            <label name="" id="">
                <input type="date" value="" />
            </label>
            <label>Pricing*</label>
            <input placeholder='Enter price'/>
        </div>
    </div>
  )
}

export default BasicInformation