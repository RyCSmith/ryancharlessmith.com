import React from 'react';
var classNames = require('classnames');

import FluentImageTilesBox from '../../components/FluentImageTilesBox.jsx';
var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');
var EXTERNAL_URLS = require('../../constants/ExternalUrls');
import { httpPost } from '../../util/SimpleHttpRequest.jsx';
import css from './contact_page.scss'


const caption = "Feel free to get in touch by email using the form or via the social media links below.";

const socialImageLinks = [
	[IMAGE_URLS.GITHUB_200_200, EXTERNAL_URLS.GITHUB_URL],
	[IMAGE_URLS.INSTAGRAM_200_200, EXTERNAL_URLS.INSTAGRAM_URL],
	[IMAGE_URLS.QUORA_200_200, EXTERNAL_URLS.QUORA_URL],
	[IMAGE_URLS.LINKEDIN_200_200, EXTERNAL_URLS.LINKEDIN_URL],
	[IMAGE_URLS.FACEBOOK_200_200, EXTERNAL_URLS.FACEBOOK_URL],
	[IMAGE_URLS.STACKOVERFLOW_200_200, EXTERNAL_URLS.STACKOVERFLOW_URL],
	[IMAGE_URLS.TWITTER_200_200, EXTERNAL_URLS.TWITTER_URL]
];

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
			let data = {
				"name" : this.state.name,
				"email" : this.state.email,
				"message" : this.state.message
			}
			console.log(data);
			
			httpPost(SITE_URLS.MAIL_API_RECEIVE, data);
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
			  			<div className={classNames("col-lg-12", "text-center", css.caption)}>
			  				{caption}
			  			</div>
			  		</div>
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
			  		<hr/>
			  		<div className={classNames("row", css.socialLinksRow)}>
						<div className={classNames("col-sm-12")}>
							<FluentImageTilesBox imageUrls={socialImageLinks} />
						</div>
					</div>
			  	</div>
			</div>
	  	);
	}
}
export default ContactPage;