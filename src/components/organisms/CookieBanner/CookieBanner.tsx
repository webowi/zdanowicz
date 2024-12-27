import React, { useState, useEffect } from "react";
import styled from "styled-components";

type CookiePreferences = {
  //   necessary: boolean;
  analytics: boolean;
  //   marketing: boolean;
};

type CookieDetails = {
  [key in keyof CookiePreferences]: boolean;
};

const CookiesBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    // necessary: true,
    analytics: true,
    // marketing: false,
  });
  const [detailsVisible, setDetailsVisible] = useState<CookieDetails>({
    // necessary: false,
    analytics: false,
    // marketing: false,
  });

  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookiesPreferences");
    if (!savedPreferences) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences: CookiePreferences = {
      //   necessary: true,
      analytics: true,
      //   marketing: true,
    };
    localStorage.setItem("cookiesPreferences", JSON.stringify(allPreferences));
    setPreferences(allPreferences);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookiesPreferences", JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handlePreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const toggleDetails = (category: keyof CookiePreferences) => {
    setDetailsVisible((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    isVisible && (
      <BannerWrapper>
        <BannerContent>
          <BannerMessage>
            Używamy plików cookies, aby poprawić doświadczenia użytkownika,
            analizować ruch na stronie i personalizować treści. Możesz
            dostosować swoje preferencje lub zaakceptować wszystkie.
          </BannerMessage>
          <Preferences>
            {/* <Preference>
              <label>
                <input type="checkbox" checked disabled />
                Niezbędne (zawsze włączone)
              </label>
              <DetailsButton onClick={() => toggleDetails("necessary")}>
                Szczegóły
              </DetailsButton>
              {detailsVisible.necessary && (
                <Details>
                  <p>Brak plików cookie do wyświetlenia.</p>
                </Details>
              )}
            </Preference> */}
            <Preference>
              <label>
                <input
                  type="checkbox"
                  name="analytics"
                  checked={preferences.analytics}
                  onChange={handlePreferenceChange}
                />
                Analityczne
              </label>
              <DetailsButton onClick={() => toggleDetails("analytics")}>
                Szczegóły
              </DetailsButton>
              {detailsVisible.analytics && (
                <Details>
                  <p>
                    <strong>Plik cookie:</strong> _ga_* <br />
                    <strong>Czas trwania:</strong> 1 rok 1 miesiąc 4 dni <br />
                    <strong>Opis:</strong> Google Analytics sets this cookie to
                    store and count page views.
                  </p>
                  <p>
                    <strong>Plik cookie:</strong> _ga <br />
                    <strong>Czas trwania:</strong> 1 rok 1 miesiąc 4 dni <br />
                    <strong>Opis:</strong> Google Analytics ustawia ten plik
                    cookie, aby zebrać dane dotyczące odwiedzających, sesji i
                    kampanii oraz śledzić korzystanie przez użytkowników z
                    witryny na potrzeby raportu analitycznego. Plik cookie
                    przechowuje informacje w sposób zanonimizowany i przydziela
                    użytkownikom losowo wygenerowany numer w celu identyfikacji
                    odwiedzających.
                  </p>
                </Details>
              )}
            </Preference>
            {/* <Preference>
              <label>
                <input
                  type="checkbox"
                  name="marketing"
                  checked={preferences.marketing}
                  onChange={handlePreferenceChange}
                />
                Marketingowe
              </label>
              <DetailsButton onClick={() => toggleDetails("marketing")}>
                Szczegóły
              </DetailsButton>
              {detailsVisible.marketing && (
                <Details>
                  <p>Brak plików cookie do wyświetlenia.</p>
                </Details>
              )}
            </Preference> */}
          </Preferences>
          <Buttons>
            <AcceptButton onClick={handleAcceptAll}>
              Zaakceptuj wszystkie
            </AcceptButton>
            <SaveButton onClick={handleSavePreferences}>
              Zapisz preferencje
            </SaveButton>
          </Buttons>
        </BannerContent>
      </BannerWrapper>
    )
  );
};

const BannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2c2c2c;
  color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BannerMessage = styled.p`
  margin-bottom: 1rem;
`;

const Preferences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Preference = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
`;

const DetailsButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Details = styled.div`
  background-color: #444;
  padding: 0.5rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const AcceptButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const SaveButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default CookiesBanner;
