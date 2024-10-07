import './head.css'; 

export function Header(){
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
                <div>Airbnb your home</div>
                <img className='hspace smallicon' src="/world.png" alt="" />
                <div className='hspace hbox'>
                    <img className='smallicon bspace' src="/menu.png" alt="" />
                    <img className='iconsize bspace' src="/person.png" alt="" />
                </div>
            </div>
        </div>
    )
}