// ───────── DE VRAGEN VAN DE FOTOQUIZ ─────────
// Per foto: het bestand in img/ en de juiste plaats.
// Staat er waar: null, dan toont de quiz "nog in te vullen" en telt die vraag niet mee.
// "weetje" is optioneel: een zinnetje dat verschijnt nadat ze geantwoord hebben.
// De drie foute keuzes worden automatisch gekozen uit de andere plaatsen.

const QUIZ = {
  titel: "Cuimhne",
  ondertitel: "De fotoquiz",
  voor: "Yenthe & Renaat",
  van: "Quinten & Jente",
  // extra plaatsen om foute antwoorden mee te maken
  afleiders: ["Antwerpen","Gent","Leuven","Mechelen","Brugge","Turnhout","Lier","Durbuy","La Roche-en-Ardenne","Düsseldorf","Maastricht","Aken","Herentals","Lille"]
};

const FOTOS = [
  { img:"01.jpg", waar:null },
  { img:"02.jpg", waar:null },
  { img:"03.jpg", waar:null },
  { img:"04.jpg", waar:"Gent",        weetje:"Voor vierNulvier, het kunstencentrum in de Sint-Pietersnieuwstraat. Op een bank, met de voeten omhoog." },
  { img:"05.jpg", waar:null },
  { img:"06.jpg", waar:"Mechelen",    weetje:"Brouwerij Het Anker, in het Groot Begijnhof. Hier wordt Gouden Carolus gebrouwen." },
  { img:"07.jpg", waar:null },
  { img:"08.jpg", waar:null },
  { img:"09.jpg", waar:"Durbuy",      weetje:"Adventure Valley Durbuy, Halloween Mystery Forest. Wie was er het bangst?" },
  { img:"10.jpg", waar:null },
  { img:"11.jpg", waar:null },
  { img:"12.jpg", waar:"Online, via Google Meet", weetje:"Zondag 28 september, 21:39. Een tovenaar en een cowboy aan de lijn." },
  { img:"13.jpg", waar:null },
  { img:"14.jpg", waar:null,          weetje:"Groom to be. De sjerp zegt genoeg." },
  { img:"15.jpg", waar:null },
  { img:"16.jpg", waar:null },
  { img:"17.jpg", waar:null },
  { img:"18.jpg", waar:"Düsseldorf",  weetje:"De kerstmarkt langs de Rijn, met het reuzenrad op de Burgplatz." },
  { img:"19.jpg", waar:null },
  { img:"20.jpg", waar:"Antwerpen",   weetje:"Padel, op de roze velden. Wie won er?" },
  { img:"21.jpg", waar:null },
  { img:"22.jpg", waar:null,          weetje:"WANTED: Renaat Peeters, $ 44.405. Wat had hij uitgespookt?" },
  { img:"23.jpg", waar:null },
  { img:"24.jpg", waar:null },
  { img:"25.jpg", waar:null },
  { img:"26.jpg", waar:null },
  { img:"27.jpg", waar:null },
  { img:"28.jpg", waar:null },
  { img:"29.jpg", waar:null },
  { img:"30.jpg", waar:null },
  { img:"31.jpg", waar:null },
  { img:"32.jpg", waar:null },
  { img:"33.jpg", waar:null },
  { img:"34.jpg", waar:null },
];
