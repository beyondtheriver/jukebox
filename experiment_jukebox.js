$(document).ready(function(){
   // this is a Jukebox object, which takes in 4 arguments
   function Jukebox(song_hash_custom, volume, current_song, audio_outlet){
      this.songs = song_hash_custom,
      this.volume = volume,
      this.current_song = current_song,
      this.audio_outlet = $('#player'),

      this.load = function(song){
         //this load function takes in a song and applies it to current_song
         //then logs the song and sends it to the player
         this.current_song = song;
         console.log(this.current_song);
         var audio = $('#player');
         audio.attr('src', this.current_song.url);
      },
      this.playsong = function(song){
         this.current_song = song;
         console.log(this.audio_outlet);
         $('#player')[0].play(this.current_song);
      }
      this.pause = function(){
         $('#player')[0].pause();
      }
      this.isPaused = function(){
         console.log("JUKEBOX PAUSE STATUS IS: " +$('#player')[0].paused)
         return $('#player')[0].paused;
      }

   }
   //this is a Song object with two parameters - name and url
   function Song(name, url){
      this.name = name
      this.url = url
   }

   //here is a hash for a key[value] system in which to access the songs
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

   //this is an instantiation of a Jukebox object
   var juke = new Jukebox(song_hash, 50, song_hash['a3'], $('#player'));

   //this jQuery function gets an id of the class on which it was clicked
   //i.e. you click on a picture and it gets the key for the song_hash
   //which allows current_song to be give the value of that key
   //then the load function is given the parameter of current_song
   //so it can load that song in the player.
   $(".song_image").click(function(){
      current_song = song_hash[$(this).attr("id")];
      juke.load(current_song);
      // juke.playsong(current_song);
   });

   $(".playbutton").click(function(){
      var buttonsound = $('#sound1');
      buttonsound[0].play();
      console.log(current_song);
      if (juke.isPaused()) {
         console.log("PAUSED");
         juke.playsong(current_song);
      } else {
         console.log("WAS PLAYING");
         juke.pause();
      }
   });

   //this jQuery function makes a sound whenever a button is pressed
   //also it plays a button sound
   $(".buttonpresser").click(function(){
      var buttonsound = $('#sound1');
      var buttonpressed = $(this).attr("id");
      console.log(buttonpressed);
      buttonsound[0].play();
      // buttonpressed.animate({width: "4em"}); not working - instead try css :active
      // use special css class for "pressed button" then use jQuery for
      // onmousedown add class onmouseup remove class
      $('#codedisplay').html(buttonpressed);
   })
})
