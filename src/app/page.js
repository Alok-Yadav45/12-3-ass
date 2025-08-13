import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <nav className="navbar">
       <div className="navbar-container">
        <span className="navbar-1">Layout 3</span>
        <a href="#" className="navbar-a">About</a>
        <a href="#" className="navbar-a">Services</a>
        <a href="#" className="navbar-a">Contact</a>
      </div> 
    </nav>
    <div className="heading">
      <h1 className="main-heading">Sample Heading</h1>
      <p className="secondary-heading"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="btn">Call to Action!</button>
    </div>
    
    <div className="latest-feature"> Latest Feature</div>
    <div className="grid-container">
      <div className="card">
        <div className="img">
          <span>800 x 500</span>
        </div>
        <div className="body">
          <h3 className="title">Feature Label</h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.ea commodo consequat.
          </p>
          <div className="btn-container">
          <button className="btn1">Buy Now!</button>
          <button className="btn2">More Info</button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="img">
          <span>800 x 500</span>
        </div>
        <div className="body">
          <h3 className="title">Feature Label</h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.ea commodo consequat.
          </p>
          <div className="btn-container">
          <button className="btn1">Buy Now!</button>
          <button className="btn2">More Info</button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="img">
          <span>800 x 500</span>
        </div>
        <div className="body">
          <h3 className="title">Feature Label</h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.ea commodo consequat.
          </p>
         <div className="btn-container">
          <button className="btn1">Buy Now!</button>
          <button className="btn2">More Info</button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="img">
          <span>800 x 500</span>
        </div>
        <div className="body">
          <h3 className="title">Feature Label</h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.ea commodo consequat.
          </p>
          <div className="btn-container">
          <button className="btn1">Buy Now!</button>
          <button className="btn2">More Info</button>
          </div>
        </div>
      </div>
    </div>
     <footer className="footer">
      Copyright  Your Website 2014 
    </footer>
    </>
  );
}
