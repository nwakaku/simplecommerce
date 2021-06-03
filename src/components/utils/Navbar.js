import Hero from './Hero';
// import Navbar1 from './Navbar1';
import SweetNav from './SweetNav';

const Navbar = () => {


    return (
        <header className='header'>
            {/* Navigation Bar */}
            {/* <Navbar1/> */}
            <SweetNav />
            {/* hero area */}
            <Hero />
        </header>
    )
}

export default Navbar
