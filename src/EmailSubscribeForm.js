import React from 'react';

const scriptURL = 'https://script.google.com/macros/s/AKfycby0p5qIQz0l9aUO02F54JexRquw7lXk-G5TCumXKS17DTesppHbkNq5-9bnQyt4YXNv/exec'
// const scriptURL = 'https://script.google.com/macros/s/AKfycby7vajHyFc-XqHM5JByW_eN6v8t1jOp_6MaUSlgMTGWam7vRr0qWH_ZUBP_a6sXwca1Lg/exec'

class EmailSubscribeForm extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = new FormData();
        data.set('email', this.state.value);

        console.log(this.state.value);

        fetch(scriptURL, { mode: 'no-cors', method: 'POST', body: data})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

        alert('Thank you for subscribing to the Shark email list');
        this.setState({value: ''});
    }

    render () {
        return (
          <form onSubmit={this.handleSubmit} className="subscribe-form">
            <input className="subscribe-input" type="text" placeholder="email" value={this.state.value} onChange={this.handleChange}/>
            <button className="subscribe-button">Join</button>
          </form>    
        )
    }
}

export default EmailSubscribeForm;