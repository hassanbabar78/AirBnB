import './Head.css'; 
import { useState } from 'react';
import React from 'react';
import { Signup } from './Signup';

export function Header(){

    const[isMenuDropVisible, setMenuDropVisible] = useState(false);
    const[isSignupVisible, setSignupVisible] = useState(false);

    const addMenu = () => {
        setMenuDropVisible(true);
    };
    const removeMenu = () => {
        setMenuDropVisible(false);
    };
    const showSignup = () =>{
        setSignupVisible(true);
    }
    const hideSignup = () => {
        setSignupVisible(false);
    };
    return(
      
        <div className="hcontainer">
            <div className='hlogopart'>
                <img className='logosize' src="/airbnb.png" alt="" />
                <div className='logotext hsmallspace'>airbnb</div>
            </div>
            <div className="hcenterpart">
                <div className='bigtext'>Stays</div>
                <div className='bigtext hspace'>Experiences</div>
            </div>
            <div className="hendpart">
                <div>Airbnb your home
                    {isMenuDropVisible && (
                                <div className="hdropdown-content">
                                   <div className="hsuggestion"><button onClick={showSignup} onDoubleClick={hideSignup} className='hmenubtn textbold'>Signup</button> </div>                                 
                                   <div className="hsuggestion"><button onClick={showSignup} onDoubleClick={hideSignup} className='hmenubtn'>Login</button> </div>
                                   <div className="hsuggestion"><button className='hmenubtn'>Airbnb your home</button> </div>
                                   <div className="hsuggestion"><button className='hmenubtn'>Host an experience</button> </div>
                                   <div className="hsuggestion"><button className='hmenubtn'>Help center</button> </div>
                                </div>
                            )}
                                   {isSignupVisible && (<Signup/> )}
                </div>
                <img className='hspace smallicon' src="/world.png" alt="" />
                <button onClick={addMenu} onDoubleClick={removeMenu} className='hspace hbox hbtn'>
                    <img className='smallicon bspace' src="/menu.png" alt="" />
                    <img className='bigicon bspace' src="/person.png" alt="" />
                </button>
                
            </div>
        </div>
    )
}