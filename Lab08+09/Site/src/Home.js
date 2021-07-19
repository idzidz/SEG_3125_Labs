// This is a dynamic variable essentially, when React sees that it changes it will reload the entire app
import {useState} from 'react';
import {render} from "react-dom";
import { Container, Row, Col} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.css"
import './index.css'
import ContinentListing from './ContinentListing';


const Home = () => {

    //useState hook. We place variable name we want to change , function that does the change. 
    //The on-click handles this.

    //This CAN be a dynamic array. We will make it create a block per item
    //in the array, regardless of array size.
    const [continents, setContinents] = useState([
        { title:"North America", imgsrc:"/assets/NorthAmerica.png", url:"/NorthAmerica", loc:1, id:1 },
        { title:"South America", imgsrc:"/assets/SouthAmerica.png", url:"/SouthAmerica", loc:2, id:2 },
        { title:"Europe", imgsrc:"/assets/Europe.png", url:"/Europe", loc:3, id:3 },
        { title:"Asia", imgsrc:"/assets/Asia.png", url:"/Asia", loc:4, id:4 },
        { title:"Africa", imgsrc:"/assets/Africa.jpg", url:"/Africa", loc:5, id:5 },
        { title:"Australia", imgsrc:"/assets/Australia.jpg", url:"/Australia", loc:6, id:6 }
    ]);

    const [exploration, setExploration] = useState([
        { title:"Test", imgsrc:"/assets/NorthAmerica.png", loc:1, id:10},
        { title:"Test", imgsrc:"/assets/SouthAmerica.png", loc:1, id:11 },
        { title:"Test", imgsrc:"/assets/Europe.png", loc:1, id:12 },
        { title:"Test", imgsrc:"/assets/Asia.png", loc:1, id:13 },
        { title:"Test", imgsrc:"/assets/Africa.jpg", loc:1, id:14 },
        { title:"Test", imgsrc:"/assets/Australia.jpg", loc:1, id:15 },

        { title:"Test", imgsrc:"/assets/NorthAmerica.png", loc:2, id:1},
        { title:"Test", imgsrc:"/assets/SouthAmerica.png", loc:2, id:2 },
        { title:"Test", imgsrc:"/assets/Europe.png", loc:2, id:3 },
        { title:"Test", imgsrc:"/assets/Asia.png", loc:2, id:4 },
        { title:"Test", imgsrc:"/assets/Africa.jpg", loc:2, id:5 },
        { title:"Test", imgsrc:"/assets/Australia.jpg", loc:2, id:6 },

        { title:"Test", imgsrc:"/assets/NorthAmerica.png", loc:3, id:1},
        { title:"Test", imgsrc:"/assets/SouthAmerica.png", loc:3, id:2 },
        { title:"Test", imgsrc:"/assets/Europe.png", loc:3, id:3 },
        { title:"Test", imgsrc:"/assets/Asia.png", loc:3, id:4 },
        { title:"Test", imgsrc:"/assets/Africa.jpg", loc:3, id:5 },
        { title:"Test", imgsrc:"/assets/Australia.jpg", loc:3, id:6 },

        { title:"Test", imgsrc:"/assets/NorthAmerica.png", loc:4, id:1},
        { title:"Test", imgsrc:"/assets/SouthAmerica.png", loc:4, id:2 },
        { title:"Test", imgsrc:"/assets/Europe.png", loc:4, id:3 },
        { title:"Test", imgsrc:"/assets/Asia.png", loc:4, id:4 },
        { title:"Test", imgsrc:"/assets/Africa.jpg", loc:4, id:5 },
        { title:"Test", imgsrc:"/assets/Australia.jpg", loc:4, id:6 },

        { title:"Test", imgsrc:"/assets/NorthAmerica.png", loc:5, id:1},
        { title:"Test", imgsrc:"/assets/SouthAmerica.png", loc:5, id:2 },
        { title:"TASDest", imgsrc:"/assets/Europe.png", loc:5, id:3 },
        { title:"Test", imgsrc:"/assets/Asia.png", loc:5, id:4 },
        { title:"Test", imgsrc:"/assets/Africa.jpg", loc:5, id:5 },
        { title:"Test", imgsrc:"/assets/Australia.jpg", loc:5, id:6 },

        { title:"Test", imgsrc:"/assets/NorthAmerica.png", loc:6, id:1},
        { title:"Test", imgsrc:"/assets/SouthAmerica.png", loc:6, id:2 },
        { title:"Test", imgsrc:"/assets/Europe.png", loc:6, id:3 },
        { title:"Test", imgsrc:"/assets/Asia.png", loc:6, id:4 },
        { title:"Test", imgsrc:"/assets/Africa.jpg", loc:6, id:5 },
        { title:"Tesst", imgsrc:"/assets/Australia.jpg", loc:6, id:6 }
    ])

    const [categoryTitle, setCategoryTitle] = useState([
        { categoryTitle: "Exploring Continents", id:0},
        { categoryTitle: "Exploring North America", id:1},
        { categoryTitle: "Exploring South America", id:2},
        { categoryTitle: "Exploring Europe", id:3},
        { categoryTitle: "Exploring Asia", id:4},
        { categoryTitle: "Exploring Africa", id:5},
        { categoryTitle: "Exploring Australia", id:6},
    ])

    const TileControl = (id) => {
        const newTiles = exploration.filter((exploration) => exploration.loc === id);
        setContinents(newTiles);
    }

    // const handleClickChoice

    return ( 

        <div className="default">
            <ContinentListing continents={continents} categoryTitle={categoryTitle} homeCategory={categoryTitle.filter((categoryTitle) => categoryTitle.id === 0)} TileControl={TileControl}/>
        </div>
       

     );
}
 
export default Home;