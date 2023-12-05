import React, { useState } from "react";
import Modal from "./menu/Modal";
import "./styles/Home.css";
// import axios from "axios";
// import { useSelector } from "react-redux";

function Home() {
  //REDUX
  // const token = useSelector((state) => state.cera.userData.token);
  // const navigate = useNavigate();

  // const [events, setEvents] = useState(null);
  // const handle = {
  //   createEvent: async (target) => {
  //     const formData = new FormData(target);
  //     try {
  //       const response = await axios({
  //         method: "post",
  //         url: `${process.env.REACT_APP_API_URL}/events`,
  //         data: formData,
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       // if (response.data === 409) {
  //       //   setCorrectlyCreated("Not correctly added");
  //       // } else if (response.status === 200) {
  //       //   setCorrectlyCreated("Correctly added");
  //       // }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   },
  //   getEvents: async () => {
  //     const response = await axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URL}/events`,
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setEvents(response.data);
  //   },
  // };
  
  return (
    <>
      <div className="initial-container-info-home">
        <h4 className="center mb-5">CERAMIC EVENT PLATFORM </h4>
        <hr className="line" />
        <h2 className="center mt-5 mb-5">
          Discover ceramic events, workshops and serene artistry
        </h2>
      <hr className="line" />

        <Modal/>

      </div>

      <div className="row ">

        <div className="col-md-6 event text-start themeColor">

          <div className="row innerEvent">
            <h2>Have you ever questioned what to do with burned ceramics?</h2>
          </div>

          <hr className="lineEvent p-2" />
          <div className="row">
            <h1>Educational Event on how to recycle ceramics</h1>
          </div>
          <hr className="lineEvent p-2" />

          <div className="row d-flex innerEvent">
            <h6 className="col-med-5 innerEvent">
                Where
            </h6>
            <h6 className="col-med-5 ">
                This is the location
            </h6>
          </div>

          <div className="row d-flex innerEvent">
            <h6 className="col-med-5 innerEvent">
                When
            </h6>
            <h6 className="col-med-5 d-flex flex-wrap ">
                This is the date
            </h6>
          </div>

          <button>Check it out</button>

        </div>

        <div className="col-md-6">
          <img src={require("./img/ceramic event.jpeg")} />
        </div>

      </div>

      <div className="row ">

        <div className="col-md-6">
          <img className="ceramicPhoto" src={require("./img/ceramic.jpeg")} />
        </div>

        <div className="col-md-6 event text-end themeColor">

          <div className="row innerEvent">
            <h2>Have you ever questioned what to do with burned ceramics?</h2>
          </div>

          <hr className="lineEvent p-2" />
          <div className="row">
            <h1>Educational Event on how to recycle ceramics</h1>
          </div>
          <hr className="lineEvent p-2" />

          <div className="row d-flex innerEvent">
            <h6 className="col-med-5 innerEvent">
                Where
            </h6>
            <h6 className="col-med-5 ">
                This is the location
            </h6>
          </div>

          <div className="row d-flex innerEvent">
            <h6 className="col-med-5 innerEvent">
                When
            </h6>
            <h6 className="col-med-5 d-flex flex-wrap ">
              This is the location
            </h6>
          </div>

          <button>Check it out</button>

        </div>

        <hr className="m-4" />
        <div className="row outerContainer subscribe center">

          <h2 className="col-12">
            Want to be updated about new events? Subscribe for our newsletter!
          </h2>

          <input
            className="m-4 col-12"
            placeholder="Enter your email..."
          ></input>

          <button className="col-12 m-5">Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default Home;
