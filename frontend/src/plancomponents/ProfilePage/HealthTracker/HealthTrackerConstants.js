export const weightStyle = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    border: '10px solid black',
    padding: 0,
    maxWidth: '20%',
    width: 'auto',
    maxHeight: '25%',
    margin: 'auto',
  },
};

export const healthStyles = {
  content: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    textAlign: 'left',
    border: '10px solid black',           // Usuń obramowanie modala
    padding: '10px',     
    maxWidth: '70%',
    width: 'auto',
    maxHeight: '35%',
    margin: 'auto',
  },
};



  export const bmiModalContent = (
    <>
      <h4>
        BMI jest jednym z ważnych wskaźniów określających nasz stan fizyczny, ale niestety nie wystarczającym. Bardzo ważnym uzupełnieniem BMI jest wskaźnik ilości tłuszczu brzusznego - zbyt duży może oznaczać niebezpieczną otyłość brzuszną i to nawet przy prawidłowym BMI! Ponadto, paradoksalnie, badania naukowe wskazują, że osoby z lekką nadwagą zwykle są zdrowsze i żyją dłużej od osób z tzw. "prawidłową wagą". Pojawiają się nawet głosy, że ustalony arbitralnie przez WHO próg nadwagi (25) jest zbyt niski.
        </h4><br></br><h3>Zakresy wartości BMI:</h3>
        <br></br><h4>mniej niż 16 - wygłodzenie(kolor niebieski)</h4>
        <h4>16 - 16.99 - wychudzenie(kolor niebieski)</h4>
        <h4>17 - 18.49 - niedowaga(kolor niebieski)</h4>
        <h4>18.5 - 24.99 - wartość prawidłowa(kolor zielony)</h4>
        <h4>25 - 29.99 - nadwaga(kolor żółty)</h4>
        <h4>30 - 34.99 - I stopień otyłości(kolor czerwony)</h4>
        <h4>35 - 39.99 - II stopień otyłości(kolor czerwony)</h4>
        <h4> powyżej 40 - otyłość skrajna(kolor czerwony)</h4>
    </>
  );

  export const caloriesModalContent = (
    <>
      <h4>
        Znajmość BMR (PPM) - podstawowej przemiany materii oraz TMR (CPM) - całkowitej przemiany materii
        jest konieczne, by odpowiednio kształtować swoją sylwetkę, niezależnie czy chcemy schudnąć,
        przybrać na masie czy utrzymać wagę, zapotrzebowanie kaloryczne i jego obliczenie są podstawowymi
        czynnikami, które nam pomogą w osiągnięciu celu. Wartość BMR określa liczbę kalorii, którą
        organizm przeznacza w ciągu doby na podstawowe funkcje życiowe, podczas odchudzania nie powinniśmy
        spożywać mniej kalorii niż wynosi nasze BMR, może to przynieść wiele niepożądanych skutków,
        takich jak: znaczne osłabienie, zwiększenie kortyzolu, ból czy zawroty głowy, długotrwałe spożywanie
        zbyt małej liczby kalorii może doprowadzić do poważnych chorób. Drugą stroną medalu jest spożywanie
        zbyt dużej liczby kalorii, źle obliczony wskaźnik CPM i przesadzenie ze spożywanym jedzeniem może
        powodować nadmierne otłuszczenie, w tym organów wewnętrznych, dlatego tak ważne jest obliczenie
        dokładnego zapotrzebowania kalorycznego.
      </h4>
      <br></br>
      <h4>Podana liczba kalorii jest wyliczona dla Ciebie z uwagi na cel jaki masz oraz tempo zmiany wagi.
        Badania wykazały, że niskie tempo zmiany wagi(0.5%-2%/mies) jest najlepsze dla naszego organizmu
        i maksymalizuje efekty jakie chcemy osiągnąć.
      </h4>
    </>
  );

  export const bmrModalContent = (
    <>
      <h3>
        Przez wiele lat to kalkulator BMI był z powodzeniem wykorzystywany do obliczania masy ciała,
        jednak z czasem na rynku pojawiło się zapotrzebowanie na narzędzia, które są o wiele dokładniejsze
        w swoich kalkulacjach. Jednym z nich jest właśnie kalkulator BMR (z ang. Basal Metabolic Rate),
        który prezentuje wskaźnik podstawowej przemiany materii i pozwala określić minimalną liczbę kalorii,
        która jest niezbędna do zachowania podstawowych funkcji organizmu.
      </h3>
    </>
  );