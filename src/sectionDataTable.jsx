import React from 'react';

export default class SectionDataTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
    
    render() {
        return (
            <React.Fragment>
                <div style={{
                        marginTop: '30px',
                        border: '3px solid #e7e7e7',
                        boxShadow: '7px 10px 12px rgba(0,0,0,0.04)',
                        width: '80%'
                        

                    }}>
                        <ul style={{
                            display: 'flex',
                            flexDirection:'row',
                            flex: '0 0 25%',
                            listStyle: 'none',
                            backgroundColor: '#e7e7e7',
                            margin: '0',
                            padding: '15px 0 10px 20px'
                        }}>
                            <li style={{
                                width: '200px'
                            }}>
                                Date
                            </li>
                            <li style={{
                                width: '200px'
                                }}>
                                Campaign
                            </li>
                            <li style={{
                                width: '200px'
                                }}>
                                View
                            </li>
                            <li>Action</li>
                            <li></li>

                        </ul>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0
                        }}>
                            {this.props.data.map((item, index) => {
                                let date = new Date(item.createdOn);
                                let currentDate = new Date();
                                return (
                                <li>
                                    <ul style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        listStyle: 'none',
                                        padding: '0px 0px 0px 2%',
                                        
                                    }}>
                                        <li style={{
                                    width: '200px'
                                        }}>
                                            <span>
                                                {`${this.monthsArr[date.getMonth()]} ${date.getFullYear()}, ${date.getDay()}`}
                                                <br/>
                                                <label className='italic'>
                                                    {`${Math.ceil((currentDate.getTime() - date.getTime())/(1000 * 3600 * 24))} Days Ago`}
                                                </label>
                                            </span>
                                        </li>
                                        <li style={{
                                    width: '200px'
                                        }}>
                                        <span>
                                            <img src={item.image_url} width='40' height={40}></img>
                                        </span>
                                        <span style={{marginLeft:'10px', position: 'absolute'}}>
                                            {item.name}
                                            <br/> 
                                            <label className='italic'>{item.region}</label>
                                        </span>    
                                    </li>

                                        <li style={{
                                    width: '200px'
                                }}>View Price</li>
                                        <li style={{
                                    width: '100px'
                                }}><a href={item.csv}>CSV</a></li>
                                        <li style={{
                                    marginRight: '5%'
                                }}><a href={item.report}>Report</a></li>
                                        <li>Schedule Again</li>
                                    </ul>
                                </li>
                            )})}
                            
                        </ul>
                    </div>
            </React.Fragment>
        );
    }
}