import React from "react";
import styled from "styled-components";
import { maxDeviceSize } from "../utils/deviceSize";
import MainLayout from "../layouts/MainLayout";

const PrivacyPolicy: React.FC = () => {
  const email = import.meta.env.VITE_EMAIL;
  const phone = import.meta.env.VITE_PHONE_NUMBER;

  return (
    <MainLayout>
      <Page>
        <Container>
          <Card>
            <Header>
              <Title>Polityka Prywatności</Title>
              <Meta>Data ostatniej aktualizacji: 11.02.2026</Meta>
            </Header>

            <Content>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania
                danych osobowych zgodnie z Rozporządzeniem Parlamentu
                Europejskiego i Rady (UE) 2016/679 (RODO).
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
                Dane osobowe przetwarzane są w przypadku kontaktu telefonicznego
                lub e-mailowego oraz w ramach korzystania ze strony
                internetowej.
              </p>

              <p>Możemy przetwarzać:</p>
              <ul>
                <li>
                  dane kontaktowe przekazane dobrowolnie (np. imię, e-mail,
                  telefon),
                </li>
                <li>adres IP, dane przeglądarki i urządzenia,</li>
                <li>
                  dane techniczne związane z działaniem serwisu (np. logi
                  serwera),
                </li>
                <li>
                  dane statystyczne w ujęciu zbiorczym dotyczące widoczności
                  strony w wyszukiwarce (Google Search Console).
                </li>
              </ul>

              <h2>3. Cele i podstawa prawna przetwarzania</h2>
              <ul>
                <li>
                  odpowiedź na zapytanie i przygotowanie oferty – art. 6 ust. 1
                  lit. b RODO,
                </li>
                <li>realizacja umowy – art. 6 ust. 1 lit. b RODO,</li>
                <li>
                  zapewnienie bezpieczeństwa i prawidłowego działania serwisu
                  (np. przeciwdziałanie nadużyciom, diagnostyka błędów) – art. 6
                  ust. 1 lit. f RODO,
                </li>
                <li>
                  analiza widoczności strony w wynikach wyszukiwania i jej
                  poprawne indeksowanie (Google Search Console) – art. 6 ust. 1
                  lit. f RODO,
                </li>
                <li>
                  zabezpieczenie ewentualnych roszczeń – art. 6 ust. 1 lit. f
                  RODO.
                </li>
              </ul>

              <h2>4. Google Search Console</h2>
              <p>
                Strona korzysta z narzędzia Google Search Console, dostarczanego
                przez Google Ireland Limited, w celu monitorowania widoczności
                strony w wynikach wyszukiwania oraz usprawnienia indeksowania.
              </p>
              <p>
                Google Search Console nie służy do śledzenia użytkowników w
                celach marketingowych ani do profilowania. Nie wykorzystujemy
                Google Analytics ani plików cookies analitycznych.
              </p>
              <p>
                Dane prezentowane w Google Search Console mają charakter
                statystyczny i zbiorczy (np. liczba wyświetleń, kliknięć, frazy
                wyszukiwania, błędy indeksowania). Google może przetwarzać dane
                w ramach świadczenia usługi zgodnie ze swoimi zasadami (w tym w
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
                <li>
                  Google Ireland Limited – w zakresie Google Search Console.
                </li>
              </ul>

              <h2>6. Okres przechowywania danych</h2>
              <p>
                Dane kontaktowe przechowywane są przez czas trwania współpracy
                oraz do momentu przedawnienia ewentualnych roszczeń.
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
                W sprawach związanych z ochroną danych osobowych można
                skontaktować się pod adresem: <strong>{email}</strong>
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
                działania (np. związane z bezpieczeństwem i zapamiętaniem
                decyzji o wyświetlaniu komunikatu cookies). Nie stosujemy plików
                cookies analitycznych ani marketingowych.
              </p>
              <p>
                Użytkownik może zarządzać plikami cookies w ustawieniach swojej
                przeglądarki.
              </p>

              <h2>10. Zmiany Polityki Prywatności</h2>
              <p>
                Administrator zastrzega sobie prawo do aktualizacji niniejszej
                Polityki Prywatności. Aktualna wersja dokumentu dostępna jest
                zawsze na stronie internetowej.
              </p>
            </Content>
          </Card>
        </Container>
      </Page>
    </MainLayout>
  );
};

export default PrivacyPolicy;

const Page = styled.section`
  background: #f6f7f9;
  min-height: 100vh;

  padding: calc(68px + 3rem) 2rem 5rem;

  @media ${maxDeviceSize.tablet} {
    padding: calc(68px + 4.2rem) 1rem 4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
`;

const Card = styled.div`
  margin-top: 1rem;
  border-radius: 24px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);

  box-shadow:
    0 22px 60px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);
`;

const Header = styled.header`
  padding: 24px 22px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  background: linear-gradient(
    135deg,
    rgba(238, 52, 56, 0.1),
    rgba(255, 255, 255, 0)
  );

  @media ${maxDeviceSize.phone} {
    padding: 18px 16px 14px;
  }
`;

const Title = styled.h1`
  margin: 0;
  text-align: left;
  color: #111;
  font-weight: 950;
  letter-spacing: 0.01em;
  font-size: 2.2rem;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.9rem;
  }
`;

const Meta = styled.p`
  margin: 8px 0 0;
  color: rgba(0, 0, 0, 0.62);
  font-weight: 750;
`;

const Content = styled.div`
  padding: 18px 22px 22px;
  color: rgba(0, 0, 0, 0.74);

  font-size: 1.03rem;
  line-height: 1.75;

  @media ${maxDeviceSize.phone} {
    padding: 14px 16px 18px;
  }

  h2 {
    margin: 1.9rem 0 0.7rem;
    color: #111;
    font-weight: 950;
    letter-spacing: 0.01em;
    font-size: 1.25rem;
  }

  p {
    margin: 0.75rem 0 0;
  }

  ul {
    margin: 0.85rem 0 0;
    padding-left: 1.15rem;
  }

  li {
    margin: 0.45rem 0;
  }

  strong {
    color: #111;
    font-weight: 900;
  }

  address {
    margin-top: 0.9rem;
    font-style: normal;
    color: rgba(0, 0, 0, 0.62);
    line-height: 1.6;
    padding: 14px 14px;
    border-radius: 18px;

    background: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`;
