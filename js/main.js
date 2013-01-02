$(document).ready(function() {
  var globalholidayArray = [];
  
  function holiday(name, description, wiki, date, where)
  {
    this.name = name;
	this.description = description;
	this.wiki = wiki;
	this.date = date;
	this.where = where;
	
	globalholidayArray.push(this)
  }
  
  var holidayTitle = $("#yes-or-no");
  var holidayDescription = $(".description");
  var holidayLocation = $(".location");
  holidayDescription.hide();
  
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
  }
  easterForYear(2012);
  
  var holidays = ["newYear", "threeKings", "greenThursday", "goodFriday", "easterSun", "easterMon", "labourDay", "christHeaven", "whitsunSun", "whitsunMon", "happyCadaver", "dafuqIsDis", "mariaInTheSkyWithDiamonds", "unity", "reformation", allSaints, "prayDay", "firstDayOfChristmas", "secondDayOfChristmas"];
  
  //TODO: check if following days are free too and give hints for long weekends 
  var newYear = new holiday("Neujahr","Der Neujahrstag ist der erste Tag im Kalenderjahrs.", "Neujahr","01.01.",1);
  var threeKings = new holiday("Heilige Drei Könige", "Heilige Drei K&ouml;nige (auch Epiphanias/Dreik&ouml;nigstag) feiert den Besuch der Weisen des Jesuskindes, bzw. die Taufe Christi.","Erscheinung_des_Herrn", "06.01", "Baden-W&uuml;rttemberg, Bayern, Sachsen-Anhalt");
  var greenThursday = new holiday("Gründonnerstag", "Foobar","", "", 0); //Ostern -3
  var goodFriday = new holiday("Karfreitag", "Foobar","","", 1); //Ostern -2
  var easterSun = new holiday("Ostersonntag", "Foobar","", "", 0);
  var easterMon = new holiday("Ostermontag", "Foobar","", "", 1);
  var labourDay = new holiday("Tag der Arbeit", "Foobar","", "01.05", 1);
  var christHeaven = new holiday("Christi Himmelfahrt", "Foobar","", "", 1); //Ostern + 39
  var whitsunSun = new holiday("Pfingstsonntag", "Foobar","", "", 0); //Ostern +49
  var whitsunMon = new holiday("Pfingstmontag", "Foobar","", "", 1); //Ostern + 50
  var happyCadaver = new holiday("Fronleichname", "Foobar","", "", 0); //Ostersonntag +60
  var dafuqIsDis = new holiday("Augsburger Friedenfests", "Foobar","", "08.08.", 0);
  var mariaInTheSkyWithDiamonds = new holiday("Mariä Himmelfahrt", "Foobar","", "15.08.", 0);
  var unity = new holiday("Tag der Deutschen Einheit", "Foobar","", "03.10.", 1);
  var reformation = new holiday("Reformationstag","","31.10.",0);
  var allSaints = new holiday("Allerheiligen","Allerheiligen ist ein christlicher Feiertag, an dem Heiligen gedacht wird, auch solchen, die nicht offiziell heilig gesprochen wurden.", "Allerheiligen","01.11.",[]);
  var prayDay = new holiday("Buß- und Bettag","","",0); //Mittwoch vor 23.11.
  var firstDayOfChristmas = new holiday("1. Weihnachtsfeiertag","Weihnachten ist das Fest zur Geburt Jesu Christi und ist neben Ostern und Pfingsten der wichtigste christliche Feiertag.","Weihnachten","25.12.",[]);
  var secondDayOfChristmas = new holiday("2. Weihnachtsfeiertag","Der zweite Weihnachtsfeiertag oder Stephanitag (Boxing Day in UK) ist der Gedenktag für den ersten christlichen M&auml;rtyrer Stephanus.","Zweiter_Weihnachtsfeiertag","26.12.",[]);
  
  var easterDate = [[2012, "08.04"], [2013, "31.03"], [2014, "20.04"], [2015, "05.04"]];  
  
  //check if holiday is possible so we don't have to check all the dates every time
  //make dynamic so site updates itself on midnight
  function checkHoliday() {
	for (var i=0; i<globalholidayArray.length; i++) {
	  var holidayName = globalholidayArray[i];
	  var holidayDesc = "holidayName".description;
	  //console.log(globalholidayArray[i].name);
	    if (tmmrw == globalholidayArray[i].date) {
		  holidayTitle.html("<h1 id=\"yes-or-no\">Ja!</h1>");
		  holidayDescription.show();
		  $(".description-title").html("Und zwar ist morgen " + globalholidayArray[i].name);
	      holidayDescription.html(globalholidayArray[i].description);
	      holidayLocation.html(globalholidayArray[i].where);
		  $(".description-wiki").html("<a href=\"http://de.wikipedia.org/wiki/" + globalholidayArray[i].wiki + "\">Wikipedia-Eintrag zu " + globalholidayArray[i].name + "</a>");
	    } else {
	
	    }
	  }
    } 
  
  checkHoliday();
  
});