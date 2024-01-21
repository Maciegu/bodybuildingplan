export const styles = {
    planPageModal: {
      content: {
        textAlign: 'center',
        border: '10px solid black',
        padding: '1px',
        maxWidth: '30%',
        width: 'auto',
        maxHeight: '45%',
        margin: 'auto',
      },
    },
    rpeModal: {
      content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
        border: '10px solid black',
        padding: '10px',
        maxWidth: '70%',
        width: 'auto',
        maxHeight: '35%',
        margin: 'auto',
      },
    },
  };
  
  export const renderRpeModalContent = () => (
    <div>
      <h4>Skala RPE w treningu siłowym zawiera 10 stopni, które pozwalają na ocenę poziomu intensywności ćwiczenia. Skala RPE prezentuje się w następujący sposób:</h4>
      <ol>
        <li>Brak wysiłku</li>
        <li>Bardzo lekki wysiłek</li>
        <li>Lekki wysiłek</li>
        <li>Lekki umiarkowany wysiłek</li>
        <li>Umiarkowany wysiłek (5 powtórzeń w zapasie – 50% ciężaru maksymalnego)</li>
        <li>Trochę ciężki wysiłek (4 powtórzenia w zapasie – 60% ciężaru maksymalnego)</li>
        <li>Ciężki wysiłek (3 powtórzenia w zapasie – 70% ciężaru maksymalnego)</li>
        <li>Bardzo ciężki wysiłek (2 powtórzenia w zapasie – 80% ciężaru maksymalnego)</li>
        <li>Wyjątkowo ciężki wysiłek (1 powtórzenie w zapasie – 90% ciężaru maksymalnego)</li>
        <li>Wysiłek maksymalny (brak powtórzeń w zapasie – 100% ciężaru maksymalnego)</li>
      </ol>
    </div>
  );
  