/*
App: Volunteer Venture
Main JS 
Created: July 17, 2023
Authors: Pyae Phyo Kyaw, Briana Loughlin, Mahammad Juber Shaik
*/

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    $('#CreateNew').click(() => {
		$("body").pagecontainer("change", "#createAcct");
    });

    /* to be removed, just using while developing UI */
    $('#temp-button').click(() => {
		$("body").pagecontainer("change", "#public-home");    
    });

    $('#temp-button-2').click(() => {
      $("body").pagecontainer("change", "#manage-acct-page");    
      });

    $('#temp-button-3').click(() => {
       $("body").pagecontainer("change", "#notif-page");    
       });    
    
    $('#temp-button-4').click(() => {
		$("body").pagecontainer("change", "#staff-home-page"); 
    });

    $('#temp-button-5').click(() => {
      $("body").pagecontainer("change", "#admin-home-page"); 
      });

    /* footer navigation links */

    

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
