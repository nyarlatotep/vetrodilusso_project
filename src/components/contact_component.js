import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export class ContactPage extends Component {
	static name = ContactPage.name;

	render () {
		return (
			<>
				<section id='contact-section' style={ this.props.theme }>
					<h1>Servicio al Cliente</h1>
					<p id='contact-p'>
						Estamos para servirte; Para brindarte atención personalizada, enviarnos sugerencias o reportar alguna queja,
						<br />
						puedes contactarnos en los siguientes medios:
					</p>
					<ContactMeans />
				</section>
			</>
		);
	};
}

const ContactMeans = ( props ) => {
	const data = [
		{ key: 1, type: <b>Teléfono:</b>, means: '+52 222 5225312', icon: <FontAwesomeIcon color='rgb(105 100 102)' icon='phone-volume' /> },
		{
			key: 2, type: <b>Quejas y Sugerencias:</b>, means: <a href='vetrodilusso@hotmail.com' target='_blank' rel='mailto'>vetrodilusso@hotmail.com</a>, icon: <FontAwesomeIcon color='rgb(187 25 13)' icon='comment' />
		},
		{
			key: 3, type: <b>Ventas y Aclaraciones:</b>, means: <a href='ventas@vetrodilusso.com' target='_blank' rel='mailto'>ventas@vetrodilusso.com</a>, icon: <FontAwesomeIcon color='rgb(174 153 45)' icon={ faCommentDollar } />
		},
		{
			key: 4, type: <b>Facturación:</b>, means: <a href='facturación@vetrodilusso.com' target='_blank' rel='mailto'>facturación@vetrodilusso.com</a>, icon: <FontAwesomeIcon color='rgb(56 133 144)' icon='file-invoice' />
		},
		{ key: 5, type: <b>Facebook:</b>, means: <a href='https://facebook.com/vetrodilusso' target='_blank' rel='noreferrer'>Vetro Di Lusso</a>, icon: <FontAwesomeIcon color='rgb(10 35 186)' icon={ faFacebook } /> },
		{ key: 6, type: <b>WhatsApp:</b>, means: '+52 221 3911801', icon: <FontAwesomeIcon color='rgb(20 175 36)' icon={ faWhatsapp } /> },
	];

	return (
		<ul id='contact-ul'>
			{ data.map( el => {
				return (
					<li key={ el.key } className='contact-li'>
						{ el.icon }{ ' ' }{ el.type }{ ' ' }{ ' ' }{ ' ' }{ el.means }
					</li>
				)
			} ) }
		</ul>
	);
}

