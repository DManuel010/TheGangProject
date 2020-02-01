import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
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
            <div style={{ backgroundColor: 'black', color: '#ff7979' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Hello, world!</h1>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock