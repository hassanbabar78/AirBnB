
import './Category.css'

export function Categorybox({background}){
    const boxStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    return(
        <div className='cbox' style={boxStyle}>
            
        </div>
    )
}