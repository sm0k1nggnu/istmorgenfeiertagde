$(document).ready(function() {

  //EASTERDATE
  function easter (year) {
    this.year = year;
    var easterDate = new date(easterDates[year].day/easterDates[year].month/year)
    return easterDate;
  }

  var daystillnextholiday = $(".daystillnext");
  var globalholidayArray = [];
  var holidayTitle = $("#yes-or-no");
  var holidayDescription = $(".description");
  var holidayLocation = $(".location");

  //TIME
  var currentTime = new Date();
  var hrs = currentTime.getHours();
  var mnts = currentTime.getMinutes();
  var scnds = currentTime.getSeconds();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  var dayOfWeek = currentTime.getDay();
  var dOWInWords = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");
  var hrs = ((hrs < 10) ? "0" + hrs : hrs); //add a 0 to 1 digit numbers
  var mnts = ((mnts < 10) ? "0" + mnts : mnts);
  var scnds = ((scnds < 10) ? "0" + scnds : scnds);
  var thisDay = day +  "." + month + ".";
  //tomorrow's date
  currentTime.setDate(currentTime.getDate() + 1);
  var dayPlus = currentTime.getDate();
  var monthPlus = currentTime.getMonth()+1;
  var dayPlus = ((dayPlus < 10) ? "0" + dayPlus : dayPlus);
  var monthPlus = ((monthPlus < 10) ? "0" + monthPlus : monthPlus);
  var tmmrw = dayPlus +  "." + monthPlus + ".";
  
  /*//dayaftertomorrow
  currentTime.setDate(currentTime.getDate() + 2);
  var dayPlus = currentTime.getDate();
  var monthPlus = currentTime.getMonth()+1;
  var dayPlus = ((dayPlus < 10) ? "0" + dayPlus : dayPlus);
  var monthPlus = ((monthPlus < 10) ? "0" + monthPlus : monthPlus);
  var dayafter = dayPlus +  "." + monthPlus + ".";*/

  holidayTitle.html("<h1 id=\"yes-or-no\"><i class='fa fa-frown-o'></i><br>Leider nein</h1>");
  //tmmrw = "01.05.";
  


  //show todays date
  $(".date").html("Heute ist " + dOWInWords[dayOfWeek] + ", der " + day + "." + month + "." + year); //change date to today 

  //state abbrevations 
  var states = {
    'BY' : 'Bayern',
    'BW' : 'Baden-Würtemberg',
    'BE' : 'Berlin',
    'BB' : 'Brandenburg',
    'HB' : 'Bremen',
    'HH' : 'Hamburg',
    'HE' : 'Hessen',
    'MV' : 'Mecklenburg-Vorpommern',
    'NI' : 'Niedersachsen',
    'NW' : 'NRW',
    'RP' : 'Rheinland-Pfalz',
    'SL' : 'Saarland',
    'SN' : 'Sachsen',
    'ST' : 'Sachsen-Anhalt',
    'SH' : 'Schleswig-Holstein',
    'TH' : 'Thüringen',
    'AUG': 'nur in Augsburg',
    'ALL': 'Deutschlandweiter Feiertag'
  };
  
  //get easter date (easter sunday), important for most holidays with variable dates
  function easterForYear (y) {
    var a = year % 19;
    var b = Math.floor(year / 100);
    var c = year % 100;
    var d = Math.floor(b / 4); 
    var e = b % 4;
    var f = Math.floor((b + 8) / 25);
    var g = Math.floor((b - f + 1) / 3); 
    var h = (19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4);
    var k = c % 4;
    var l = (32 + 2 * e + 2 * i - h - k) % 7;
    var m = Math.floor((a + 11 * h + 22 * l) / 451);
    var n0 = (h + l + 7 * m + 114)
    var n = Math.floor(n0 / 31) - 1;
    var p = n0 % 31 + 1;
    var date = new Date(year,n,p);
    var easterMonth = date.getMonth() + 1;
    var easterDay = date.getDate();
    //alert( easterDay + "." + easterMonth); 
    var easterObj = {
      day   : easterDay,
      month : easterMonth
    }
  return date;
  }
  
  function easterDates () {
    var os = easterForYear(year);

    var gruendo = new Date(os)
    gruendo.setDate(gruendo.getDate()-2);
    var gd = new Date(gruendo);  

    var karfreitag = new Date(os)
    karfreitag.setDate(karfreitag.getDate()-2);
    var kf = new Date(karfreitag);  

    var ostermontag = new Date(os)
    ostermontag.setDate(ostermontag.getDate()+1);
    var om = new Date(ostermontag);  

    var christiHimmelfahrt = new Date(os)
    christiHimmelfahrt.setDate(christiHimmelfahrt.getDate()+39);
    var ch = new Date(christiHimmelfahrt);  

    var pfingstSonntag = new Date(os)
    pfingstSonntag.setDate(pfingstSonntag.getDate()+49);
    var ps = new Date(pfingstSonntag);  

    var pfingstMontag = new Date(os)
    pfingstMontag.setDate(pfingstMontag.getDate()+50);
    var pm = new Date(pfingstMontag);  

    var fronleichnam = new Date(os)
    fronleichnam.setDate(fronleichnam.getDate()+60);
    var fl = new Date(fronleichnam);  

    var dates = {
      'gd' : "" + gd.getDate() + '.0' + (gd.getMonth() + 1) + '.' + "",
      'kf' : "" + kf.getDate() + '.0' + (kf.getMonth() + 1) + '.' + "",
      'os' : "" + os.getDate() + '.0' + (os.getMonth() + 1) + '.' + "",
      'om' : "" + om.getDate() + '.0' + (om.getMonth() + 1) + '.' + "",
      'ch' : "" + ch.getDate() + '.0' + (ch.getMonth() + 1) + '.' + "",
      'ps' : "" + ps.getDate() + '.0' + (ps.getMonth() + 1) + '.' + "",
      'pm' : "" + pm.getDate() + '.0' + (pm.getMonth() + 1) + '.' + "",
      'fl' : "" + fl.getDate() + '.0' + (fl.getMonth() + 1) + '.' + "",
    }
    return dates;
  }

 console.log(easterDates()['kf']);

  function holiday(name, description, wiki, date, where) {
    this.name = name;
    this.description = description;
    this.wiki = wiki;
    this.date = date;
    this.where = where;
    globalholidayArray.push(this)
  }

  //TODO: check if following days are free too and give hints for long weekends 
  //1 means: holiday everywhere
  var newYear       = new holiday("Neujahr",
                                  "Der Neujahrstag ist der erste Tag des Kalenderjahrs.", 
                                  "Neujahr",
                                  "01.01.",
                                  [states['ALL']],
                                  "");
  var threeKings    = new holiday("Heilige Drei Könige", 
                                  "Heilige Drei Könige (auch Epiphanias/Dreikönigstag) feiert den Besuch der Weisen des Jesuskindes, bzw. die Taufe Christi.",
                                  "Erscheinung_des_Herrn", 
                                  "06.01.", 
                                  [states['BY'], states['BW'], states['ST']],
                                  "");
  var greenThursday = new holiday("Gründonnerstag", 
                                  "Gründonnerstag ist der fünfte Tag der Karwoche. An ihm gedenken die christlichen Kirchen des letzten Abendmahles Jesu mit den zwölf Aposteln am Vorabend seiner Kreuzigung.",
                                  "Gründonnerstag", 
                                  easterDates()['gd'],
                                  [states['ALL']], 
                                  "Kein gesetzlicher Feiertag, aber in Baden-Württemberg oft schulfrei."); //Ostern -3
  var goodFriday    = new holiday("Karfreitag", 
                                  "Der Karfreitag (althochdeutsch kara, „Klage, Kummer, Trauer“) ist der Freitag vor Ostern. Er folgt auf den Gründonnerstag und geht dem Karsamstag voraus. Christen gedenken an diesem Tag des Kreuzestodes Jesu Christi.",
                                  "Karfreitag",
                                  //easterForYear(year).day,
                                  easterDates()['kf'], 
                                  [states['ALL']],
                                  ""); //Ostern -2
  var easterSun     = new holiday("Ostersonntag", 
                                  "Der Ostersonntag ist im Christentum der Festtag der Auferstehung Jesu Christi. Es ist der ranghöchste Feiertag im Kirchenjahr. Mit ihm beginnen das Osterfest und die Osterzeit.",
                                  "Ostersonntag", 
                                  easterDates()['os'], 
                                  [states['ALL']],
                                  "");
  var easterMon     = new holiday("Ostermontag", 
                                  "",
                                  "Ostermontag", 
                                  easterDates()['om'],  
                                  [states['ALL']],
                                  "");
  var labourDay     = new holiday("Tag der Arbeit", 
                                  "Der Erste Mai wird auch als Tag der Arbeit, Maifeiertag oder Kampftag der Arbeiterbewegung bezeichnet.",
                                  "Erster_Mai", 
                                  "01.05.",
                                  [states['ALL']], 
                                  "Feiertag in ganz Deutschland, Österreich und der Schweiz");
  var christHeaven  = new holiday("Christi Himmelfahrt", 
                                  "Christi Himmelfahrt (griechisch ἡ Ἀνάληψις τοῦ Κυρίου ‚die Aufnahme des Herrn‘, lateinisch Ascensio Domini ‚Aufstieg des Herrn‘, in der Schweiz und Liechtenstein: Auffahrt) bezeichnet im christlichen Glauben die Rückkehr Jesu Christi als Sohn Gottes zu seinem Vater in den Himmel.",
                                  "Christi_Himmelfahrt", 
                                  easterDates()['ch'], 
                                  [states['ALL']],
                                  ""); //Ostern + 39
  var whitsunSun    = new holiday("Pfingstsonntag", 
                                  "Foobar",
                                  "", 
                                  easterDates()['ps'], 
                                  [states['ALL']],
                                  ""); //Ostern +49
  var whitsunMon    = new holiday("Pfingstmontag", 
                                  "Pfingsten (von griech. πεντηκοστή [ἡμέρα] pentekostē [hēmera]‚ „fünfzigster [Tag]“) ist ein christliches Fest. Gefeiert wird von den Gläubigen die Entsendung des Heiligen Geistes. Es wird am 50. Tag des Osterfestkreises, also 49 Tage nach dem Ostersonntag, begangen.",
                                  "Pfingsten", 
                                  easterDates()['pm'],  
                                  [states['ALL']],
                                  ""); //Ostern + 50
  var happyCadaver  = new holiday("Fronleichnam", 
                                  "Das Fronleichnamsfest, lat. Sollemnitas Sanctissimi Corporis et Sanguinis Christi „Fest des heiligsten Leibes und Blutes Christi“, ist ein Hochfest im Kirchenjahr der katholischen Kirche, mit dem die leibliche Gegenwart Jesu Christi im Sakrament der Eucharistie gefeiert wird.",
                                  "Fronleichnam", 
                                  easterDates()['fl'], 
                                  [states['BW'],states['BY'],states['HE'], states['NI'], states['NW'],states['SL']],
                                  ""); //Ostersonntag +60
  var augsburgerPeace    = new holiday("Augsburger Friedenfest", 
                                  "",
                                  "", 
                                  "08.08.",
                                  [states['AUG']],
                                  "");
  var mariaHeaven   = new holiday("Mariä Himmelfahrt", 
                                  "Mariä Himmelfahrtist ein Hochfest der römisch-katholischen Kirche, bei dem Mariä Aufnahme in den Himmel gefeiert wird.",
                                  "Mariä_Aufnahme_in_den_Himmel", 
                                  "15.08.", 
                                  [states['SL']],
                                  "Feiertag im Saarland und in katholischen Teilen Bayerns");
  var unity         = new holiday("Tag der Deutschen Einheit", 
                                  "Der 3. Oktober wurde als Tag der Deutschen Einheit im Einigungsvertrag 1990 zum gesetzlichen Feiertag in Deutschland bestimmt. Als deutscher Nationalfeiertag erinnert er an die deutsche Wiedervereinigung, die mit dem Wirksamwerden des Beitritts der Deutschen Demokratischen Republik zur Bundesrepublik Deutschland am 3. Oktober 1990 vollendet wurde.",
                                  "Tag_der_Deutschen_Einheit", 
                                  "03.10.",
                                  [states['ALL']],
                                  "In der gesamten BRD");
  var reformation   = new holiday("Reformationstag",
                                  "",
                                  "",
                                  "31.10.",
                                  [states['BB'],states['MV'],states['SN'],states['ST'],states['TH']],
                                  "");
  var allSaints     = new holiday("Allerheiligen",
                                  "Allerheiligen ist ein christlicher Feiertag, an dem Heiligen gedacht wird, auch solchen, die nicht offiziell heilig gesprochen wurden.", 
                                  "Allerheiligen",
                                  "01.11.",
                                  [states['BW'],states['BY'],states['NW'],states['RP'],states['SL']],
                                  "");
  var prayDay       = new holiday("Buß- und Bettag",
                                  "",
                                  "",
                                  "18.11",
                                  "Gemäß Art. 4 Nr. 3 des Bayerischen Feiertagsgesetzes[7] entfällt im gesamten Bundesland am Buß- und Bettag an allen Schulen der Unterricht."); //Mittwoch vor 23.11.
  var firstDayOfChristmas  = new holiday("1. Weihnachtsfeiertag",
                                         "Weihnachten ist das Fest zur Geburt Jesu Christi und ist neben Ostern und Pfingsten der wichtigste christliche Feiertag.",
                                         "Weihnachten",
                                         "25.12.",
                                         [states['ALL']],
                                         "");
  var secondDayOfChristmas = new holiday("2. Weihnachtsfeiertag",
                                         "Der zweite Weihnachtsfeiertag oder Stephanitag (Boxing Day in UK) ist der Gedenktag für den ersten christlichen M&auml;rtyrer Stephanus.",
                                         "Zweiter_Weihnachtsfeiertag",
                                         "26.12.",
                                         [states['ALL']],
                                         ""); 
  
  //console.log(states[0]);
  //console.log(globalholidayArray.length);
  for (i=0;i<globalholidayArray.length;i++) {
    $('#debug').append('<pre>' + JSON.stringify(globalholidayArray[i]) +'</pre>');
  }

  //finds next holiday if tomorrow is none
  function findNextHoliday(tmmrw, i) {
  if (tmmrw == globalholidayArray[i].date) {
    tmmrw++;
    //console.log(tmmrw);
    findNextHoliday(tmmrw, i);
  } else {
    //console.log(tmmrw);
  }
  }
  
  //check if holiday is possible so we don't have to check all the dates every time
  //TODO: make dynamic so site updates itself on midnight
  /*function checkHoliday(thisDay) {

  }*/


  function checkHoliday() {
    
    for (var i=0; i<globalholidayArray.length; i++) {
      var holidayName = globalholidayArray[i];
      var holidayDesc = "holidayName".description;
      console.log(globalholidayArray[i].name + globalholidayArray[i].date + globalholidayArray[i].where);
      console.log(tmmrw + " " + globalholidayArray[i].date)
        if (tmmrw == globalholidayArray[i].date) {
          //console.log("Ja!" + tmmrw + " = " + globalholidayArray[i].date);
          holidayTitle.html("<h1 id=\"yes-or-no\">Ja!</h1>");
          holidayDescription.show();
          $(".description-title").html("Und zwar ist morgen " + globalholidayArray[i].name);
          $('.twitter-share-button').data('[text = ""]')
          holidayDescription.html(globalholidayArray[i].description);
          holidayLocation.html("Feiertag in: " + globalholidayArray[i].where);
          $(".description-wiki").html("<a href=\"http://de.wikipedia.org/wiki/" + globalholidayArray[i].wiki + "\">Wikipedia-Eintrag zu " + globalholidayArray[i].name + "</a>");
        } else {
          if (thisDay == globalholidayArray[i].date) {
            holidayTitle.html("<h1 id=\"yes-or-no\">Nein, aber heute.</h1>");
          } else {
            //console.log(tmmrw + " != " + globalholidayArray[i].date);
            findNextHoliday(tmmrw, i);
            daystillnextholiday.show();
          }

          } 
        }
  } 

  checkHoliday();
  
});

//Angular
angular.module('weekendApp', [])
.controller('WeekendController', function($scope){
    $scope.optionsD = [
      { label: "Montag",     value: 1},
      { label: "Dienstag",   value: 2},
      { label: "Mittwoch",   value: 3},
      { label: "Donnerstag", value: 4},
      { label: "Freitag",    value: 5},
      { label: "Samstag",    value: 6},
      { label: "Sonntag",    value: 7}
    ];
    var d=new Date()
    var today = d.getDate() + 1
    $scope.weekdaySel = $scope.optionsD[4];

    $scope.daysUntil  = function() {return 5 - $scope.weekdaySel.value;;};
    
    $scope.optionsT = [
      { label: "19", value: 7 },
      { label: "18", value: 6 },
      { label: "17", value: 5 },
      { label: "16", value: 4 },
      { label: "15", value: 3 },
    ];
  $scope.timeSel = $scope.optionsT[2]; 
  })
.directive('myCurrentTime', function($timeout, dateFilter) {
  return function(scope, element, attrs) {
    var format,
        timeoutId;
    function updateTime() {
      element.text(dateFilter(new Date(), format));
    }
    scope.$watch(attrs.myCurrentTime, function(value) {
      format = value;
      updateTime();
    });

    function updateLater() {
      timeoutId = $timeout(function() {
        updateTime();
        updateLater();
      }, 1000);
    }
    element.bind('$destroy', function() {
      $timeout.cancel(timeoutId);
    });
    updateLater();
  }
  });


//JS
function Ctrl2($scope,$timeout) {
  $scope.format = 'dd.MM.yyyy, HH:mm:ss'; 
  angular.element(document).ready(function () {
     var ynm = $("#yes-no-maybe");
     bla = angular.element('[ng-controller=WeekendController]').scope()
     //console.log(bla.weekdays)
     randColor = function() {
      colors = ["red", "green", "blue", "orange", "pink", "yellow", "brown", "grey", "black"]
      randNo = Math.floor(Math.random()*10);
     return colors[randNo]
     };
  
  var currentTime = new Date();
  var hrs = currentTime.getHours();
  var mnts = currentTime.getMinutes();
  var scnds = currentTime.getSeconds();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  var dayOfWeek = currentTime.getDay();
  var dOWInWords = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");
  var hrs = ((hrs < 10) ? "0" + hrs : hrs); //add a 0 to 1 digit numbers
  var mnts = ((mnts < 10) ? "0" + mnts : mnts);
  var scnds = ((scnds < 10) ? "0" + scnds : scnds);
  
  currentTime.setDate(currentTime.getDate() + 1);
  var dayPlus = currentTime.getDate();
  var monthPlus = currentTime.getMonth()+1;
  var dayPlus = ((dayPlus < 10) ? "0" + dayPlus : dayPlus);
  var monthPlus = ((monthPlus < 10) ? "0" + monthPlus : monthPlus);
  
  var tmmrw = dayPlus +  "." + monthPlus + ".";
  var thisDay = day +  "." + month + ".";

  })
};