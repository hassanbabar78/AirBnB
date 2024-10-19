
import './Search.css'; 
import { useState } from 'react';

export function SearchBar(){
    let count = 0;
    // const [isButtonClicked, setButtonClicked] = useState(true);
    const[isPetClicked, setPetClicked] = useState(false);
    const[Adults, setAdults] = useState(0);
    const[Children, setChildren] = useState(0);
    const[Infants, setInfants] = useState(0);
    const[Pets, setPets] = useState(0);
    const[isDropdownVisible, setDropdownVisible] = useState(false);
    const showDropdown = () => {
        setDropdownVisible(true);
    };
    const hideDropdown = () => {
        setTimeout(() => {
            setDropdownVisible(false);
        }, 200);
    };
    const[isGuestVisible, setGuestVisible] = useState(false);
    const showGuest = () => {
        setGuestVisible(true);
    };
    const hideGuest = () => {
        setTimeout(() => {
            // setGuestVisible(false);
        }, 200);
    };
    const[guestCount, setGuestCount]= useState(0);
    // const AddGuest = () => {
    //     setGuestCount(guestCount+1);
    // }
    // const RemoveGuest = () => {
    //     setGuestCount(guestCount-1);
    // }
    const AddAdult = () => {
        if(Adults<16){
            setAdults(Adults+1);
            setGuestCount(guestCount+1);
        }      
    }
    const RemoveAdult = () => {
        if(Adults>0){
            setAdults(Adults-1);
            setGuestCount(guestCount-1);
        }
       
    }
    const AddChildren = () => {
        if(Children<7){
            setChildren(Children+1);
            setGuestCount(guestCount+1);
        }     
    }
    const RemoveChildren = () => {
        if(Children>0){
            setChildren(Children-1);
            setGuestCount(guestCount-1);
        }    
    }
    const AddInfants = () => {
        if(Infants<5){
            setInfants(Infants+1);
            setGuestCount(guestCount+1);
        }       
    }
    const RemoveInfants = () => {
        if(Infants>0){
            setInfants(Infants-1);
            setGuestCount(guestCount-1);
        }     
    }
    const AddPets = () => {
        if(Pets<5){
            setPetClicked(true);
            setPets(Pets+1);
        }    
    }
    const RemovePets = () => {
        if(Pets>0){
            setPets(Pets-1);
        }        
    }
    return(
        <div className='container'>
            <div className='scontainer'>
                <div className='spart'>
                    <div className="dropdown">
                        <div className='sspace'>Where</div>
                        <input className='sspace'
                            type="text"
                            placeholder="Search destinations"
                            onFocus={showDropdown}
                            onBlur={hideDropdown}
                        />
                        {isDropdownVisible && (
                            <div className="dropdown-content">
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-autosuggest-2024/original/17aa882e-1e27-46ad-a4d7-e4e6aa0fcb3c.png" alt="Los Angeles" />
                                    <span>Los Angeles, United States</span>
                                </div>
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-autosuggest-2024/original/eaf9ff17-cff5-468b-88d6-623f9d334cd6.png" alt="New York City" />
                                    <span>New York City, United States</span>
                                </div>
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/acbd8c1c-145d-4852-8377-978addf8b029.png" alt="Miami Beach" />
                                    <span>Miami Beach, United States</span>
                                </div>
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-autosuggest-2024/original/4d168465-080f-4dee-98fb-50014524607b.png" alt="San Francisco" />
                                    <span>San Francisco, United States</span>
                                </div>
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/43b6be43-d8d8-4a97-9c17-e52b6e65ce66.png" alt="London" />
                                    <span>London, United Kingdom</span>
                                </div>
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/bac96687-79f5-4056-9f47-c10f2e3f1ffc.png" alt="Rome" />
                                    <span>Rome, Italy</span>
                                </div>
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-autosuggest-2024/original/c5c93d3b-5a60-4c0a-bc03-5d6874e6888d.png" alt="" />
                                    <span>Paris, France</span>
                                </div>
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/be862c90-9b35-405a-ab7f-6c3718f924af.png" alt="Rome" />
                                    <span>Mexico City,Mexico</span>
                                </div>
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/16be36c1-171e-4a9b-a0ec-ac6468a2366d.png" alt="Rome" />
                                    <span>Florence, Italy</span>
                                </div>
                                <div className="suggestion">
                                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/d2d9f652-03f0-4c23-9246-f825ffd1f0d4.png" alt="Rome" />
                                    <span>Lisben, Portugal</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='spart'>
                    <div className='dropdown'>
                    <div className='sspace'>Date</div>
                        <input className='sspace'
                            type="text"
                            placeholder="Add Date"
                        />
                    </div>           
                </div>
                <div className='spart'>
                    <div className='dropdown'>
                        <div className='sspace'>Who</div>
                        <input
                             className='sspace'
                             type="text"
                             placeholder='Add Guest'
                             value={`${guestCount} Guests ${isPetClicked ? `, ${Pets} pets`: ''}`}
                             onFocus={showGuest}
                             onBlur={hideGuest}
                        />

                        {isGuestVisible && (
                            <div className='dropdown-content'>
                                <div className="suggestion1box">
                                    <div className="suggestion1text">
                                       <div className='bold' >Adults</div>
                                       <div>Ages 13 or above</div>
                                    </div>
                                    <div className="suggestion1btn">
                                        <button className='btn' onClick={RemoveAdult}>-</button>
                                        <span className='textleftspace'>{Adults}</span>
                                        <button className='textleftspace btn' onClick={AddAdult}>+</button>
                                    </div>
                                </div>
                                <div className="suggestion1box">
                                    <div className="suggestion1text">
                                       <div className='bold' >Children</div>
                                       <div>Ages 2-12</div>
                                    </div>
                                    <div className="suggestion1btn">
                                        <button className='btn' onClick={RemoveChildren}>-</button>
                                        <span className='textleftspace'>{Children}</span>
                                        <button className='textleftspace btn' onClick={AddChildren}>+</button>
                                    </div>
                                </div>
                                <div className="suggestion1box">
                                    <div className="suggestion1text">
                                       <div className='bold' >Infants</div>
                                       <div>Under 2</div>
                                    </div>
                                    <div className="suggestion1btn">
                                        <button className='btn' onClick={RemoveInfants}>-</button>
                                        <span className='textleftspace'>{Infants}</span>
                                        <button className='textleftspace btn' onClick={AddInfants}>+</button>
                                    </div>
                                </div>
                                <div className="suggestion1box">
                                    <div className="suggestion1text">
                                        <div className='bold'>Pets</div>
                                        <div>Bringing a service animal?</div>
                                    </div>
                                    <div className="suggestion1btn">
                                        <button className='btn' onClick={RemovePets}>-</button>
                                        <span className='textleftspace'>{Pets}</span>
                                        <button className='textleftspace btn' onClick={AddPets}>+</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}