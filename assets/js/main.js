$(document).ready(function() {

  //alert("bla");
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
  
  //holidayDescription.hide();
  //daystillnextholiday.hide();

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
  
  function holiday(name, description, wiki, date, where)
  {
    this.name = name;
	 this.description = description;
	 this.wiki = wiki;
	 this.date = date;
	 this.where = where;
	
	 globalholidayArray.push(this)
  }
    

  day++;
  $(".date").html("Heute ist " + dOWInWords[dayOfWeek] + ", der " + day + "." + month + "." + year); //change date to today 

  var states = [
	["BY", "Bayern"],
	["BW", "Baden-Würtemberg"],
	["BE", "Berlin"],
	["BB", "Brandenburg"],
	["HB", "Bremen"],
	["HH", "Hamburg"],
	["HE", "Hessen"],
	["MV", "Mecklenburg-Vorpommern"],
	["NI", "Niedersachsen"],
	["NW", "NRW"],
	["RP", "Rheinland-Pfalz"],
	["SL", "Saarland"],
	["SN", "Sachsen"],
	["ST", "Sachsen-Anhalt"],
	["SH", "Schleswig-Holstein"],
	["TH", "Thüringen"],
  ]
  
  //get easter date, important for most holidays with variable dates
  function easterForYear (year) {
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
  return date;
  }
  //console.log(easterForYear(2014));
  
    //TODO: check if following days are free too and give hints for long weekends 
  var newYear = new holiday("Neujahr","Der Neujahrstag ist der erste Tag im Kalenderjahrs.", "Neujahr","01.01.",1);
  var threeKings = new holiday("Heilige Drei K&ouml;nige", "Heilige Drei K&ouml;nige (auch Epiphanias/Dreik&ouml;nigstag) feiert den Besuch der Weisen des Jesuskindes, bzw. die Taufe Christi.","Erscheinung_des_Herrn", "06.01.", "Baden-W&uuml;rttemberg, Bayern, Sachsen-Anhalt");
  var greenThursday = new holiday("Gründonnerstag", "Gründonnerstag ist der fünfte Tag der Karwoche. An ihm gedenken die christlichen Kirchen des letzten Abendmahles Jesu mit den zwölf Aposteln am Vorabend seiner Kreuzigung.","Gründonnerstag", "28.03.", "Kein gesetzlicher Feiertag, aber in Baden-Württemberg oft schulfrei."); //Ostern -3
  var goodFriday = new holiday("Karfreitag", "Der Karfreitag (althochdeutsch kara, „Klage, Kummer, Trauer“) ist der Freitag vor Ostern. Er folgt auf den Gründonnerstag und geht dem Karsamstag voraus. Christen gedenken an diesem Tag des Kreuzestodes Jesu Christi.","Karfreitag","18.4.", "deutschlandweit"); //Ostern -2
  var easterSun = new holiday("Ostersonntag", "Der Ostersonntag ist im Christentum der Festtag der Auferstehung Jesu Christi. Es ist der ranghöchste Feiertag im Kirchenjahr. Mit ihm beginnen das Osterfest und die Osterzeit.","Ostersonntag", "20.4.", "deutschlandweit");
  var easterMon = new holiday("Ostermontag", "","Ostermontag", "21.04.", "deutschlandweit");
  var labourDay = new holiday("Tag der Arbeit", "Der Erste Mai wird auch als Tag der Arbeit, Maifeiertag oder Kampftag der Arbeiterbewegung bezeichnet.","Erster_Mai", "01.05.", "Feiertag in ganz Deutschland, Österreich und der Schweiz");
  var christHeaven = new holiday("Christi Himmelfahrt", "Christi Himmelfahrt (griechisch ἡ Ἀνάληψις τοῦ Κυρίου ‚die Aufnahme des Herrn‘, lateinisch Ascensio Domini ‚Aufstieg des Herrn‘, in der Schweiz und Liechtenstein: Auffahrt) bezeichnet im christlichen Glauben die Rückkehr Jesu Christi als Sohn Gottes zu seinem Vater in den Himmel.","Christi_Himmelfahrt", "29.05.", "deutschlandweit"); //Ostern + 39
  var whitsunSun = new holiday("Pfingstsonntag", "Foobar","", "", 0); //Ostern +49
  var whitsunMon = new holiday("Pfingstmontag", "Pfingsten (von griech. πεντηκοστή [ἡμέρα] pentekostē [hēmera]‚ „fünfzigster [Tag]“) ist ein christliches Fest. Gefeiert wird von den Gläubigen die Entsendung des Heiligen Geistes. Es wird am 50. Tag des Osterfestkreises, also 49 Tage nach dem Ostersonntag, begangen.","Pfingsten", "9.6.", "deutschlandweit"); //Ostern + 50
  var happyCadaver = new holiday("Fronleichnam", "Das Fronleichnamsfest, lat. Sollemnitas Sanctissimi Corporis et Sanguinis Christi[1] „Fest des heiligsten Leibes und Blutes Christi“, ist ein Hochfest im Kirchenjahr der katholischen Kirche, mit dem die leibliche Gegenwart Jesu Christi im Sakrament der Eucharistie gefeiert wird.","Fronleichnam", "19.6.", "Feiertag in BW, BY, HE, NI, NW und SL"); //Ostersonntag +60
  var dafuqIsDis = new holiday("Augsburger Friedenfests", "Foobar","", "08.08.", 0);
  var mariaInTheSkyWithDiamonds = new holiday("Mariä Himmelfahrt", "Mariä Himmelfahrtist ein Hochfest der römisch-katholischen Kirche, bei dem Mariä Aufnahme in den Himmel gefeiert wird.","Mariä_Aufnahme_in_den_Himmel", "15.08.", "Feiertag im Saarland und in katholischen Teilen Bayerns");
  var unity = new holiday("Tag der Deutschen Einheit", "Foobar","", "03.10.", 1);
  var reformation = new holiday("Reformationstag","","31.10.",0);
  var allSaints = new holiday("Allerheiligen","Allerheiligen ist ein christlicher Feiertag, an dem Heiligen gedacht wird, auch solchen, die nicht offiziell heilig gesprochen wurden.", "Allerheiligen","01.11.","Feiertag in Baden-Württemberg, Bayern, NRW, Rheinland-Pfalz und im Saarland");
  var prayDay = new holiday("Buß- und Bettag","","",0); //Mittwoch vor 23.11.
  var firstDayOfChristmas = new holiday("1. Weihnachtsfeiertag","Weihnachten ist das Fest zur Geburt Jesu Christi und ist neben Ostern und Pfingsten der wichtigste christliche Feiertag.","Weihnachten","25.12.",[]);
  var secondDayOfChristmas = new holiday("2. Weihnachtsfeiertag","Der zweite Weihnachtsfeiertag oder Stephanitag (Boxing Day in UK) ist der Gedenktag für den ersten christlichen M&auml;rtyrer Stephanus.","Zweiter_Weihnachtsfeiertag","26.12.",[]); 
  
  //finds next holiday if tomorrow is none
  function findNextHoliday(tmmrw, i) {
	if (tmmrw == globalholidayArray[i].date) {
		tmmrw++;
		console.log(tmmrw);
		findNextHoliday(tmmrw, i);
	} else {
		console.log(tmmrw);
	}
  }
  
  //check if holiday is possible so we don't have to check all the dates every time
  //TODO: make dynamic so site updates itself on midnight
  function checkHoliday() {
	for (var i=0; i<globalholidayArray.length; i++) {
	  var holidayName = globalholidayArray[i];
	  var holidayDesc = "holidayName".description;
	  //console.log(globalholidayArray[i].name + globalholidayArray[i].date + globalholidayArray[i].where);
	  //console.log(tmmrw + " " + globalholidayArray[i].date)
	    if (tmmrw == globalholidayArray[i].date) {
		  holidayTitle.html("<h1 id=\"yes-or-no\">Ja!</h1>");
		  holidayDescription.show();
		  $(".description-title").html("Und zwar ist morgen " + globalholidayArray[i].name);
	      holidayDescription.html(globalholidayArray[i].description);
	      holidayLocation.html(globalholidayArray[i].where);
		  $(".description-wiki").html("<a href=\"http://de.wikipedia.org/wiki/" + globalholidayArray[i].wiki + "\">Wikipedia-Eintrag zu " + globalholidayArray[i].name + "</a>");
	    } else {
			findNextHoliday(tmmrw, i);
			//console.log(tmmrw);
			daystillnextholiday.show();
	    }
	  }
    } 

  checkHoliday();
  
});