alert("Welkom bij mijn game!");
alert("Je gaat op reis. Hierbij komen een aantal obstakels voor. Zorg dat je de juiste keuze maakt om op jouw eindbestemming te komen!");

do{
    var name = prompt("Wat is je naam?");
}while(name == "");




do{
    var answer = prompt("Welkom " + name + "\nWaar gaat jouw reis naar toe? \n\n 1. Bali \n 2. Marokko \n\n(Typ 1 of 2)");
    console.log("Kies naar welk land je wilt gaan reizen!");
        if(answer == 1){
            answer = prompt("Je hebt gekozen om naar Bali te gaan! \n\nHoe wil je er naar toe reizen? \n\n1. Met het vliegtuig \n2. Met een cruiseschip \n\n(Typ 1 of 2");
            console.log("Je gaat naar Bali toe, hoe ga je erna toe reizen?");
            if(answer == 1){
                answer = prompt("Je hebt gekozen om met het vliegtuig te gaan \nHet is erg druk op het vliegveld en je hebt 2 uur vertraging. \n\nWat wil je gaan doen? \n\n1. Eten halen \n2. Alvast naar de gate gaan en een boek lezen \n\n(Typ 1 of 2)");
                if(answer == 1){
                    console.log("Je gaat eten halen");
                    answer = prompt("Je gaat eten halen bij een restaurant maar het valt verkeerd. Je wordt er heel erg ziek. \n Wat ga je doen? \n\n1. Naar de eerste hulp op het vliegveld \n2. Naar de gate gaan \n\n(Typ 1 of 2)");
                    if(answer == 1){
                        console.log("Je gaat naar de eerste hulp");
                        answer = prompt("Ze geven je een pilletje tegen de misselijkheid, je voelt je weer beter en je kan weer naar de gate gaan. Als je daar aankomt, kom je er achter dat je je zonnebril op de eerste hulp heb later liggen. \nWat ga je doen? \n\n1. Terug gaan om je zonnebril op te halen \n2. Laten liggen, hij was toch niet zo duur \n\n(Typ 1 of 2)");
                        if(answer == 1){
                            console.log("Je gaat je zonnebril ophalen");
                            alert("Je bent terug gelopen voor je zonnebril en heb 'm weer terug. Je loop weer terug naar de gate en komt erachter dat hij alweer gesloten is en je dus je vlucht gemist hebt. \n\nEinde vakantie...");
                        }
                        else if(answer == 2){
                            answer = prompt("De gate gaan open en je gaat boarden. Je gaat opstijgen en het gordelteken gaat uit, je mag dus weer opstaan. Na een tijdje sta je op om naar het toilet te gaan, als je bijna bij het toilet bent gaat het gordeltekentje weer aan. \nWat doe je? \n\n1. Snel terug lopen om weer in de gordel te gaan \n2. Snel nog naar het toilet gaan, je bent er bijna \n\n(Typ 1 of 2)");
                            
                            if(answer == 1){
                                alert("Je bent weer terug in de gordel gegaan en merkt dat er hele heftige turbulentie aankomt. Je bent blij dat je in de gordel bent gegaan. Na een tijdje kan je alsnog naar het toilet. Je reis naar Bali gaat onverstoord door en je vakantie kan beginnen. \n\nFijne vakantie "+name+"!");
                            }
                            else if(answer == 2){
                                alert("Je bent heel eigenwijs toch naar het toilet gegaan, maar het vliegtuig komt in hele heftige turbulentie. Je stoot je hoofd tegen een kastje in het toilet en bent bewusteloos. Het vliegtuig moet een noodstop maken je wordt opgenomen in het ziekenhuis. \nEinde vakantie..");
                            }
                            else{
                                alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                            }
                        }
                    }
                    else if(answer == 2){
                        alert("Je ziet er heel erg ziek uit en het personeel ziet dat. Ze willen je niet meer toelaten in het vliegtuig omdat ze bang zijn dat je een besmettelijke ziekte hebt. \nEinde vakantie..")
                    }
                    else{
                        alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                    }
                }
                else if(answer == 2){
                    answer = prompt("Je heb 2 uur lang een boek gelezen en gaat ontspannen het vliegtuig in. \nJe bent een paar uur verder en je bent bijna in Bali. Je moet alleen nog erg nodig naar het toilet. \n\nWat ga je doen? \n\n1. Naar het toilet \n2. Wachten tot je geland bent en op het vliegveld gaan \n\n(Typ 1 of 2)");
                    if(answer == 1){
                        alert("Je gaat naar het toilet toe en het vliegtuig komt ineens in hele heftige turbulentie. Je stoot je hoofd tegen een kastje in het toilet en bent bewusteloos. Je wordt wakker in het ziekenhuis... In Nederland. \n\n Einde vakantie...");
                    }
                    else if(answer == 2){
                        alert("Je bent geland op Bali! \nAan het einde van de vlucht heb je nog heftige turbulentie gehad, maar jij zat veilig in je gordel. \nJe gaat snel naar het toilet op het vliegveld en daarna kan je vakantie beginnen! \nFijne vakantie " + name + "!");
                    }
                    else{
                        alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                    }
                }
                else{
                    alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                }
            }
            else if(answer == 2){
                answer = prompt("Je hebt gekozen om met een cruiseschip te gaan. Je stond in de file om bij de haven te komen. Er staan 2 grote cruiseschepen maar je weet niet zeker welke het is en je hebt geen tijd om het te controleren. \n\n Welke kies je? \n\n1. De rechter \n2. De linker \n\n(Typ 1 of 2)");
                if(answer == 1){
                    alert("Je heb het verkeerde schip gekozen. Je weet niet waar je nu terecht komt. \n\nEinde vakantie...")
                }
                else if(answer == 2){
                    answer = prompt("Je hebt gelukkig het juiste schip gekozen. Het schip vertrekt richting Bali. \n\nHet is tijd om wat te gaan doen om de tijd te doden. \n\nWat wil je gaan doen?\n\n1. Wat gaan eten \n2. Even een dutje gaan doen \n\n(Typ 1 of 2)");
                    if(answer == 1){
                        alert("Je hebt gekozen om wat te gaan eten. \nHet eten is verkeerd gevallen en je bent heel erg ziek geworden.\nDe eerste stop van het cruiseschip ga je er vanaf om naar het ziekenhuis te gaan.\n\nEinde vakantie..");
                    }
                    else if(answer == 2){
                        answer = prompt("Je hebt heel lang geslapen en het schip komt bij de eerste stop aan. \nWat ga je doen? \n\n1.Van boord af om even een kijkje te nemen in de stad \n2.Op het schip blijven \n\n(Typ 1 of 2)");
                        if(answer == 1){
                            alert("Je bent van boord gegaan en heb even rond gekeken in de stad. Je wilt weer terug gaan aan boord en dan kom je erachter dat je paspoort en ticket nog op het schip liggen en ze je dus niet meer toelaten \nEinde vakantie..");
                        }
                        else if(answer == 2){
                            alert("Je bent aan boord gebleven en na 2 uur gaat het schip weer vertrekken, je reis gaat onverstoord door. \nFijne vakantie "+name+"!");
                        }
                        else{
                            alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                        }
                    }
                    else{
                        alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                    }
                }
                else{
                    alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                }
            }
            else{
                alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
            }
        } 




        else if(answer == 2){
            answer = prompt("Je hebt gekozen om naar Marokko te gaan! \n\nHoe wil je er naar toe reizen? \n\n1. Met het vliegtuig \n2. Met een cruiseschip \n\n(Typ 1 of 2)");
            if(answer == 1){
                answer = prompt("Je komt op het vliegveld aan en gaat inchecken. \nEr wordt aangeboden om je vlucht om te boeken, dan kan je nu gelijk vertrekken. \n\nWat wil je doen? \n\n1. Vlucht omboeken \n2. Zelfde vlucht houden \n\n(Typ 1 of 2)");
                if(answer == 1){
                    alert("Je rent snel door het vliegveld heen om de vlucht te halen die je omgeboekt hebt. \nJe komt aan bij de gate maar die is al gesloten. \n\nEinde vakantie...");
                }
                else if(answer == 2){
                    answer = prompt("Je bent ingecheckt en gaat rustig door de douane heen. Je hebt nu zin om te gaan shoppen op het vlieveld. \n\nHoeveel winkel wil je gaan bezoeken? (Kies een aantal)");
                    if(answer >= 4){
                        alert("Je bent te lang bezig geweest met shoppen en bent de tijd vergeten. Je komt erachter dat je vliegtuig allang vertrokken is zonder jou. \n\nEinde vakantie...");
                    }
                    else if(answer <= 3){
                        answer = prompt("Je bent naar "+ answer+ " winkel(s) geweest en bent ruim op tijd bij de gate aangekomen. Je gaat het vliegtuig in en gaat opstijgen. Eenmaal in de lucht kom je erachter dat je telefoon nog in je handbagage zit en die is opgeborgen bovenin. \n\nWat ga je doen? \n1. Telefoon pakken \n2. Blijven zitten \n\n(Typ 1 of 2)");
                        if(answer == 1){
                            alert("De bagage valt uit de bak op je hoofd. Je bent gewond geraakt en er wordt een tussenstop gemaakt, waar je wordt meegenomen. \n\nEinde vakantie...");
                        }   
                        else if(answer == 2){
                            alert("Je bent blijven zitten en bent zonder problemen in Marokko aangekomen. \n\nFijne vakanatie " + name + "!");
                        }
                        else{
                            alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                        }         
                    }
                    else{
                        alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                    }
                }
                else{
                    alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                }
            }
            else if(answer == 2){
                answer = prompt("Je komt aan bij de haven en ziet dat het schip vertraagd is en er dus nog niet is. \nWat ga je doen? \n\n1. Je blijft wachten tot het schip er is \n2. Je gaat even de stad in \n\n(Typ 1 of 2)");
                if(answer == 1){
                    answer = prompt("Na een uur wachten komt het schip aan. Je stap op en vlak voordat het schip vertrek herinner je dat je je tas in de auto bent vergeten. \nWat ga je doen? \n\n1. Je rent nog snel naar je auto toe \n2. Je laat het maar en koopt alles wat je nodig hebt wel in Marokko \n\n(Typ 1 of 2)");
                    if(answer == 1){
                        alert("Je hebt je tas gepakt. Je rent snel weer terug naar het schip, maar ze zijn nét aan het klaar maken om te vertrekken en je kan er niet meer op. \n\nEinde vakantie...")
                    }
                    else if(answer == 2){
                        alert("Je merkt dat het schip nét ging vertrekken en je bent blij dat je er niet meer vanaf bent gegaan. Er kan nu niks meer mis gaan en je vakantie gaat beginnen. \nFijne vakantie "+name+"!");
                    }
                    else{
                        alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                    }
                }
                else if(answer == 2){
                    answer = prompt("Je gaat nog even de stad in \nHoeveel winkels ga je nog bezoeken? \n(Kies een aantal)");
                    if(answer >= 4){
                        alert("Je bent naar "+answer+ " winkel(s) geweest en dus veel te lang weggeweest. Je komt terug in de haven en het cruiseschip is al weg. \nEinde vakantie...");
                    }
                    else if(answer <= 3){
                        alert("Je bent naar "+answer+ " winkel(s) geweest en bent dus op tijd terug voor vertrek en gaat richting Marokko.\nFijne vakantie "+name+"!");
                    }
                    else{
                        alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                    }
                }
                else{
                    alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                }
            }
            else{
                alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
            }
        } 
        else{
            alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
        }
  }
while(answer != 1 || answer != 2);