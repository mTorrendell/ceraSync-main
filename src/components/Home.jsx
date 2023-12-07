import React, { useState } from "react";
import Modal from "./menu/Modal";
import LoginModal from "./auth/modalAuth";
import Subscription from "./Subscription";
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
        <h2 className="center home-des ">
          Discover ceramic events, workshops and serene artistry
        </h2>
        <hr className="line" />
        <Modal />
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
            <h5 className="bold col-3 innerEvent">Where</h5>
            <h5 className="col-9 ">Lohmühlenstraße 65, 12435 Berlin</h5>
          </div>
          <div className="row d-flex innerEvent">
            <h5 className="bold col-3 innerEvent">When</h5>
            <h5 className="col-9 d-flex flex-wrap ">
              Friday, December 15, 11AM - 16PM
            </h5>
          </div>
          <div className="button">Check it out</div>
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
            <h2>Lets get together and enjoy pottery</h2>
          </div>

          <hr className="lineEvent p-2" />
          <div className="row">
            <h1>Pottery and Wine</h1>
          </div>
          <hr className="lineEvent p-2" />

          <div className="row d-flex innerEvent">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              Where
            </h5>
            <h5 className="col-9 d-flex align-items-start">
              Lohmühlenstraße 65, 12435 Berlin
            </h5>
          </div>

          <div className="row d-flex innerEvent">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              When
            </h5>
            <h5 className="col-9 d-flex align-items-start">
              Friday, December 15, 2023, 7 PM
            </h5>
          </div>

          <div className="button">Check it out</div>
        </div>

        <hr className="m-4 sendBack" />
        <Subscription />
      </div>
    </>
  );
}

export default Home;
