<!DOCTYPE html>
<html>
   <head>
   <script>

      function Jukebox(song, audio_outlet) {
         this.song = song,
         this.audio_outlet = document.getElementById("audio"),
         this.play = function(song) {
            audio.play();
         }
      }
   </script>
var juke = new Jukebox(file:///Users/zacharyuzupis/Documents/jukebox/songs/daft_punk-instant_crush.mp3)


                  div id="controller">
                  <audio id="player" controls>
                     <source src="" type="audio/mpeg">
                     Your browser does not support the audio element.
                  </audio>
