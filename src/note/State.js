import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date() ,
            counter:1,
            increment:2,
            counter :0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }   

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>1 It is {this.state.date.toLocaleTimeString()}.</h2>
                <FormattedDate date={this.state.date} />
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}



function FormattedDate(props) {
    return <h2>2 It is {props.date.toLocaleTimeString()}.</h2>;
  }

export default Clock;