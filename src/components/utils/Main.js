import Categories from './Categories';
import Collection from './Collection';
import Facility from './Facility';
import Latest from './Latest';
import News from './News';
import Newsletter from './Newsletter';

const Main = () => {
    return (
        <main>
            <div className='container'>
                <Collection />
                <Latest />
                <Categories />
                <Facility />
                <Newsletter />
                <News />
            </div>
        </main>
    )
}

export default Main
