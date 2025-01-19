import React from "react";
import { colors } from "../utils/colors";
import styled from "styled-components";
import { maxDeviceSize } from "../utils/deviceSize";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <StyledSection>
        <div className="container">
          <h1>Polityka Prywatności</h1>
          <p>Data wejścia w życie: 27.12.2024</p>
          <p>
            Dziękujemy za odwiedzenie naszej strony internetowej. Ochrona Twoich
            danych osobowych jest dla nas priorytetem. Poniżej znajdziesz
            szczegółowe informacje na temat przetwarzania danych osobowych
            zgodnie z ogólnym rozporządzeniem o ochronie danych (RODO).
          </p>

          <h2>1. Administrator Danych</h2>
          <p>
            Administratorem Twoich danych osobowych jest:
            <br />
            <strong>Nextbud Tobiasz Ratajczyk </strong>
            <br />
            Adres: Białężyn 9A, 64-700 Czarnków
            <br />
            Telefon: 733 660 366
            <br />
          </p>

          <h2>2. Jakie dane zbieramy?</h2>
          <p>
            Korzystamy z Google Analytics w celu analizy ruchu na stronie
            internetowej. W związku z tym możemy zbierać następujące dane:
          </p>
          <ul>
            <li>
              Adres IP użytkownika (anonimizowany zgodnie z wymogami RODO),
            </li>
            <li>Informacje o urządzeniu i przeglądarce,</li>
            <li>
              Statystyki dotyczące ruchu na stronie, takie jak czas przebywania,
              źródło ruchu, odwiedzone strony.
            </li>
          </ul>

          <h2>3. Cel i podstawa prawna przetwarzania danych</h2>
          <p>
            Twoje dane przetwarzamy wyłącznie w celu analizy ruchu na stronie
            internetowej, aby poprawić funkcjonalność naszej witryny i jakość
            naszych usług.
          </p>
          <p>
            Podstawą prawną przetwarzania danych jest{" "}
            <strong>zgoda użytkownika</strong>, która jest wyrażana poprzez
            zaakceptowanie plików cookie analitycznych.
          </p>

          <h2>4. Pliki cookie</h2>
          <p>
            Nasza strona korzysta z plików cookie w celu zbierania danych
            analitycznych. Pliki cookie analityczne są używane wyłącznie za
            zgodą użytkownika. Możesz wycofać zgodę w dowolnym momencie,
            zmieniając ustawienia plików cookie w swojej przeglądarce.
          </p>

          <h2>5. Przekazywanie danych</h2>
          <p>
            Dane zebrane za pomocą Google Analytics są przesyłane do Google LLC,
            która działa jako procesor danych. W niektórych przypadkach dane
            mogą być przesyłane na serwery znajdujące się w Stanach
            Zjednoczonych. W celu ochrony Twoich danych stosujemy standardowe
            klauzule umowne zgodnie z wymogami RODO.
          </p>

          <h2>6. Twoje prawa</h2>
          <p>Masz prawo do:</p>
          <ul>
            <li>Dostępu do swoich danych osobowych,</li>
            <li>Sprostowania swoich danych,</li>
            <li>Usunięcia swoich danych ("prawo do bycia zapomnianym"),</li>
            <li>Ograniczenia przetwarzania swoich danych,</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
          </ul>
          <p>
            Aby skorzystać z tych praw, skontaktuj się z nami pod adresem
            e-mail: [biuro@nextbud.eu].
          </p>

          <h2>7. Czas przechowywania danych</h2>
          <p>
            Dane analityczne są przechowywane przez okres [określony czas, np.
            14 miesięcy] zgodnie z ustawieniami Google Analytics.
          </p>

          <h2>8. Kontakt z organem nadzoru</h2>
          <p>
            Jeśli uznasz, że przetwarzamy Twoje dane osobowe niezgodnie z
            prawem, masz prawo złożyć skargę do organu nadzorczego:
          </p>
          <address>
            Prezes Urzędu Ochrony Danych Osobowych (PUODO)
            <br />
            ul. Stawki 2, 00-193 Warszawa
          </address>

          <h2>9. Zmiany w Polityce Prywatności</h2>
          <p>
            Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce
            Prywatności. Wszelkie zmiany będą publikowane na tej stronie z
            odpowiednią adnotacją o dacie ich wejścia w życie.
          </p>
        </div>
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 10rem;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 2rem;
  }

  p {
    margin-top: 1rem;
  }

  ul {
    margin-top: 1rem;
    margin-left: 2rem;
  }

  @media ${maxDeviceSize.phone} {
    padding: 0;
    padding-top: 8rem;
    padding-bottom: 2rem;
  }
`;

export default PrivacyPolicy;
