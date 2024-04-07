import React, { useEffect,useState } from 'react'
import axios from 'axios'
const FormData = () => {
    const [formData , setFormData] = useState([]);
    const [getApiKey ,setGetApiKey] = useState(true);
    useEffect(() => {
        if(getApiKey){
        axios.get('http://localhost:4000/apointments',
    {
        headers : {
            'Content-Type' : 'application/json'
        }

    })
        .then((response) => {
            const {data} = response;
            const [appointmentData , metData] = data;
            console.log(appointmentData)
            setFormData(appointmentData);
            setGetApiKey(false);
        })
        .catch(err => {
            console.log(err);
            setGetApiKey(false);
        })
    }
    },[getApiKey]);
  return (
    <div>
      This is Form Data
      <ul>
        {formData.map(item => {
            return <li key = {item.id}>{item.userName} {item.emailId} {item.password}
            <button type = 'button' onClick = {() => {
                axios.delete(`http://localhost:4000/delete/${item.id}`)
                .then(res => {
                    console.log(res, 'resp');
                    setGetApiKey(true);
                })
                .catch(err => {
                    console.log(err);
                })
            }}>Delete</button>
            </li>
        })}
      </ul>
    </div>
  )
}

export default FormData
