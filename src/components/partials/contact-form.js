import React, { Component } from 'react';
import posed from 'react-pose';

const encode = (data) => {
  return Object.keys(data)
  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  .join('&')
};

const SuccessMessage = posed.div({
  show: {
    applyAtStart: { display: 'flex' },
    opacity: 1,
    staggerChildren: 100
  },
  hide: {
    applyAtStart: { display: 'none' },
    opacity: 0
  }
});

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      form: {},
      messageSent: false,
      sending: false
    };
  }
  
  componentDidMount() {
    const alreadySent = sessionStorage.getItem('hasSentMessage');
    this.setState({ messageSent: !!alreadySent });
  }

  handleContact = (e) => {
    e.preventDefault();
    const formName = e.target.getAttribute('name');
    const { messageSent, sending, form } = this.state;
    if (messageSent || sending) return;
    
    this.setState({sending: true});
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formName, ...form }),
    })
    .then((res) => {
      this.setState({sending: false});
      if (res.status !== 200) return;
      
      // Session storage to prevent multiple messages
      this.setState({messageSent: true});
      sessionStorage.setItem('hasSentMessage', true);
    })
    .catch((err) => alert(err));
  }

  handleChange = (e) => { 
    const form = this.state.form;
    this.setState({ form: {...form, [e.target.name]: e.target.value}}); 
  }

  render() {
    const { name, email, message, messageSent } = this.state;
    const { handleContact, handleChange } = this;

    return (
      <form id="contact-form" 
        name="contact" 
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleContact}>

        <div className="o-media o-media--res u-mb-28">
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label id='botField'>Don't fill this out:</label>
            <input for='botField' name="bot-field" onChange={handleChange}/>
          </div>

          <div className="o-media__fluid u-mr-40 u-mb-20">
            <label id="name">Name*</label>
            <input
              type="text"
              for="name"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="Jason Yeung"
              required
            />
          </div>

          <div className="o-media__fluid">
            <label id="email">E-mail*</label>
            <input
              type="email"
              for="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="your-email@email.com"
              required
            />
          </div>
        </div>

        <label id="mes">Message</label>
        <textarea
          for="mes"
          name="message"
          onChange={handleChange}
          value={message}
          placeholder="Hey Jason, it's me, Jason. I want to talk to you about something."
          required
        />

        <button className="u-color-white u-mt-28">Send Message</button>

        <SuccessMessage className="c-contact-form__success" pose={(messageSent) ? "show" : "hide"}>
          <div className="c-contact-form__success-message">
            <div className="c-contact-form__check"></div>
            <h6 className="u-color-white u-mb-4">Your message has been sent!</h6>
            <p className="u-color-gray-dark">Thanks for your message! I will try to respond to any necessary replies within 24 &ndash; 48 hours! Sincerely, Jason.</p>
          </div>
        </SuccessMessage>
      </form>
    )
  }
}

export default ContactForm
