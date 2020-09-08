import React from 'react';
import SectionDataTable from './sectionDataTable';
import { previousDump, currentDump, upcomingDump } from './dump'

class Sections extends React.Component {

    constructor(props){
        super(props);
       this.state = {
           active: 'upcoming'
       }
    }
    updateTab = (e) => {
        let id = e.target.id;
        let value = '';
        switch(id){
            case 'upcoming':
            case 'past':
            case 'current':
                value = id;
                break;
            default:
                break;
        }
        if(value){
            this.setState({
                active: value
            })
        }
    }
    render() {
        let data = upcomingDump.data;
        if(this.state.active == 'current') {
            data = currentDump.data
        } else if(this.state.active == 'past') {
            data = previousDump.data
        }
        return (
            <React.Fragment>
                <div style={{
                        marginLeft: '20%'
                    }}
                    className='section'
                >
                    <h2>
                        Manage Campaigns
                    </h2>
                    <ul style={{
                        display: 'flex',
                        flexDirection:'row',
                        flex: '0 0 25%',
                        listStyle: 'none',
                        marginLeft: '-2.5%',
                        cursor:'pointer',
                        fontWeight: '600',
                        color: '#252525d0',
                        marginBottom: 0
                    }} onClick={
                        (e) => this.updateTab(e)
                    }>
                        <li style={{
                            marginRight: '20px',
                            paddingBottom: '10px'
                        }} id='upcoming' className={this.state.active == 'upcoming' ? 'active' : ''}>
                          Upcoming Campaigns
                        </li>
                        <li style={{
                            marginRight: '20px',
                            paddingBottom: '10px'
                        }} id='current' className={this.state.active == 'current' ? 'active' : ''}>
                            Live Campaigns
                        </li>
                        <li id='past' className={this.state.active == 'past' ? 'active' : ''} style={{
                            paddingBottom: '10px'
                        }}>
                            Past Campaigns
                        </li>
                    </ul>
                    <div style={{ 
                        borderBottom: '1px solid #e7e7e7',
                        width: '80%'
                        }}></div>
                    <SectionDataTable data={data} />
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Sections;
