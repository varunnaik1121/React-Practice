import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import WeatherReport from './WeatherReport';
import CapitalPage from './CapitalPage';
import Loading from './Loading';
import ErrorPage from './ErrorPage';


const API=`http://api.weatherstack.com/current?access_key=9f1f6742e511df217473ba1b04870ca0&query=`

const CountryData = () => {

    const [info,setInfo] = useState([])
    const [details,setDetails] = useState([])
    const [loading,setLoading] = useState(true)
    const [display,setDisplay] = useState(false)
    const [error,setError] = useState(false)
    const [value,setValue] = useState(localStorage.getItem("usercountry"))
    

    useEffect(() => {
      //fetching the first data
      const fetchWeatherData = async () => {
        try {
          const response1 = await axios.get(`https://restcountries.com/v3.1/name/${value}`);
          setInfo(response1?.data[0]);
          setLoading(false)
        } catch (e) {
         setError(true)
        }
      };
      fetchWeatherData();
    }, []);

//fetching the second api data

const fetchData = async ()=>{
  const response2 = await axios.get(API+info.capital);
  setDetails(response2?.data);
 
}
  
//showing capital data page
const manageCapital = ()=>{
  setDisplay(true)
}

return <>
            <div className='country-wrapper'>
            {error && <ErrorPage></ErrorPage>}  
                  {
                    loading ? <Loading></Loading>:
                    (display ? 
                      <WeatherReport  details={details}>    
                      </WeatherReport>
                           
                      : <CapitalPage  data={info} manageCapital={manageCapital} fetchData={fetchData}>
                                   
                     </CapitalPage>)
            }
            </div>
</>
}
export default CountryData;
