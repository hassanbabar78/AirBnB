
import './List.css'
import { Categorybox } from './Category'
export function List(){
    return(
        <div className="lcontainer ">
            <div className='boldtext lspace'>Adventures List</div>
            <div className='mianbox'>
                <div className='lbox1'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/b48403df-2c64-40c4-a35f-13a275a0dcf1.jpeg?im_w=720"}/>
                    <div className='ldescription'>Private Island Retreats</div>
                    <div>Escape to your own private island.</div>
                    {/* <div>🌟 Starting from $1500/night</div> */}
                    <span>🌟 Starting from</span> <span className='coloredtext'>$1500/night</span>
                    <div>Availability: 2/10 islands left for the season.</div>
                </div>
                <div className='lbox2'>
                    <Categorybox background={"https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-1064456738937449145/original/029dba80-247c-4450-9fdd-86a3b1e82076.jpeg?im_w=720"}/>
                    <div className="ldescription">Luxury Treehouses</div>
                    <div>Live in elevated luxury among nature.</div>
                    {/* <div>🍃 Starting from $600/night</div> */}
                    <span>🍃 Starting from</span> <span className='coloredtext'>$600/night</span>
                    <div>Fully booked for Fall season.</div>  
                </div>
                <div className='lbox3'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/9082ff35-38d2-42dd-9e54-1d5da6c75afe.jpg?im_w=720"}/>
                    <div className="ldescription">Historical Castles</div>
                    <div>Stay in a medieval fortress.</div>
                    <span>🏰 Starting from </span> <span className='coloredtext'>$1200/night</span>
                    <div>Exclusive offer: 1/15 castles available.</div>
                </div>
                <div className='lbox4'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTA1ODcyMTE3MzAyNjEwMzcw/original/c64f290d-3afc-42e1-bb98-08ecbfbb8142.jpeg?im_w=720"}/>
                    <div className="ldescription">Stargazing Domes</div>
                    <div>Experience panoramic views of the night sky.</div>
                    <span>🌠 Starting from </span> <span className='coloredtext'>$350/night</span>
                    {/* <div>🌠 Starting from $350/night</div> */}
                    <div>Last 5 bookings for meteor shower season.</div>
                </div>
                <div className='lbox5'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/hosting/Hosting-1223324909825450528/original/d68773ae-9e77-4a80-b6bc-68555b7318a4.jpeg?im_w=720"}/>
                    <div className="ldescription">Underwater Suites</div>
                    <div>Sleep under the waves with marine life views.</div>
                    <span>🌠 Starting from </span> <span className='coloredtext'>$350/night</span>
                    {/* <div>🌊 Starting from $1800/night</div> */}
                    <div>Sold Out for the month, available next season.</div>
                </div>
                <div className='lbox6'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/miso/Hosting-726608104170540569/original/430436a6-c9ec-4d3e-9dac-e7e6ff0d4fd3.jpeg?im_w=720"} />
                    <div className="ldescription">OMG!</div>
                    <div>Futuristic accommodations for sci-fi lovers.</div>
                    {/* <div>🚀 Starting from $700/night</div> */}
                    <span>🚀 Starting from </span> <span className='coloredtext'>$1200/night</span>
                    <div>VIP Pass for space travel simulation included.</div>
                </div>
                <div className='lbox7'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/9d16adc4-d6f0-4f96-85fe-c44b4c47ba38.jpg?im_w=720"}/>
                    <div className="ldescription">Fantasy Cabins</div>
                    <div>Magical hobbit holes or fairy-tale cabins.</div>
                    {/* <div>🧚 Starting from $400/night</div> */}
                    <span>🧚 Starting from </span> <span className='coloredtext'>$400/night</span>
                    <div>Last 3 cabins available for summer.</div>
                </div>
                <div className='lbox8'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/hosting/Hosting-1260751993160113876/original/fc721c59-4f82-472f-9be3-6ba697e6ea2e.jpeg?im_w=720"}/>
                    <div className="ldescription">Desert Glamping</div>
                    <div>Luxury tents under vast desert skies.</div>
                    {/* <div>🌵 Starting from $250/night</div> */}
                    <span>🌵 Starting from </span> <span className='coloredtext'>$250/night</span>
                    <div>Only 2 spots left for the Desert Safari package.</div>
                </div>
                <div className='lbox9'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/prohost-api/Hosting-23328978/original/a51d015f-6255-42b0-b454-759cfb32c3e4.jpeg?im_w=720"}/>
                    <div className="ldescription">Mountain Ski Chalets</div>
                    <div>Warm up in luxury after a day of skiing.</div>
                    {/* <div>🏔️ Starting from $1000/night</div> */}
                    <span>🏔️ Starting from </span> <span className='coloredtext'>$1000/night</span>
                    <div>Special winter deal: Ski pass included.</div>
                </div>
                <div className='lbox10'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTE0MTc0NDMwMDY3MjA2NDIw/original/a1e2ad81-69fe-40be-8f3d-31b910754439.jpeg?im_w=720"}/>
                    <div className="ldescription">A-frames</div>
                    <div>Sustainable bamboo villas in tropical locations.</div>
                    {/* <div>🌿 Starting from $550/night</div> */}
                    <span>🌿 Starting from </span> <span className='coloredtext'>$550/night</span>
                    <div>Green Discount: $50 off for eco-travelers.</div>
                </div>
                <div className='lbox11'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/miso/Hosting-18872378/original/d686b2d3-8619-4c05-9bfa-451967c94327.jpeg?im_w=720"}/>
                    <div className="ldescription">Cave Dwellings</div>
                    <div>Ancient rock homes with modern amenities.</div>
                    {/* <div>🏞️ Starting from $300/night</div> */}
                    <span>🏞️ Starting from </span> <span className='coloredtext'>$300/night</span>
                    <div>Next opening in 3 weeks.</div>
                </div>
                <div className='lbox12'>
                    <Categorybox background={"https://a0.muscache.com/im/pictures/49f55681-7e8c-4a8e-9939-bb10e06b8292.jpg?im_w=720"}/>
                    <div className="ldescription">Floating Houseboats</div>
                    <div>Relax on waters in fully furnished houseboat.</div>
                    {/* <div>🛥️ Starting from $450/night</div> */}
                    <span>🛥️ Starting from </span> <span className='coloredtext'>$450/night</span>
                    <div>Only 2 boats available for the summer season.</div>
                </div>
            </div>
        </div>
    )
}