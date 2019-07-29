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



var firebase = firebase.database();


//on-click to register train/////////////
  $('.btn').on('click', function(event){
      event.preventDefault()

   //gather tain form input data/////////////////
      Tname = $('#trainNameInput').val().trim()
      Tdesti = $('#destinationInput').val().trim()
      Ttime = $('#timeInput').val().trim()
      Tfreq= $('#freqInput').val().trim()

        
      console.log(Tname)
      console.log(Tdesti)
      console.log(Ttime)
      console.log(Tfreq)


    ///push data to firebase/////////////////////

     firebase.ref().push({
          Tname: Tname,
          Tdesti: Tdesti,
          Ttime: Ttime,
          Tfreq: Tfreq
      })

      //empty input after click////////////////

      $('.form-control').val('');
      
  })


//lister for each child added/////////////////////////
firebase.ref().on('child_added', function(snapshot){
    var Tname = snapshot.val().Tname
    var Tdesti = snapshot.val().Tdesti
    var Ttime = snapshot.val().Ttime
    var Tfreq = snapshot.val().Tfreq


    var convertedTime = moment(Ttime,'HH:mm');
      console.log( convertedTime);
      var currentTime = moment();
      var timeDiff = currentTime.diff(moment(convertedTime),"minutes");
      console.log(timeDiff)
      var timeRemainder = timeDiff % Tfreq;
      var mnsBeforeNext = Tfreq - timeRemainder;
      var tNext = moment().add(mnsBeforeNext, 'minutes');
      
      var nextArrival = tNext.format("HH:mm")

    var row = $('<tr>')
    row.append(
        $('<td>').text(Tname),
        $('<td>').text(Tdesti),        
        $('<td>').text(Tfreq),
        $('<td>').text(nextArrival),
        $('<td>').text(tNext),

    )

    ///append data/////////////////


    $('tbody').append(row)
})

