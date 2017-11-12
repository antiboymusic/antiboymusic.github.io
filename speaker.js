
$( document ).ready(function() {
   var getaudio = $('#player')[0];
   /* Get the audio from the player (using the player's ID), the [0] is necessary */
   var mouseovertimer;
   /* Global variable for a timer. When the mouse is hovered over the speaker it will start playing after hovering for 1 second, if less than 1 second it won't play (incase you accidentally hover over the speaker) */
   var audiostatus = 'off';
   /* Global variable for the audio's status (off or on). It's a bit crude but it works for determining the status. */

   $(document).on('click touchend', '.speaker', function() {
     /* Touchend is necessary for mobile devices, click alone won't work */
       if (audiostatus == 'off') {
         $('.speaker').addClass('speakerplay');
         getaudio.load();
         getaudio.play();
         window.clearTimeout(mouseovertimer);
         audiostatus = 'on';
         $('.speaker').fadeOut(1000)
         return false;
       } else if (audiostatus == 'on') {
         $('.speaker').addClass('speakerplay');

         $('.speaker').fadeOut()
         getaudio.play()
       }


    });
});
