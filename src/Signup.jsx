import './Signup.css'; 

export function Signup(){
    return(
            <div className="signup-container popup-menu">
                <div className='signup-header'>Log in or sign up</div>
                <div className='signup-welcome'>Welcome to Airbnb</div>
                <div className='signup-data'>
                    <div className="signup-data-part1 low-opacity">
                        <p className='margin-left'>Country code</p>
                    </div>
                    <div className="signup-data-part2"><div className='signup-input-data low-opacity'>Phone Number</div></div>
                </div>
                <p>We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
                <p>Details</p>
                <button className="signup-submitdata signup-btn">Continue</button>
                <div className="signup-header">or</div>
                <button className="signup-options margin-top signup-btn">
                    <div className='signup-img-container'><img style={{width:'17px', height:'17px'}} src="./fb.png" className='signup-img' alt="" /></div>        
                    <div className='signup-options-data'>Connect with Facebook</div>
                </button>
                <button className="signup-options margin-top signup-btn">
                    <div className='signup-img-container'><img style={{width:'17px', height:'17px'}} src="./google.png" className='signup-img' alt="" /></div>        
                    <div className='signup-options-data'>Connect with Google</div>
                </button>
                <button className="signup-options margin-top signup-btn">
                    <div className='signup-img-container'><img style={{width:'17px', height:'17px'}} src="./apple.png" className='signup-img' alt="" /></div>        
                    <div className='signup-options-data'>Connect with Apple</div>
                </button>
                <button className="signup-options margin-top signup-btn">
                    <div className='signup-img-container'><img style={{width:'17px', height:'17px'}} src="./mail.png" className='signup-img' alt="" /></div>        
                    <div className='signup-options-data'>Connect with Email</div>
                </button>
            </div>
        
    )
}