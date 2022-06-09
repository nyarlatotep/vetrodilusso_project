
$( '.draggable' ).draggable( {
	scroll: true,
	scrollSensitivity: 50,
	drag: function ( event, ui ) {
		$( this ).addClass( 'dragging' );
	},
	stop: function ( event, ui ) {
		$( this ).removeClass( 'dragging' );
	}
} );

$( '.dropzone' ).droppable( {
	over: function ( event, ui ) {
		addClass( 'dragover' )
	},
	drop: function ( event, ui ) {
		removeClass( 'dragover' );
	}
} );