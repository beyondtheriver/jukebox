$(document).ready(function(){

   function Jukebox(song_hash_custom){
      this.songs = song_hash_custom;
      this.volume = volume;
      this.current_song = current_song;
      this.audio_outlet = $('#player');
      // var mediaElement = document.getElementById('mediaElementID');
      // var v = document.getElementsByTagName("video")[0];
      // v.play();
      // this.play() = function(){

      // }
      // this.pause() = function(){

      // }
      this.load(song) = function(){
         $(".song_image").click(function(){
            current_song = song_hash[$(this).attr("id")];
            console.log(current_song);
            var audio = $('#player');
            audio.attr('src', current_song.url);
         });
      }
   }

   function Song(name, url){
      this.name = name
      this.url = url
   }

   song_hash ={}
   song_hash['a1'] = new Song("In My Light", "songs/john_frusciante-in_my_light.mp3")
   song_hash['a2'] = new Song("My Smile Is A Rifle", "songs/john_frusciante-my_smile_is_a_rifle.mp3")
   song_hash['a3'] = new Song("Unreachable", "songs/john_frusciante-unreachable.mp3")
   song_hash['a4'] = new Song("Fanfare", "songs/john_frusciante-fanfare.mp3")
   song_hash['b1'] = new Song("Jurassic Park", "songs/weird_al-jurassic_park.mp3")
   song_hash['b2'] = new Song("Party In The CIA", "songs/weird_al-party_in_the_cia.mp3")
   song_hash['b3'] = new Song("You Don't Love Me Anymore", "songs/weird_al-you_dont_love_me_anymore.mp3")
   song_hash['b4'] = new Song("Whatever You Like", "songs/weird_al-whatever_you_like.mp3")
   song_hash['c1'] = new Song("Make Love", "songs/daft_punk-make_love.mp3")
   song_hash['c2'] = new Song("Robot Rock/Oh Yeah", "songs/daft_punk-robot_rock-oh_yeah.mp3")
   song_hash['c3'] = new Song("Something About Us", "songs/daft_punk-something_about_us.mp3")
   song_hash['c4'] = new Song("Instant Crush", "songs/daft_punk-instant_crush.mp3")
   song_hash['d1'] = new Song("Lazarus", "songs/david_bowie-lazarus.mp3")
   song_hash['d2'] = new Song("Changes", "songs/david_bowie-changes.mp3")
   song_hash['d3'] = new Song("Ashes To Ashes", "songs/david_bowie-ashes_to_ashes.mp3")
   song_hash['d4'] = new Song("Under Pressure", "songs/david_bowie-under_pressure.mp3")

   var juke = new Jukebox(song_hash);
   var current_song = a1;

   $(".song_image").click(function(){
      juke.load();
   });

})
