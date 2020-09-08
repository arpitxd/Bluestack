import React from 'react';
import Sections from './sections';
import './bluestack.css';
export default class Bluestack extends React.Component{

    render() {
        return (
            <React.Fragment>
                <div style={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 400,
                    padding: '15px 0'
                }}>
                    <label style={{
                        marginLeft: '20%',
                        
                    }}>
                        Bluestacks
                    </label>

                </div>
                <Sections />
            </React.Fragment>
        );
    }
}
