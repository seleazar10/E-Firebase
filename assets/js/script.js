var firebaseConfig = {
    apiKey: "AIzaSyAkm07qN8hHu3_dU590VINyS5K9TdFsIec",
    authDomain: "e-firebase1.firebaseapp.com",
    databaseURL: "https://e-firebase1.firebaseio.com",
    projectId: "e-firebase1",
    storageBucket: "",
    messagingSenderId: "595685715782",
    appId: "1:595685715782:web:f7c61145c9568295"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   var Tname = '';
//   var Tdesti = '';
//   var Tfreq = 0;
//   var Tnext = '';
//   var Taway = 0;

  $('.btn').on('click', function(event){
      event.preventDefault()

    
      Tname = $('#trainNameInput').val().trim()
      Tdesti = $('#destinationInput').val().trim()
      Ttime = $('#timeInput').val().trim()
      Tfreq= $('#freqInput').val().trim()

        
      console.log(Tname)
      console.log(Tdesti)
      console.log(Ttime)
      console.log(Tfreq)


      var database = firebase.database();

      database.ref().push({
          Tname: Tname,
          Tdesti: Tdesti,
          Ttime: Ttime,
          Tfreq: Tfreq
      })

      $('.form-control').val('');
      
  })

  