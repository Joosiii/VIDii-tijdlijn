# Procesverslag

## Jij

### Ontwerper:
Joost Verweijen

#### Je startniveau:
Mijn startniveau is: rood/zwart




# Je plan

<details>
  <summary>De eerste versie/schets van je ontwerp & je persoonlijke uitdaging</summary>

  ### De eerste versie/schets:
  <img src="https://user-images.githubusercontent.com/82580473/199129038-54fe5865-4f17-475f-bd45-04dbc51608a2.jpg" width="375px" alt="eerste versie/schets">
  
  #### Concept:
  Door met de zaklamp te zoeken naar de lampen en geesten in het donker,
  kom je achter steeds meer informatie over Gengar door de verschillende Pokémon generaties heen. Hiermee ontstaat er een soort gamification in mijn website. En pas op   dat je niet schrikt van Gengar en zijn mede-geesten!


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Een volledig interactieve website maken
  - Gebruik maken van CSS-animaties
  - Veel JavaScript gebruiken, bijvoorbeeld om de plek van de lampen de randomizen
  - Mijn oorspronkelijke idee volledig uitwerken
  
  ### De tweede versie/digitale uitwerking:
  ![image](https://user-images.githubusercontent.com/82580473/200901429-9e9eb7e7-68d5-4baa-93e4-bdf440f15cfb.png)

 
</details>




## Voortgang/Feedback 1

<details>
  <summary>Mijn feedback, bevindingen en wijzigingen (ma 31 okt - ma 7 nov)</summary>
  
  ### Feedback:
  - Het concept past echt helemaal bij het onderwerp. Wie Pokemon heeft gespeeld vroeger kent dit concept van de grotten die je in de game moest ontdekken en weet dat je dit soort type pokemon tegenkwam hier.
  - Dit concept is zeer uniek, kan wat mij betreft niet sterker. Interactief zeer sterk, met as much progressive disclosure as possible.
  - Leuke easter eggs zijn dat je andere pokemon en dergelijke kunt vinden met je zaklamp.
  

  ### Bevinding 1:
  Ik kreeg de tip om nog ergens in de website een overzicht van de tijdlijn te plaatsen, zodat je niet hoeft te zoeken naar alle lampen om alle informatie te onthullen.

  #### Oplossing:
  Dit ga ik niet doen, want dan verdwijnt het spel element een beetje. Het heeft me wel op een idee gebracht om de gebruiker een soort feed forward te geven over hoeveel torches er nog gevonden moeten worden en welke al gevonden zijn.

  
  ### Bevinding 2:
  Daarnaast kreeg ik de suggestie om eventueel van thema te kunnen switchen in de website, dus dat ik meer Pokémon dan alleen Gengar behandel. Zo zou de gebruiker dan kunnen switchen van een geesten-thema naar bijvoorbeeld een gras-thema.

  #### Oplossing:
  Ook hier ga ik niks mee doen, Gengar is een geest Pokémon en ik vind het dus niet nodig om van thema te veranderen, want dit ondermijnd een beetje het thema en doel van de website. Wat hier ook mee te maken heeft is light- en dark-mode. Dit zou natuurlijk een mooie toevoeging zijn, echter omdat mijn website een geesten-thema heeft en draait om het vinden van objecten met een zaklamp in een donkere ruimte, zal mijn website enkel een dark mode hebben.
  
 
  ### Bevinding 3:
  Om de interface elke keer als je hem opstart uniek te houden, kan ik de plaatsing van de elementen gaan randomizen, zodat het spelelement er een beetje in blijft.
  
  #### Oplossing:
  Dit is een erg goed idee en ik moet dit goed gaan uitwerken. Wat je hieronder ook zal zien is dat het volledig randomizen van de torches niet gaat lukken aangezien elementen dan over elkaar heen zullen vallen. Ik heb hier uiteindelijk een oplossing voor bedacht.
  
  
  ### Progressie
  Ik ben gestart met het maken van de flashlight overlay op basis van [deze bron](https://codemyui.com/flashlight-mouse-pointer/).
  Ook had ik alvast een paar rondvliegende geesten toegevoegd, dit zag er als volgt uit.
  ![image](https://user-images.githubusercontent.com/82580473/200903094-01a7692a-9263-4740-a229-b3b2568dbd79.png)
  
  Vervolgens moest er iets gebeuren als er op de torch geklikt werd, namelijk een verschijnende section, de torch moet aan gaan en de volgende torch moet verschijnen.
  Dit alles zet ik in een function, welke bij een klik op de torch wordt uitgevoerd door een EventListener.
  ```js
  const Torch1 = document.querySelector('a:first-of-type img')
  Torch1.addEventListener('click', Section1)
  ```
  Dit gaf vervolgens het volgende resultaat.
  ![image](https://user-images.githubusercontent.com/82580473/200904665-763d7b7a-59fa-4b92-90ad-4df157ca427e.png)
  
  Zoals je kan zien verdwijnt de tweede torch nu echter niet in het donker. Zelf kon ik niet uitvogelen hoe dit op te lossen was, dus met behulp van Jeffrey is de volgende code nodig geweest om tot de oplossing te komen: er moest een hover state komen op de a om de img heen die de torch zichtbaar zou maken, en anders moet deze dus op `display: none` staan.
  ![image](https://user-images.githubusercontent.com/82580473/200905114-a6a90825-fd65-4f7d-a5e7-302141576508.png)

  Hierna ben ik aan de slag gegaan met de styling van de informatie-vlakken op basis van mijn digitale uitwerking.
  ![image](https://user-images.githubusercontent.com/82580473/200905351-8ff66728-d879-477c-8e5d-cf88b0fddc1f.png)

  Nu moesten mijn torches gaan genereren op random plekken. Dit wilde ik ten eerste doen door deze te laten genereren binnen een bepaald kader over het hele scherm. Het probleem daarmee was echter dat hierdoor soms de torches onder sections of andere torches genereerden.
  
  ![image](https://user-images.githubusercontent.com/82580473/200906267-05c6c062-da29-493a-8f65-e554576c37ea.png)
  
  Dit moest dus op een andere manier aangepakt worden. Ik kwam op het idee om het scherm op te delen in vijf vlakken, en de torches en sections op basis van deze vlakken te positioneren.
  ![image](https://user-images.githubusercontent.com/82580473/200906519-d662b5f9-bd7c-4ed4-9da6-a5adb3ae9759.png)

  Deze vlakken en de benodigde data heb ik vervolgens doorvertaald naar opjects, en deze in een array gezet. Vervolgens heb ik ervoor gezorgd dat elke section een random object in deze array toegewezen kreeg waardoor deze op 'random' posities kwamen te staan.
  ```js
  // Uit de array wordt random 1 van de 5 objects gekozen en vervolgens uit array verwijderd, de data uit de object wordt
    // doorgestuurd in de vorm van CSS variabelen
    const rdmNumber1 = Math.floor(Math.random() * Positioning.length)
    const Position = Positioning[rdmNumber1]
    Positioning.splice(rdmNumber1, 1)
    document.documentElement.style.setProperty('--section-one-top', Position.top + "vh")
    document.documentElement.style.setProperty('--section-one-left', Position.left + "vw")
    document.documentElement.style.setProperty('--section-one-placement', Position.sectiontop + "vh")
    document.documentElement.style.setProperty('--section-one-blur', Position.blur1 + "% " + Position.blur2 + "%")

    // Op basis van de positie van de torch wordt de section óf links óf rechts hiervan geplaatst
    if (Position.left > 70) {
        document.documentElement.style.setProperty('--section-one-side', -17 + "vw")
    } else {
        document.documentElement.style.setProperty('--section-one-side', 12 + "vw")
    }
  ```

</details>




## Voortgang/Feedback 2

<details>
  <summary>Mijn feedback, bevindingen en wijzigingen (ma 7 nov - di 8 nov)</summary>
  
  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 3:
  ...

</details>




## Voortgang/Feedback 3

<details>
  <summary>Mijn feedback, bevindingen en wijzigingen (wo 9 nov)</summary>
  
  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 3:
  ...

</details>




## Reflectie

<details>
  <summary>Mijn eindresultaat & persoonlijke ontwikkeling</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  ![image](https://user-images.githubusercontent.com/82580473/200897572-ed3948cb-d5a4-45e8-82fd-d0314ef41ef7.png)
  ![image](https://user-images.githubusercontent.com/82580473/200897248-1f6b94c7-3347-4ece-a006-c9c872aacfca.png)
  ![image](https://user-images.githubusercontent.com/82580473/200900065-35e858ac-6e3a-4772-b014-95dc697798cd.png)
  
  Ik ben erg blij met mijn uiteindelijke resultaat en het is eigenlijk precies zo geworden zoals ik het voor ogen had. Ik wilde graag veel JavaScript in mijn ontwerp betrekken, en dit is dan ook goed gelukt. Daarnaast heb ik naar mijn mening een erg unieke site gebouwd welke erg goed past bij mijn gekozen karakter.

  ### Dit ging goed/Heb ik geleerd: 
  - Het creëren van een zaklamp effect door middel van CSS en JavaScript
  - Het randomizen van de positie van vijf verschillende torches en informatie-vlakken en het zo positioneren dat de interface mooi blijft
  - Het maken van (simpele) CSS animaties om de website wat levendiger en meer responsive te maken
  - Gamification aan mijn website toevoegen: dit maakt het wat interessanter dan een simpele statische website

  ### Dit was lastig/Is niet gelukt:
  Uiteindelijk is alles wat ik van te voren bedacht had te gaan maken gelukt. Toch kan ik nog wel een aantal dingen bedenken die ik had kunnen toevoegen als ik wat meer tijd en kennis had gehad.
  - Voor elke generatie een soort van slider maken die scrollt door verschillende onderwepen, waarin informatie over Gengar te vinden is (bijvoorbeeld eerst een slide met basis informatie, daarna een slide met afbeeldingen van de games die bij die generatie horen, en eentje met zijn statistieken in die games)
  - Een tip die ik kreeg in een feedbackronde: aangeven aan de gebruiker of deze 'warm' of 'koud' is bij het zoeken naar een torch, dit was me echter nog iets te lastig om dit even snel te doen aangezien dit dan gebaseerd moest worden op de random posities van de torches
  - Meer, en misschien iets meer ingewikkelde CSS animaties toevoegen. Ik heb dit minder gedaan omdat ik het leuker vond om op JavaScript te focussen

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>




## Bronnenlijst

<details>
<summary>Mijn gebruikte bronnen</summary>

### Afbeeldingen
1. https://www.artstation.com/artwork/3o1b5D
2. https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)#Trivia
3. https://opengameart.org/content/simple-torch-animation-16x16
4. https://princess-gothimu.tumblr.com/post/148589397793

### Geluiden
1. https://www.youtube.com/watch?v=MGoxCn4G33k
2. https://www.youtube.com/watch?v=7eJZ1GtFpVE
3. https://www.youtube.com/watch?v=QhJaPElJwLI
4. https://www.youtube.com/watch?v=ghObc6JGY88

### Informatie
1. https://pokemondb.net/pokedex/gengar#dex-basics
2. https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)#Trivia

### Code
1. https://www.w3schools.com/css/css3_animations.asp
2. https://stackoverflow.com/questions/42753228/basic-javascript-random-positioning
3. https://quickref.me/get-a-random-item-and-remove-it-from-an-array
4. https://www.codespeedy.com/play-audio-with-time-delay-javascript/
5. https://css-tricks.com/snippets/css/css-box-shadow/
6. https://pragmaticpineapple.com/smoothly-reverting-css-animations/
7. https://stackoverflow.com/questions/8566090/how-can-i-delay-a-hover-effect-in-css
8. https://codemyui.com/flashlight-mouse-pointer/
9. Sanne en Jeffrey

</details>
