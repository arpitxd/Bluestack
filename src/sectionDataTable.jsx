import React from 'react';
import Modal from './modal';
export default class SectionDataTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            modalContent: ''
        };
        this.monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
    toggleModal = (status, content='') => {
        this.setState({
            showModal: status,
            modalContent: content
        })
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
                                let days = Math.ceil((currentDate.getTime() - date.getTime())/(1000 * 3600 * 24));
                                if (days < 0){
                                    days = `${days * (-1)} Days ahead`;
                                }  else {
                                    days = `${days} Days ago`;
                                }
                                return (
                                <li style={{paddingBottom: '20px'}}>
                                    <ul style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        listStyle: 'none',
                                        padding: '0px 0px 0px 2%',
                                        
                                    }}>
                                        <li style={{
                                    width: '150px'
                                        }}>
                                            <span>
                                                {`${this.monthsArr[date.getMonth()]} ${date.getFullYear()}, ${date.getDay()}`}
                                                <br/>
                                                <label className='italic'>
                                                    {days}
                                                </label>
                                            </span>
                                        </li>
                                        <li style={{
                                    width: '300px'
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
                                    }}>
                                        <img src={require('./images/Price.png')} height={'30'} width={'30'} alt='price'/>
                                           <label className='row_label' onClick={() => this.toggleModal(true, item.price)}>View Pricing</label>
                                    </li>
                                    <li style={{
                                        width: '150px'
                                    }}>
                                        <img src={require('./images/file.png')} height={'30'} width={'30'} alt='csv'/>
                                        <label className='row_label'>
                                            <a href={item.csv}>CSV</a>
                                        </label>
                                    </li>
                                    <li style={{
                                        width: '150px'
                                    }}>
                                        <img src={require('./images/statistics-report.png')} height={'30'} width={'30'} alt='statistics'/>
                                        <label className='row_label'>
                                            <a href={item.report}>Report</a>
                                        </label>
                                    </li>
                                    <li>
                                        <img src={require('./images/calendar.png')} height={'30'} width={'30'} alt='schedule'/>
                                        <label className='row_label'>Schedule Again</label>
                                    </li>
                                    </ul>
                                </li>
                            )})}
                            
                        </ul>
                    </div>
                    {this.state.showModal && (
                        <Modal 
                            closeCallback={() => this.toggleModal(false, '')}
                            modalHeader='Price Details'
                        >
                            <div className='modal_text'>
                                {this.state.modalContent}
                            </div>
                        </Modal>
                    )}
                    
            </React.Fragment>
        );
    }
}