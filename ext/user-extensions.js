globalStoredVars = new Object();



/*
 * This function return object than can be find by JQuery Selector
 * Selenium Library 2.3 introduces an ability to register and use a custom location strategy to locate elements on the website. 
 * The new strategy must be loaded by selenium-server.jar.  
 * http://code.google.com/p/robotframework-seleniumlibrary/wiki/jQueryElementSelectors#Using_Add_Location_Strategy_keyword
 */
Selenium.prototype.doLocateElementByJQuerySelector = function(locator, inDocument, inWindow) {
    var loc = locator.replace(/&gt;/g, '>');
    loc = loc.replace(/&lt;/g, '<');
    var element;
    try {
        element = $(inDocument).find(loc);
    } catch (e) {
        return null;
    }
    if (element.length == 1 ) {
        return element[0];
    } else if(element.length > 1) {
        return element.get();
    } else {
        return null;
    }
}




/*
 * Globally store the value of a form input in a variable
 */
Selenium.prototype.doStoreValueGlobal = function(target, varName)
{
   if ( ! varName)
   {
      // Backward compatibility mode : read the ENTIRE text of the page
      // and stores it in a variable with the name of the target
      value = this.page().bodyText();
      globalStoredVars[target] = value;
      return;
   }
   var element = this.page().findElement(target);
   globalStoredVars[varName] = getInputValue(element);
}
;

/*
 * Globally store the text of an element in a variable
 */
Selenium.prototype.doStoreTextGlobal = function(target, varName)
{
   var element = this.page().findElement(target);
   globalStoredVars[varName] = getText(element);
}
;

/*
 * Globally store the value of an element attribute in a variable
 */
Selenium.prototype.doStoreAttributeGlobal = function(target, varName)
{
   globalStoredVars[varName] = this.page().findAttribute(target);
}
;

/*
 * Globally store the result of a literal value
 */
Selenium.prototype.doStoreGlobal = function(value, varName)
{
   globalStoredVars[varName] = value;
}
;

/*
 * Search through str and replace all variable references ${varName} with their
 * value in storedVars (or globalStoredVars).
 */
Selenium.prototype.replaceVariables = function(str)
{
   var stringResult = str;

   // Find all of the matching variable references
   var match = stringResult.match(/\$\{\w+\}/g);
   if ( ! match)
   {
      return stringResult;
   }

   // For each match, lookup the variable value, and replace if found
   for (var i = 0; match && i < match.length;
   i ++ )
   {
      var variable = match[i];
      // The replacement variable, with ${}
      var name = variable.substring(2, variable.length - 1);
      // The replacement variable without ${}
      var replacement = storedVars[name];
      if (replacement != undefined)
      {
         stringResult = stringResult.replace(variable, replacement);
      }
      var replacement = globalStoredVars[name];
      if (replacement != undefined)
      {
         stringResult = stringResult.replace(variable, replacement);
      }
   }
   return stringResult;
}
;





Selenium.prototype.doRandomString = function( options, varName )
{

   var length = 8;
   var type   = 'alphanumeric';
   var o = options.split( '|' );
   for ( var i = 0 ; i < 2 ; i ++ )
   {
      if ( o[i] && o[i].match( /^\d+$/ ) )
      length = o[i];

      if ( o[i] && o[i].match( /^(?:alpha)?(?:numeric)?$/ ) )
      type = o[i];
   }

   switch( type )
   {
      case 'alpha'        :
         storedVars[ varName ] = randomAlpha( length );
         break;
      case 'numeric'      :
         storedVars[ varName ] = randomNumeric( length );
         break;
      case 'alphanumeric' :
         storedVars[ varName ] = randomAlphaNumeric( length );
         break;
      default             :
         storedVars[ varName ] = randomAlphaNumeric( length );
   }
   ;
}
;

Selenium.prototype.doRandomInt = function( options, varName )
{

   var length = 8;
   var type   = 'alphanumeric';
   var o = options.split( '|' );
   for ( var i = 0 ; i < 2 ; i ++ )
   {
      if ( o[i] && o[i].match( /^\d+$/ ) )
      length = o[i];

      if ( o[i] && o[i].match( /^(?:alpha)?(?:numeric)?$/ ) )
      type = o[i];
   }

   switch( type )
   {
      case 'alpha'        :
      storedVars[ varName ] = randomNumeric( length );
      break;
      case 'numeric'      :
      storedVars[ varName ] = randomNumeric( length );
      break;
      case 'alphanumeric' :
      storedVars[ varName ] = randomNumeric( length );
      break;
      default             :
      storedVars[ varName ] = randomNumeric( length );
   }
   ;
}
;

function randomNumeric ( length )
{
   return generateRandomString( length, '0123456789'.split( '' ) );
}

function randomAlpha ( length )
{
   var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
   return generateRandomString( length, alpha );
}

function randomAlphaNumeric ( length )
{
   var alphanumeric = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
   return generateRandomString( length, alphanumeric );
}

function generateRandomString( length, chars )
{
   var string = '';
   for ( var i = 0 ; i < length ; i ++ )
   string += chars[ Math.floor( Math.random() * chars.length ) ];
   return string;
}













var sel_locstr = window.location.href; 

if(sel_locstr.indexOf("selenium-ide.xul") != -1){ //IDE mode      

var gotoLabels = null;
var whileLabels = null;

// overload the original Selenium reset function
Selenium.prototype.reset = function()
{ 

   // reset the labels
   this.initialiseLabels();
   // proceed with original reset code
   this.defaultTimeout = Selenium.DEFAULT_TIMEOUT;
   this.browserbot.selectWindow("null");
   this.browserbot.resetPopups();
}

Selenium.prototype.initialiseLabels = function()
{
   gotoLabels = {};
   whileLabels = { ends : {}, whiles : {} };
   var command_rows = [];
   var numCommands = testCase.commands.length;
   for (var i = 0; i < numCommands; ++ i)
   {
      var x = testCase.commands[i];
      command_rows.push(x);
   }
   var cycles = [];
   for( var i = 0; i < command_rows.length; i ++ )
   {
      if (command_rows[i].type == 'command')
      switch( command_rows[i].command.toLowerCase() )
      {
         case "label" :
         gotoLabels[ command_rows[i].target ] = i;
         break;
         case "while" :
         case "endwhile" :
         cycles.push( [command_rows[i].command.toLowerCase(), i] )
         break;
      }
   }
   var i = 0;
   while( cycles.length )
   {
      if( i >= cycles.length )
      {
         throw new Error( "non-matching while/endWhile found" );
      }
      switch( cycles[i][0] )
      {
         case "while" :
         if( ( i + 1 < cycles.length ) && ( "endwhile" == cycles[i + 1][0] ) )
         {
            // pair found
            whileLabels.ends[ cycles[i + 1][1] ] = cycles[i][1];
            whileLabels.whiles[ cycles[i][1] ] = cycles[i + 1][1];
            cycles.splice( i, 2 );
            i = 0;
         }
         else ++ i;
         break;
         case "endwhile" :
         ++ i;
         break;
      }
   }
}

Selenium.prototype.continueFromRow = function( row_num )
{
   if(row_num == undefined || row_num == null || row_num < 0)
   {
      throw new Error( "Invalid row_num specified." );
   }
   testCase.debugContext.debugIndex = row_num;
}

// do nothing. simple label
Selenium.prototype.doLabel = function()
{
}

Selenium.prototype.doGotolabel = function( label )
{
   if( undefined == gotoLabels[label] )
   {
      throw new Error( "Specified label '" + label + "' is not found." );
   }
   this.continueFromRow( gotoLabels[ label ] );
}

Selenium.prototype.doGoto = Selenium.prototype.doGotolabel;

Selenium.prototype.doGotoIf = function( condition, label )
{
   if( eval(condition) ) this.doGotolabel( label );
}


Selenium.prototype.doWhile = function( condition )
{
   if( ! eval(condition) )
   {
      var last_row = testCase.debugContext.debugIndex;
      var end_while_row = whileLabels.whiles[ last_row ];
      if( undefined == end_while_row ) throw new Error( "Corresponding 'endWhile' is not found." );
      this.continueFromRow( end_while_row );
   }
}

Selenium.prototype.doEndWhile = function()
{
   var last_row = testCase.debugContext.debugIndex;
   var while_row = whileLabels.ends[ last_row ] - 1;
   if( undefined == while_row ) throw new Error( "Corresponding 'While' is not found." );
   this.continueFromRow( while_row );
}

/**/




}else{ // Core mode

/*
(C) Copyright MetaCommunications, Inc. 2006.
http : // www.meta - comm.com
http : // engineering.meta - comm.com

Distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */

function map_list( list, for_func, if_func )
{
   var mapped_list = [];
   for ( var i = 0; i < list.length; ++ i )
   {
      var x = list[i];
      if( null == if_func || if_func( i, x ) )
      mapped_list.push( for_func( i, x ) );
   }
   return mapped_list;
}


// Modified to initialize GoTo labels / cycles list
HtmlRunnerTestLoop.prototype.old_initialize = HtmlRunnerTestLoop.prototype.initialize

HtmlRunnerTestLoop.prototype.initialize = function(htmlTestCase, metrics, seleniumCommandFactory)
{
   this.gotoLabels  = {
   }
   ;
   this.whileLabels = {
      ends : {
      }
      , whiles : {
      }
   }
   ;

   this.old_initialize(htmlTestCase, metrics, seleniumCommandFactory);

   this.initialiseLabels();
}

HtmlRunnerTestLoop.prototype.initialiseLabels = function()
{
   var command_rows = map_list( this.htmlTestCase.getCommandRows()
   , function(i, x) {
      return x.getCommand()
   }
   );

   var cycles = [];
   for( var i = 0; i < command_rows.length; ++ i )
   {
      switch( command_rows[i].command.toLowerCase() )
      {
         case "label" :
            this.gotoLabels[ command_rows[i].target ] = i;
            break;
         case "while" :
         case "endwhile" :
            cycles.push( [command_rows[i].command.toLowerCase(), i] )
            break;
      }
   }

   var i = 0;
   while( cycles.length )
   {
      if( i >= cycles.length )
      throw new Error( "non-matching while/endWhile found" );

      switch( cycles[i][0] )
      {
         case "while" :
         if(    ( i + 1 < cycles.length )
         && ( "endwhile" == cycles[i + 1][0] )
         )
         {
            // pair found
            this.whileLabels.ends[ cycles[i + 1][1] ] = cycles[i][1]
            this.whileLabels.whiles[ cycles[i][1] ] = cycles[i + 1][1]

            cycles.splice( i, 2 );
            i = 0;
         }
         else
         ++ i;
         break;
         case "endwhile" :
         ++ i;
         break;
      }
   }

}

HtmlRunnerTestLoop.prototype.continueFromRow = function( row_num )
{
   if(    row_num == undefined
   || row_num == null
   || row_num < 0
   )
   throw new Error( "Invalid row_num specified." );

   this.htmlTestCase.nextCommandRowIndex = row_num;
}



// do nothing. simple label
Selenium.prototype.doLabel      = function(){
}
;

Selenium.prototype.doGotolabel  = function( label ) {

   if( undefined == htmlTestRunner.currentTest.gotoLabels[label] )
   throw new Error( "Specified label '" + label + "' is not found." );

   htmlTestRunner.currentTest.continueFromRow( htmlTestRunner.currentTest.gotoLabels[ label ] );
}
;

Selenium.prototype.doGoto = Selenium.prototype.doGotolabel;


Selenium.prototype.doGotoIf = function( condition, label ) {
   if( eval(condition) )
   this.doGotolabel( label );
}



Selenium.prototype.doWhile = function( condition ) {
   if( ! eval(condition) )
   {
      var last_row = htmlTestRunner.currentTest.htmlTestCase.nextCommandRowIndex - 1
      var end_while_row = htmlTestRunner.currentTest.whileLabels.whiles[ last_row ]
      if( undefined == end_while_row )
      throw new Error( "Corresponding 'endWhile' is not found." );

      htmlTestRunner.currentTest.continueFromRow( end_while_row + 1 );
   }
}


Selenium.prototype.doEndWhile = function() {
   var last_row = htmlTestRunner.currentTest.htmlTestCase.nextCommandRowIndex - 1
   var while_row = htmlTestRunner.currentTest.whileLabels.ends[ last_row ]
   if( undefined == while_row )
   throw new Error( "Corresponding 'While' is not found." );

   htmlTestRunner.currentTest.continueFromRow( while_row );
}


} 



