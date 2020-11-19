import {useState, useEffect} from 'react';
import Axios from 'axios';
import InfoCard from './InfoCard';

const Display = props => {

    const[facts, setFacts] = useState([]);

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.category}/${props.displayNum}`)
            .then(res => setFacts(res.data))
            .catch(err => console.log(err))
    }, [props])

return (
    <>
    <div>
        <h2 className ="text-center">{props.category.charAt(0) + props.category.slice(1)} Category</h2>
        {
            facts.map((fact,i) => <InfoCard key={i} fact={fact} /> )
        }
    </div>
    </>
);

    
    }

export default Display;