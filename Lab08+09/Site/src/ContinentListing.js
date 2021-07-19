import {useState} from 'react';
import {render} from "react-dom";
import { Container, Row, Col} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css"
import './index.css'

const ContinentListing = ({continents, categoryTitle, homeCategory, updateTiles}) => {


    
    return (  
        <div className="continentListContainer">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <h1>Exploring Continents</h1>
                    </Col>
                    
                    
                </Row>
                <Row>
                    {continents.map((continents) => (
                        <Col md={4} key={continents.id}>
                            {/* <Box>{continents.title}</Box> */}
                            <div className="continentList">
                                <Link to={{
                                    pathname: '/YourContinent',
                                    state: {chosenCont: continents.id}
                                }} style={{textDecoration: 'none'}}>
                                    <img src={continents.imgsrc} alt=""/>
                                    <h2>{continents.title}</h2>
                                </Link>
                                
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
 
export default ContinentListing;