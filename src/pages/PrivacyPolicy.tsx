import React from "react";
import { colors } from "../utils/colors";
import styled from "styled-components";
import { maxDeviceSize } from "../utils/deviceSize";
import MainLayout from "../layouts/MainLayout";

const PrivacyPolicy: React.FC = () => {
  const email = import.meta.env.VITE_EMAIL;
  const phone = import.meta.env.VITE_PHONE_NUMBER;

  return (
    <MainLayout>
      <StyledSection>
        <div className="container">
          <h1>Polityka Prywatności</h1>
          <p>Data ostatniej aktualizacji: 11.02.2026</p>

          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania danych
            osobowych zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady
            (UE) 2016/679 (RODO).
          </p>

          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest:
            <br />
            <strong>FIRMA REMONTOWO-BUDOWLANA ARKADIUSZ ZDANOWICZ</strong>
            <br />
            Dolaszewo 1, 64-930 Dolaszewo
            <br />
            NIP: 7642649935
            <br />
            REGON: 362977220
            <br />
            E-mail: <strong>{email}</strong>
            <br />
            Tel.: <strong>{phone}</strong>
          </p>

          <h2>2. Zakres przetwarzanych danych</h2>
          <p>
            Dane osobowe przetwarzane są w przypadku kontaktu telefonicznego lub
            e-mailowego oraz w ramach korzystania ze strony internetowej.
          </p>

          <p>Możemy przetwarzać:</p>
          <ul>
            <li>
              dane kontaktowe przekazane dobrowolnie (np. imię, e-mail,
              telefon),
            </li>
            <li>adres IP, dane przeglądarki i urządzenia,</li>
            <li>
              dane techniczne związane z działaniem serwisu (np. logi serwera),
            </li>
            <li>
              dane statystyczne w ujęciu zbiorczym dotyczące widoczności strony
              w wyszukiwarce (Google Search Console).
            </li>
          </ul>

          <h2>3. Cele i podstawa prawna przetwarzania</h2>
          <ul>
            <li>
              odpowiedź na zapytanie i przygotowanie oferty – art. 6 ust. 1 lit.
              b RODO,
            </li>
            <li>realizacja umowy – art. 6 ust. 1 lit. b RODO,</li>
            <li>
              zapewnienie bezpieczeństwa i prawidłowego działania serwisu (np.
              przeciwdziałanie nadużyciom, diagnostyka błędów) – art. 6 ust. 1
              lit. f RODO,
            </li>
            <li>
              analiza widoczności strony w wynikach wyszukiwania i jej poprawne
              indeksowanie (Google Search Console) – art. 6 ust. 1 lit. f RODO,
            </li>
            <li>
              zabezpieczenie ewentualnych roszczeń – art. 6 ust. 1 lit. f RODO.
            </li>
          </ul>

          <h2>4. Google Search Console</h2>
          <p>
            Strona korzysta z narzędzia Google Search Console, dostarczanego
            przez Google Ireland Limited, w celu monitorowania widoczności
            strony w wynikach wyszukiwania oraz usprawnienia indeksowania.
          </p>
          <p>
            Google Search Console nie służy do śledzenia użytkowników w celach
            marketingowych ani do profilowania. Nie wykorzystujemy Google
            Analytics ani plików cookies analitycznych.
          </p>
          <p>
            Dane prezentowane w Google Search Console mają charakter
            statystyczny i zbiorczy (np. liczba wyświetleń, kliknięć, frazy
            wyszukiwania, błędy indeksowania). Google może przetwarzać dane w
            ramach świadczenia usługi zgodnie ze swoimi zasadami (w tym w
            szczególności dane techniczne i logi).
          </p>

          <h2>5. Odbiorcy danych</h2>
          <p>
            Dane mogą być przekazywane podmiotom wspierającym działalność
            administratora, takim jak:
          </p>
          <ul>
            <li>dostawca hostingu (serwery w Polsce),</li>
            <li>dostawcy usług IT i utrzymania serwisu,</li>
            <li>Google Ireland Limited – w zakresie Google Search Console.</li>
          </ul>

          <h2>6. Okres przechowywania danych</h2>
          <p>
            Dane kontaktowe przechowywane są przez czas trwania współpracy oraz
            do momentu przedawnienia ewentualnych roszczeń.
          </p>
          <p>
            Dane techniczne (np. logi serwera) przechowywane są przez okres
            niezbędny do zapewnienia bezpieczeństwa i prawidłowego działania
            serwisu lub zgodnie z polityką dostawcy hostingu.
          </p>

          <h2>7. Twoje prawa</h2>
          <ul>
            <li>dostępu do danych,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych,</li>
            <li>ograniczenia przetwarzania,</li>
            <li>wniesienia sprzeciwu,</li>
            <li>wniesienia skargi do organu nadzorczego (PUODO).</li>
          </ul>

          <p>
            W sprawach związanych z ochroną danych osobowych można skontaktować
            się pod adresem: <strong>{email}</strong>
          </p>

          <h2>8. Organ nadzorczy</h2>
          <address>
            Prezes Urzędu Ochrony Danych Osobowych
            <br />
            ul. Stawki 2
            <br />
            00-193 Warszawa
          </address>

          <h2>9. Pliki cookies</h2>
          <p>
            Strona wykorzystuje wyłącznie pliki cookies niezbędne do jej
            działania (np. związane z bezpieczeństwem i zapamiętaniem decyzji o
            wyświetlaniu komunikatu cookies). Nie stosujemy plików cookies
            analitycznych ani marketingowych.
          </p>
          <p>
            Użytkownik może zarządzać plikami cookies w ustawieniach swojej
            przeglądarki.
          </p>

          <h2>10. Zmiany Polityki Prywatności</h2>
          <p>
            Administrator zastrzega sobie prawo do aktualizacji niniejszej
            Polityki Prywatności. Aktualna wersja dokumentu dostępna jest zawsze
            na stronie internetowej.
          </p>
        </div>
      </StyledSection>
    </MainLayout>
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

  address {
    margin-top: 1rem;
    font-style: normal;
    color: ${colors.grayLight};
  }

  @media ${maxDeviceSize.phone} {
    padding: 0;
    padding-top: 8rem;
    padding-bottom: 2rem;
  }
`;

export default PrivacyPolicy;
