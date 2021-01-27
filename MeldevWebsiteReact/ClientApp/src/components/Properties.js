import React, { Component } from 'react';
import styled from 'styled-components';
import outdoor from '../images/Outdoor.jpeg';

export class Properties extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <h4>Available apartments for rent: </h4>
                <Apartmentbox>
                    <Outdoorpic src={outdoor} alt="outdoor" />
                <p> Four and Half bedroom </p>
                </Apartmentbox>
            </div>
        );
    }
}

const Apartmentbox = styled.div`
    display:flex;
    border: 0.5px solid #D3D3D3;
    flex-direction:rows;
    padding: 10px;
    box-shadow: 1.5px 1.5px grey;
    `;

const Outdoorpic = styled.img`
    width: 15%;
    height:15%;
`;