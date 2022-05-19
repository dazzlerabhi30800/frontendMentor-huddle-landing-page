import React from 'react';
import heroImg from './images/illustration-mockups.svg';

function Main()  {
    return(
        <main className='component'>
            <div className="svg--wrapper">
                <img src={heroImg} alt="" />
            </div>
            <div className="text--wrapper">
                <h1 className="heading">
                    Build the community your fans will love
                </h1>
                <p className="description">
                    Huddle re-iamgeines the way we build communities. You have a voice, but so does your audience. Create connection with your users as you engage in genuine discussion.
                </p>
                <div className="btn">
                    <button>Register</button>
                </div>
            </div>
        </main>
    )
}

export default Main;