
TempuraJs = {

    init: function(){
        TempuraJs.checkJQuery();
        $(document).ready(function(){ 
            $('*[data-template-name]').hide();
        });
    },
    
    checkJQuery: function(){
        if( !jQuery )
            console.error( "TempuraJs: TempuraJs requires jQuery!!" );
    },

    clear: function( name ){
        TempuraJs.checkJQuery();
        $('[data-template-from="'+name+'"]').remove();
    },

    set: function( name , value ){
        TempuraJs.clear( name );
        TempuraJs.insert( name , value );
    },

    insert: function( name , values ){

        TempuraJs.checkJQuery();

        if( !values )
            return;

        // values is an array of values
        if( values[0] != undefined ){
            for( var i = 0; i < values.length; i++ )
                TempuraJs.insert( name , values[i] );
            return;
        }

        var template = $('[data-template-name="'+name+'"]');
        if( template.length < 1 ) {
            console.error( 'TempuraJs: no \'' + name + '\' template found' );
            return;
        }

        var newItem = template
            .clone()
            .removeAttr('data-template-name')
            .attr( 'data-template-from' , name );

        for( var key in values ){
            newItem.html( newItem.html().replace( new RegExp( '##'+key+'##' , 'g' ) , values[key] ) );
        }

        var target = $( '[data-template-from="'+name+'"]:last' );

        if( target.length > 0 )
            newItem.insertAfter( $( '[data-template-from="'+name+'"]:last' ) );
        else
            newItem.insertAfter( template );
		
		newItem.show();

    }

}

TempuraJs.init();