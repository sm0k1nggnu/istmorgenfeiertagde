const dateArea = document.querySelector('.header__date');

const contentArea = document.querySelector('.content');
const holidayYesNo = document.createElement('div');
holidayYesNo.setAttribute('class', 'is_holiday');
const holidayTitle = document.createElement('h2');
holidayTitle.setAttribute('class', 'holiday__title');
const holidayDescription = document.createElement('div');
holidayDescription.setAttribute('class', 'holiday__description');
const holidayLocation = document.createElement('p');
holidayLocation.setAttribute('class', 'holiday__location');


  const getDatum = (day = 'today') => {
    this.day = day;
    if (day === 'today') {
        var date = new Date();
    }
    if (day === 'tomorrow') {
        var date = new Date();
        date.setDate(date.getDate() + 1);
    }
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear();

    if(dd<10) {dd = `0${dd}`}
    if(mm<10) { mm = `0${mm}`}

    return `${dd}.${mm}.${yyyy}`
  }
  dateArea.textContent = getDatum('today')

  function deUmlaut(value){
    // value = value.toLowerCase();
    value = value.replace(/ä/g, 'ae');
    value = value.replace(/&ouml;/g, 'ö');
    value = value.replace(/ü/g, 'ue');
    value = value.replace(/ß/g, 'ss');
    // value = value.replace(/ /g, '-');
    // value = value.replace(/\./g, '');
    // value = value.replace(/,/g, '');
    // value = value.replace(/\(/g, '');
    // value = value.replace(/\)/g, '');
    return value;
  }

  const setFeiertagDetails = function(data) {
    holidayYesNo.textContent = 'Ja'
    holidayTitle.textContent = `Morgen ist ${deUmlaut(data.title)}`
    const description = holidayDescriptions.filter(desc => desc.title === data.title);
    console.log("description" + description)
    holidayDescription.textContent = `${description[0].desc}`
    let locs = data.locs
    let holidayLocs = locs.reduce(
      function(total, num){ return total + num + ',' }
    ,'')
    holidayLocation.textContent = `${deUmlaut(data.title)} ist ein Feiertag in ${holidayLocs}`
  }

  const istFeiertag = function(date = 'tomorrow') {
    holidayYesNo.textContent = 'Nein'
    let tomorrow = getDatum(date)
    const morgenFeiertag = fetch(`https://ipty.de/feiertag/api.php?do=isFeiertagInfo&datum=${tomorrow}`);
    morgenFeiertag
    .then(data => data.json())
    .then(data => {
        //console.log(data)
        data.isFeiertag == 1 ? setFeiertagDetails(data) : ''
        ;
    })
    .catch((err) => {
        console.error(err);
  })
  }

  istFeiertag()
  contentArea.appendChild(holidayYesNo);
  contentArea.appendChild(holidayTitle);
  contentArea.appendChild(holidayDescription);
  contentArea.appendChild(holidayLocation);

  let holidayDescriptions = [
    {
    "title": "Neujahr",
    "date": "2018-01-01",
    "desc": "Der Neujahrstag ist der erste Tag des Kalenderjahrs.",
    "wiki": "Neujahr"
    },
    {
    "title": "Heilige drei K&ouml;nige",
    "date": "2018-01-06",
    "desc": "Heilige Drei Könige (auch Epiphanias/Dreikönigstag) feiert den Besuch der Weisen des Jesuskindes, bzw. die Taufe Christi.",
    "wiki": "Erscheinung_des_Herrn"
    },
    {
    "title": "Karfreitag",
    "date": "2018-03-30",
    "desc": "Der Karfreitag (althochdeutsch kara, „Klage, Kummer, Trauer“) ist der Freitag vor Ostern. Er folgt auf den Gründonnerstag und geht dem Karsamstag voraus. Christen gedenken an diesem Tag des Kreuzestodes Jesu Christi.",
    "wiki": "Karfreitag"
    },
    {
      "title": "Ostersonntag",
      "date": "2018-04-02",
      "desc": "Der Ostersonntag ist im Christentum der Festtag der Auferstehung Jesu Christi, der nach dem Neuen Testament als Sohn Gottes den Tod überwunden hat. Es ist der ranghöchste Feiertag im Kirchenjahr. Mit ihm beginnen das Osterfest und die Osterzeit, zugleich beendet die liturgische Vesper des Ostersonntags das Triduum Sacrum (die heiligen drei Tage).",
      "wiki": "Ostersonntag"
      },
    {
    "title": "Ostermontag",
    "date": "2018-04-02",
    "desc": "Der Ostermontag steht als „zweiter Feiertag“ ganz im Zeichen des Osterfestes. In der katholischen Liturgie hat der Ostermontag, wie jeder einzelne Tag der Osteroktav, den Rang eines Hochfestes. Als arbeitsfreier Festtag ist der Ostermontag der Überrest einer Arbeitsruhe, die einst von Palmsonntag bis zum Weißen Sonntag dauerte, aber ab dem Hochmittelalter bereits am Mittwoch nach Ostern endete.",
    "wiki": "Ostermontag"
    },
    {
    "title": "Tag der Arbeit",
    "date": "2018-05-01",
    "desc": "Der Erste Mai wird auch als Tag der Arbeit, Maifeiertag oder Kampftag der Arbeiterbewegung bezeichnet.",
    "wiki": "Erster_Mai"
    },
    {
    "title": "Christi Himmelfahrt",
    "date": "2018-05-10",
    "desc": "Christi Himmelfahrt (griechisch ἡ Ἀνάληψις τοῦ Κυρίου ‚die Aufnahme des Herrn‘, lateinisch Ascensio Domini ‚Aufstieg des Herrn‘, in der Schweiz und Liechtenstein: Auffahrt) bezeichnet im christlichen Glauben die Rückkehr Jesu Christi als Sohn Gottes zu seinem Vater in den Himmel.",
    "wiki": "Christi_Himmelfahrt"
    },
    {
    "title": "Pfingstmontag",
    "date": "2018-05-21",
    "desc": "Pfingsten (von griech. πεντηκοστή [ἡμέρα] pentekostē [hēmera]‚ „fünfzigster [Tag]“) ist ein christliches Fest. Gefeiert wird von den Gläubigen die Entsendung des Heiligen Geistes. Es wird am 50. Tag des Osterfestkreises, also 49 Tage nach dem Ostersonntag, begangen.",
    "wiki": "Pfingsten"
    },
    {
    "title": "Fronleichnam",
    "date": "2018-05-31",
    "desc": "Das Fronleichnamsfest, lat. Sollemnitas Sanctissimi Corporis et Sanguinis Christi[1] „Fest des heiligsten Leibes und Blutes Christi“, ist ein Hochfest im Kirchenjahr der katholischen Kirche, mit dem die leibliche Gegenwart Jesu Christi im Sakrament der Eucharistie gefeiert wird.",
    "wiki": "Fronleichnam"
    },
    {
    "title": "Maria Himmelfahrt",
    "date": "2018-08-15",
    "desc": "Mariä Himmelfahrtist ein Hochfest der römisch-katholischen Kirche, bei dem Mariä Aufnahme in den Himmel gefeiert wird.",
    "wiki": "Mariä_Aufnahme_in_den_Himmel"
    },
    {
    "title": "Tag der deutschen Einheit",
    "date": "2018-10-03",
    "desc": "Der 3. Oktober wurde als Tag der Deutschen Einheit im Einigungsvertrag 1990 zum gesetzlichen Feiertag in Deutschland bestimmt. Als deutscher Nationalfeiertag erinnert er an die deutsche Wiedervereinigung, die mit dem Wirksamwerden des Beitritts der Deutschen Demokratischen Republik zur Bundesrepublik Deutschland am 3. Oktober 1990 vollendet wurde.",
    "wiki": "Tag_der_Deutschen_Einheit"
    },
    {
    "title": "Reformationstag",
    "date": "2018-10-31",
    "desc": "",
    "wiki": ""
    },
    {
    "title": "Allerheiligen",
    "date": "2018-11-01",
    "desc": "Allerheiligen ist ein christlicher Feiertag, an dem Heiligen gedacht wird, auch solchen, die nicht offiziell heilig gesprochen wurden.",
    "wiki": "Allerheiligen"
    },
    {
    "title": "Buß- und Bettag",
    "date": "2018-11-21",
    "desc": "",
    "wiki": ""
    },
    {
    "title": "1. Weihnachtstag",
    "date": "2018-12-25",
    "desc": "Weihnachten ist das Fest zur Geburt Jesu Christi und ist neben Ostern und Pfingsten der wichtigste christliche Feiertag.",
    "wiki": "Weihnachten"
    },
    {
    "title": "2. Weihnachtstag",
    "date": "2018-12-26",
    "desc": "Der zweite Weihnachtsfeiertag oder Stephanitag (Boxing Day in UK) ist der Gedenktag für den ersten christlichen M&auml;rtyrer Stephanus.",
    "wiki": "Zweiter_Weihnachtsfeiertag"
    }
    ]