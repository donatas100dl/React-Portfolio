import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import {
  Container,
  Form,
  Card,
  Row,
  Col,
  Carousel,
  Offcanvas,
} from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..


function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className="app"
      style={{
        cursor: "default",
      }}
    >
<Navbar></Navbar>
      <section
        id="home"
        className="min-vh-100 min-vw-100 mt-0 d-flex justify-content-center align-items-center"
      >
        <Container className="h-auto w-auto d-flex flex-column justify-content-center align-items-center mt-5">
          <p
            className="m-0 ms-0 me-5 welcome-text hover"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Hello My name is
          </p>
          <p
            className="m-0 ms-3 me-3 h-auto welcome-text hover"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Donatas and I am
          </p>
          <p
            className="m-0 ms-5 h-auto welcome-text hover"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            a Web Delevoper
          </p>
        </Container>
      </section>
      <section
        id="about"
        className="min-vh-100 min-vw-100 d-flex justify-content-center align-items-center"
      >
        <Container className="sclae-xl-2">
          <div className="w-100 h-auto justify-content-start d-flex mb-1 hover">
            <h1 data-aos="fade-right" data-aos-delay="100">
              About me and my skills
            </h1>
          </div>
          <div className="w-100 h-75 d-flex flex-column flex-md-row container gap-4 p-0">
            <div className="d-flex justify-content-center align-items-center hover">
              <p data-aos="fade-left" data-aos-delay="100">
                My name is Donatas and am i junior junior Web Delevoper is
                started coding in 2022. My goal is to beacome full stack
                delevoper. And this is my jurny of becoming a Full Stack
                delevoper. In this page i upload my profile and skills that i
                had aquaired is this long jurny.
              </p>
            </div>
            <div className="w-100 h-100 d-flex align-items-center justify-content-center p-0">
              <ul className="bars d-flex m-2 m-md-0 flex-column h-100 w-100">
                <li
                  className="bar mb-2 hover"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="bar-inner mw-md-100">
                    <div className="bar-outer"></div>
                  </div>
                  <span>JavaScript</span>
                </li>

                <li
                  className="bar mb-2 hover"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="bar-inner mw-md-100">
                    <div className="bar-outer"></div>
                  </div>
                  <span>CSS</span>
                </li>

                <li
                  className="bar mb-2 hover"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="bar-inner mw-md-100">
                    <div className="bar-outer"></div>
                  </div>
                  <span>Html</span>
                </li>

                <li
                  className="bar mb-2 hover"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="bar-inner mw-md-100">
                    <div className="bar-outer"></div>
                  </div>
                  <span>bootstrap-5</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section id="projects" className="min-vh-100 position-relative">
        <Container
          className="w-100 min-vh-100 d-flex justify-content-center align-items-center flex-column"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Container fluid className="d-flex justify-content-center d-md-block">
            <div className="w-auto">
              <h1 className="hover">My Projects</h1>
            </div>
          </Container>
          <Container>
            <Carousel>
              <Carousel.Item>
                <a href="https://MonumentalWideRoute.donatastumenas.repl.co">
                  <img
                    className="d-block w-100"
                    src="https://media.discordapp.net/attachments/886674559875571723/1063475219051855892/image.png"
                    alt="Boom"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="https://SCR.donatastumenas.repl.co">
                  <img
                    className="d-block w-100"
                    src="https://media.discordapp.net/attachments/886674559875571723/1063475398492557352/image.png"
                    alt="RPC"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="https://Nuke.donatastumenas.repl.co">
                  <img
                    className="d-block w-100"
                    src="https://media.discordapp.net/attachments/886674559875571723/1063475621860212787/image.png"
                    alt="Nuke"
                  />
                </a>
              </Carousel.Item>

              <Carousel.Item>
                <a href="https://sing-up.donatastumenas.repl.co">
                  <img
                    className="d-block w-100"
                    src="https://media.discordapp.net/attachments/886674559875571723/1063475914962386975/image.png"
                    alt="Sing-in"
                  />
                </a>
              </Carousel.Item>

              <Carousel.Item>
                <a href="https://tic-tack.donatastumenas.repl.co">
                  <img
                    className="d-block w-100"
                    src="https://media.discordapp.net/attachments/886674559875571723/1063476310225203240/image.png"
                    alt="Tik-Tak"
                  />
                </a>
              </Carousel.Item>

              <Carousel.Item>
                <a href="https://nice-spin.donatastumenas.repl.co">
                  <img
                    className="d-block w-100"
                    src="https://media.discordapp.net/attachments/886674559875571723/1063476638827946084/image.png"
                    alt="spin"
                  />
                </a>
              </Carousel.Item>
            </Carousel>
          </Container>
        </Container>
      </section>
      <section
        id="contact"
        className="min-vh-100 w-100 d-flex flex-column justify-content-center mt-5"
      >
        <Container className="w-100 min-vh-100 px-2">
          <div>
          <div className="mb-5">
            <h1 className="">Contact Me</h1>
          </div>
          <div className="my-5">
            <div
              className="mx-5 my-3"
              style={{
                maxWidth: "100rem",
              }}
            >
              <Form.Group className="mb-3 w-100" controlId="formBasicEmail ">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  I will never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </div>
            <div
              className="mx-5 my-3"
              style={{
                maxWidth: "100rem",
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter your Message</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your message"
                ></Form.Control>
              </Form.Group>
            </div>
          </div>
          </div>
        </Container>
      </section>
      <section>
        <Container fluid className="d-flex justify-content-center bg-dark">
          <h1 class="m-0" style={{ fontSize: "1.5vh" }}>
            ©2023 copyrights: Donatas Tumėnas
          </h1>
        </Container>
      </section>
    </div>
  );
}

export default App;
