import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchCourseById } from '~/lib/services'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const CheckOutScreen:React.FC = () => {
    const [courseData, setCourseData] = useState<undefined | Object>(undefined)
      const { checkoutId } = useParams();
    useEffect(() => {
      const data = fetchCourseById(checkoutId as string)
    setCourseData(data)
    }, [])

    useEffect(() => {
    console.log(courseData)
    }, [courseData])   
const notify = () => toast("Congratulations...");
    
  return (
    <div className='text-center'>
        <div>
            <h1 className='text-3xl'>{courseData && courseData.id}</h1>
        <img width={830} height={580} className=" rounded-lg mx-auto mt-3 mb-5" src={courseData && courseData.image} />
        <button onClick={notify} className='btn mb-3 ml-2'>Confirm</button>
        <ToastContainer/>
        </div>
    </div>
  )
}

export default CheckOutScreen;