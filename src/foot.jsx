
import './Footer.css';
export function Footer(){
    return(
        <div className="footer">
           <div className="fpart1">
                <div className="fcontainer">
                    <div className="fbox1">
                        <div style={{fontWeight:"bold"}}>Support</div>
                        <ul className="supportlist">
                            <li>Help Center</li>
                            <li>Air Cover</li>
                            <li>Anti-discrimination</li>
                            <li>Disability support</li>
                            <li>Cancellation options</li>
                            <li>Report Neighbourhood concern</li>
                        </ul>
                    </div>
                    <div  className="fbox2">
                        <div style={{fontWeight:"bold"}}>Hosting</div>
                        <ul className="supportlist">
                            <li>Airbnb your home</li>
                            <li>AirCover for Hosts</li>
                            <li>Hosting Resources</li>
                            <li>Community forum</li>
                            <li>Hosting responsibly</li>
                            <li>Join a free Hosting class</li>
                        </ul>
                        </div>
                    <div  className="fbox3">
                        <div style={{fontWeight:"bold"}}>Airbnb</div>
                        <ul className="supportlist">
                            <li>Newsroom</li>
                            <li>New features</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Airbnb.org</li>
                            <li>Airbnb.org emergency stays</li>
                        </ul>
                        </div>
                </div>
           </div>
           <div className="fpart2">
                <div className="fcontainer2">
                    <div>© 2024 Airbnb, Inc.</div>
                    <div className="space">. Privacy</div>
                    <div className="space">. Sitemap</div>
                    <div className="space">. Terms</div>
                    <div className="marginleft"></div>
                    <img className="iconsize" src="/world.png" alt="" />
                    <div className="space" >English(SD)</div>
                    <div className="space">$ SGD</div>
                    <img className="iconsize" src="/twitter.png" alt="" />
                    <img className="iconsize" src="/facebook.png" alt="" />
                    <img className="iconsize" src="/instagram.png" alt="" />
                </div>             
           </div>
        </div>
    )
}