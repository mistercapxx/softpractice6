import React, { Component } from "react";

export default class Task2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    id: 1,
                    text: "hidden text 1"
                },
                {
                    id: 2,
                    text: "hidden text 2"
                },
                {
                    id: 3,
                    text: "hidden text 3"
                },
            ],
            text: ''

          
        };

      

        
    }
    handlMouseEnter = (fsfsfs) => {
        this.setState({ text: fsfsfs});
    }

    handleMouseLeave = () => {
        this.setState({ text: '' });
    }


    render() {
    
       return ( 
        <div>
            <ul>
                {this.state.list.map(item => (
           <li 
           key={item.id}
           className="element" 
           onMouseEnter={() => this.handlMouseEnter(item.text)}
           onMouseLeave={this.handleMouseLeave}
           > 
           {"id - " + item.id}
           </li>
                ))}
             </ul>
                <div data-testid="text">
                    {this.state.text}
                    </div>
        </div>
       );
    }
}
