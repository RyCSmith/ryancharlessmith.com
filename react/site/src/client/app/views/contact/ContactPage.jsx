import React from 'react';
var classNames = require('classnames');

var SITE_URLS = require('../../constants/SiteUrls');
import css from './contact_page.scss'

import { httpPost } from '../../util/SimpleHttpRequest.jsx';

class ContactPage extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			name : '',
			email : '',
			message : '',
			emailMissing : false
		};
		this.sendMail = this.sendMail.bind(this);
	}

	updateName(evt) {
		this.setState({name : evt.target.value});
		console.log(this.state);
	}

	updateEmail(evt) {
		this.setState({email : evt.target.value});
		console.log(this.state);
	}

	updateMessage(evt) {
		this.setState({message : evt.target.value});
		console.log(this.state);
	}

	sendMail() {
		if (!this.state.email || 0 === this.state.email.length) {
			this.setState({emailMissing : true});
		}
		else {
			httpPost(SITE_URLS.MAIL_API_RECEIVE(this.state.name, this.state.email, this.state.message));
			this.setState({
				name : '',
				email : '',
				message : '',
				emailMissing: false
			});
		}
	}

	render() {
		return (
	  		<div className={css.pageBox}>
			  	<div className="container">
			  		<div className="row">
			  			<div className="col-md-12">
			  				<div className={css.contactBox}>
				  				<div className={classNames(css.inputWrapper, css.inputField)}>
							        <input type='text' placeholder='Name' 
							        	value={this.state.name} 
							        	onChange={evt => this.updateName(evt)} />
							    </div>
							    <div className={classNames(css.inputWrapper, css.inputField, {[css.emailMissing] : this.state.emailMissing})}>
							        <input type='text' placeholder='Email' 
							        	value={this.state.email} 
							        	onChange={evt => this.updateEmail(evt)} />
							    </div>
							    <div className={classNames(css.inputWrapper, css.textArea)}>
							    	<textarea placeholder='Message' 
							    		value={this.state.message} 
							    		onChange={evt => this.updateMessage(evt)} />
							    </div>
							    <div className={classNames("text-center", css.submitButton)} onClick={this.sendMail} >
							    	SEND
							    </div>
							</div>
			  			</div>
			  		</div>
			  	</div>
			</div>
	  	);
	}
}
export default ContactPage;