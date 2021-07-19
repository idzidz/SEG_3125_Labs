import {useLocation} from 'react-router-dom';
import {render} from "react-dom";
import { Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';

import Home from './Home'

import "bootstrap/dist/css/bootstrap.css"
import './index.css'

const NorthAmerica = () => {

    const location = useLocation();

    const chosenLocation = location.state.chosenCont;

    const [exploring, setExploring] = useState([
        {title: "Golden Gate Bridge, United States", imgsrc:"assets/NA.png", id:1,
        descr: "IIIIIIIIIIIIIIIIIIIIIIP"},
        {title: "Angel Falls, Venezuela", imgsrc:"assets/SA.png", id:2,
        descr: "IIIIIIIIIIIIIIIIIIIIIIP"},
        {title: "Amsterdam, Netherlands", imgsrc:"assets/EU.png", id:3,
        descr: "IIIIIIIIIIIIIIIIIIIIIIP"},
        {title: "Mount Fuji, Japan", imgsrc:"assets/Japan.png", id:4,
        descr: "IIIIIIIIIIIIIIIIIIIIIIP"},
        {title: "Cape Town, Africa", imgsrc:"assets/AfricaCape.jpg", id:5,
        descr: "IIIIIIIIIIIIIIIIIIIIIIP"},
        {title: "Melbourne, Australia", imgsrc:"assets/AusMel.png", id:6,
        descr: "IIIIIIIIIIIIIIIIIIIIIIP"},
    ])

    // How do we want to do EN / FR? Two arrays and we swap between them?

    const filteredExploring = exploring.filter(exploring => exploring.id === location.state.chosenCont);

    // const chosenExploring = (id) => {
    //     const chosenExploring = exploring.filter((exploring) => exploring.id === location.state.chosenCont);
    //     setExploring(chosenExploring);
    // }

    // chosenExploring(chosenLocation);
    
    

    console.log(filteredExploring[0].title);
    console.log(location.state.chosenCont);

    //console.log(chosenLocation === exploring)

    return (  
        <div className="continentListContainer">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <h1>{filteredExploring[0].title}</h1>                      
                    </Col>
                </Row>
                <Row>
                    <div className="selectedContinent">
                        <img src={filteredExploring[0].imgsrc} alt=""/>
                    </div>
                </Row>
                <Row>
                    <div className="descr">
                        <h1>{filteredExploring[0].descr}</h1>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
 
export default NorthAmerica;