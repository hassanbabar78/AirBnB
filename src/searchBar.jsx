
import './search.css'; 
import { useState } from 'react';

export function SearchBar(){
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
            setGuestVisible(false);
        }, 200);
    };

    return(
        <div className='container'>
            <button className='btn'>
                <div className="dropdown">
                    <div>Where</div>
                    <input 
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
            </button>
            <button className='btn'>
                <div className='dropdown'>
                    <div>Date</div>
                    <input 
                        type="text"
                        placeholder="Add Date"
                        
                    />
                </div>
               
            </button>
            <button className='btn'>
                <div className='dropdown'>
                    <div>Who</div>
                    <input 
                        type="text"
                        placeholder="Add Guests"
                        onFocus={showGuest}
                        onBlur={hideGuest}
                    />
                    
                    {isGuestVisible && (
                        <div className='dropdown-content'>
                            <div className='suggestion1'>
                                <div className='bold' >Adults</div>
                                <div>Ages 13 or above</div>
                            </div>
                            <div className='suggestion1'>
                                <div className='bold'>Children</div>
                                <div>Ages 2-12</div>
                            </div>
                            <div className='suggestion1'>
                                <div className='bold'>Infants</div>
                                <div>Under 2</div>
                            </div>
                            <div className='suggestion1'>
                                <div className='bold'>Pets</div>
                                <div>Bringing a service animal?</div>
                            </div>
                        </div>
                    )}
                </div>
            </button>

        </div>
    )

}