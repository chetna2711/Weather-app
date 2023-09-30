import React, { useEffect, useState } from "react";

const Tempapp = () => {

  const [city, setCity] = useState(null);

  const [search, setSearch] = useState("Pune");


  useEffect(() => {

    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a71995f9e7435218345d656f0e101cab`;
      const response = await fetch(url);

      const resJson = await response.json();

      setCity(resJson.main);
    };
    fetchApi();
  }, [search])


  const changeCity = (event) => {
    setSearch(event.target.value);
  }


  let DateTime = new Date();

  let currDate = DateTime.toLocaleDateString();
  let currTime = DateTime.toLocaleTimeString();



  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={changeCity}
          />
        </div>


        {
          !city ? (
            <p className="errorMsg">No Data Found</p>
          )
            :
            (
              <>
                <div className="info">
                  <h2 className="location"> <i className="ri-map-pin-line"></i>{search}</h2>
                  <h1 className="temp"><i class="ri-temp-cold-fill"></i> {city.temp} °Cel</h1>
                  <h3 className="tempmin-max">Min: {city.temp_min} °Cel  | Max: {city.temp_max} °Cel</h3>

                  <div className="date">
                  <h4>Date : {currDate}</h4>
                </div>

                <div className="time">
                  <h4>Time : {currTime}</h4>
                </div>

                </div>

                <div className="wave-one"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>

               
              </>
            )
        }




      </div>



    </>
  )
}

export default Tempapp;