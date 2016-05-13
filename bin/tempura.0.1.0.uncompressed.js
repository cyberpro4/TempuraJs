(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{}]},{},[1]);
