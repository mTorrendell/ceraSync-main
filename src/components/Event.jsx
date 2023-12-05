import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
import "./styles/Event.css";
import { useNavigate, useParams } from "react-router-dom";

function Event() {
  // const token = useSelector((state) => state.cera.userData.token);
  // const params = useParams();

  // const [event, setEvent] = useState(null);

  // useEffect(() => {
  //   async function getEvent() {
  //     try {
  //       const response = await axios({
  //         method: "GET",
  //         url: `${process.env.REACT_APP_API_URL}/event/${params.slug}`,
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       if (response.data !== "The Event does not exist") {
  //         setEvent(response.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getEvent();
  // }, []);
  return (
    <>
      <div className="initial-container-info ">
        <div className="center row submit-container">
          <h1 className="title ">SUBMIT YOUR EVENT</h1>
          <input className=" m-2" placeholder="Title"></input>
          <input className=" m-2" placeholder="Location"></input>
          <input className="col-12 m-2" placeholder="Date"></input>
          <input className="col-12 m-2" placeholder="Host"></input>
          <textarea
            className="col-12 m-2"
            placeholder="Short Overview"
          ></textarea>
          <textarea className="col-12 m-2" placeholder="Description"></textarea>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
