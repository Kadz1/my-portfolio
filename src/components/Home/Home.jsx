import React from 'react'
import "./home.css"


const Home = () => {

    return (
        <div className="home-Wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="intro-h1">Hello, my <br></br>name is <b>Khadar</b>.</h1>
                        <p className="intro-paragraph">
                        Front end developer who writes clean, elegant and efficient code.                   
                        </p>
                    </div>
                </div>
            </div>
        </div>            
       
    )
}

export default Home

// {/* <img className="home-img" src="/images/background.jpg" alt="backgroung-image" />
// <div className="col-md-6 main-intro">
//     <h1 className="intro-h1">Hello, my <br></br>name is <b>Khadar</b>.</h1>
//     <p className="intro-paragraph">
//         Front end developer who writes clean, elegant and efficient code.                   
//     </p>
// </div>    */}