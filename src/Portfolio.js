import React, { Component, useState, useEffect } from "react";
import data from "./port/data.json";
export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "thai",
    };
  }

  render() {
    const PortNav = (props) => {
      const lang = props.lang; // สร้าง constant ไว้เก็บค่า props.lang ที่ส่งเข้ามา
      const name = data.name[lang]; // ใช้ props.lang ในการเข้าถึง property ของ data.name
      return <>{name}</>;
    };

    const Portname = (props) => {
      const lang = props.lang;
      // const introduction = "123456789";
      const introduction = data.introduction[lang];
      const [displayText, setDisplayText] = useState("");

      useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
          setDisplayText((prevText) => prevText + introduction.charAt(i));
          i++;
          console.log(displayText);
          if (i === introduction.length) {
            clearInterval(timer);
          }
        }, 50);
        return () => clearInterval(timer);
      }, [introduction]);

      return (
        <div className="d-flex justify-content-center">
          <div
            className="alert alert-primary w-50 p-5 text-center "
            role="alert"
          >
            <strong>{displayText}</strong>
          </div>
        </div>
      );
    };
    const Portcontect = (props) => {
      return <>3</>;
    };
    const Cardset = (props) => {
      const card = data.card;
      const Allcard = ({ data }) => {
        return (
          <div className="card text-start col-auto m-3">
            <a href={data.href}>
              <img className="card-img-top" src={data.img} alt="Title" />
            </a>
            <div className="card-body">
              <h4 className="card-title">{data.name}</h4>
            </div>
          </div>
        );
      };
      return (
        <div className="row justify-content-center">
          {card.map((value, index) => {
            return <Allcard data={card[index]}></Allcard>;
          })}
        </div>
      );
    };
    const ImgProfile = (props) => {
      return (
        <div className="d-flex justify-content-center">
          <a href="#" class="button">
            <img
              src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/ouobx6tvyduidzio7wr7.jpg"
              class="img-fluid rounded-circle img-profile"
              alt=""
            />
          </a>
        </div>
      );
    };
    return (
      <div>
        <nav class="nav justify-content-center  ">
          <a class="nav-link" href="#" aria-current="page">About Me</a>
          <a class="nav-link" href="#">Portfolio</a>
          <a class="nav-link" href="#">Contact</a>
        </nav>
        <a
          className="btn btn-primary"
          onClick={() =>
            this.setState({ lang: this.state.lang === "thai" ? "eng" : "thai" })
          }
          href="#"
          role="button"
        >
          click me!
        </a>
        <PortNav lang={this.state.lang}></PortNav>
        <Portname lang={this.state.lang}></Portname>
        <ImgProfile></ImgProfile>
        <Portcontect></Portcontect>
        <a
          className="btn btn-dark"
          href="https://drive.google.com/u/0/uc?id=1t5S6XzjlmmKqZr8YR6w6Bqud5_PkkXs1&export=download"
          role="button"
        >
          resume
        </a>
        <Cardset></Cardset>
      </div>
    );
  }
}

export default Portfolio;
