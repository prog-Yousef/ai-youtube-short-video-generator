"use client"
import React, { use } from 'react'
import Topic from './_components/Topic'
import { useState } from 'react'

function CreateNewVideo() {
  const [formData,setFormData] = useState();

  const onHandleInputChange= (fieldName,fieldValue)=>{
    // handle input change
    setFormData(prev=>({...prev,[fieldName]:fieldValue}));
    console.log(formData);
    
  }
  return (
    <div>
        <h2 className='text-3xl '>Create New Video</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 mt-8'>
            <div className='col-span-2 p-7 border rouned-xl'>
{/* Topic & script */}

<Topic  onHandleInputChange={onHandleInputChange}/>

{/* Video Image Style */}

{/* Voice */}

{/* Captions */}
            </div>
            <div>

            </div>
        </div>


    </div>
  )
}

export default CreateNewVideo