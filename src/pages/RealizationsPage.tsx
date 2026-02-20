import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import { colors } from "../utils/colors";
import { maxDeviceSize } from "../utils/deviceSize";
import { RealizationCard } from "../components/molecules/RealizationCard/RealizationCard";
import buldingPlanPoster from "../assets/buldingPlanPoster.webp";
import HouseImage from "../assets/building.webp";
import ExcavationImage from "../assets/excavation.webp";
import { motion } from "framer-motion";
import { MdSearch, MdGridView } from "react-icons/md";

interface RealizationImage {
  image: string;
}

interface Realization {
  uuid: string;
  name: string;
  description?: string;
  mainImage: string;
  images: RealizationImage[];
}

const realizations: Realization[] = [
  {
    uuid: "1",
    name: "Budowa domu jednorodzinnego",
    description:
      "Kompleksowa realizacja budowy domu jednorodzinnego, obejmująca wszystkie etapy od projektu po wykończenie.",
    mainImage: HouseImage,
    images: [{ image: HouseImage }, { image: HouseImage }],
  },
  {
    uuid: "2",
    name: "Hala magazynowa",
    description:
      "Realizacja hali magazynowej o powierzchni 2000 m², z zastosowaniem nowoczesnych technologii budowlanych.",
    mainImage: ExcavationImage,
    images: [{ image: ExcavationImage }, { image: ExcavationImage }],
  },
];

const PAGE_SIZE = 8;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const RealizationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [pageInput, setPageInput] = useState(1);

  const gridTopRef = useRef<HTMLDivElement | null>(null);

  const filteredRealizations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return realizations;

    return realizations.filter((r) => {
      const name = r.name.toLowerCase();
      const desc = (r.description ?? "").toLowerCase();
      return name.includes(q) || desc.includes(q);
    });
  }, [searchQuery]);

  const pageCount = useMemo(() => {
    return Math.max(1, Math.ceil(filteredRealizations.length / PAGE_SIZE));
  }, [filteredRealizations.length]);

  const page = useMemo(
    () => clamp(pageInput, 1, pageCount),
    [pageInput, pageCount],
  );

  const pagedRealizations = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredRealizations.slice(start, start + PAGE_SIZE);
  }, [filteredRealizations, page]);

  const scrollToGridTop = () => {
    requestAnimationFrame(() => {
      gridTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const goToPage = (p: number) => {
    setPageInput(clamp(p, 1, pageCount));
    scrollToGridTop();
  };

  return (
    <MainLayout>
      <Hero $bg={buldingPlanPoster}>
        <HeroOverlay />

        <HeroInner>
          <HeroBadge>
            <MdGridView size={18} />
            Realizacje
          </HeroBadge>

          <HeroTitle>Nasze realizacje</HeroTitle>

          <HeroLead>
            Przykładowe inwestycje — od prac konstrukcyjnych po wykończenia.
          </HeroLead>

          <SearchBar role="search">
            <SearchIcon>
              <MdSearch size={20} />
            </SearchIcon>

            <SearchInput
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPageInput(1);
              }}
              placeholder="Wyszukaj realizację (np. dom, hala, elewacja)…"
            />

            <ResultPill>{filteredRealizations.length}</ResultPill>
          </SearchBar>
        </HeroInner>
      </Hero>

      <Section>
        <Container>
          <div ref={gridTopRef} />

          {filteredRealizations.length === 0 ? (
            <Empty>
              <EmptyTitle>Brak wyników</EmptyTitle>
              <EmptyText>
                Spróbuj innego hasła (np. „dom”, „hala”, „wykończenia”).
              </EmptyText>
            </Empty>
          ) : (
            <>
              <Grid>
                {pagedRealizations.map((realization, index) => (
                  <AnimatedCard
                    key={realization.uuid}
                    initial={{ y: 28, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: Math.min(index * 0.06, 0.28),
                    }}
                  >
                    <RealizationCard realization={realization} />
                  </AnimatedCard>
                ))}
              </Grid>

              {pageCount > 1 && (
                <Pagination
                  page={page}
                  pageCount={pageCount}
                  onChange={goToPage}
                />
              )}
            </>
          )}
        </Container>
      </Section>
    </MainLayout>
  );
};

export default RealizationsPage;

type PaginationProps = {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
};

const getPageItems = (page: number, pageCount: number) => {
  const items: Array<number | "..."> = [];

  if (pageCount <= 7) {
    for (let i = 1; i <= pageCount; i++) items.push(i);
    return items;
  }

  const left = Math.max(2, page - 1);
  const right = Math.min(pageCount - 1, page + 1);

  items.push(1);
  if (left > 2) items.push("...");

  for (let i = left; i <= right; i++) items.push(i);

  if (right < pageCount - 1) items.push("...");
  items.push(pageCount);

  return items;
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  pageCount,
  onChange,
}) => {
  const items = useMemo(() => getPageItems(page, pageCount), [page, pageCount]);

  return (
    <Pager aria-label="Paginacja">
      <PagerButton
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Poprzednia strona"
      >
        ←
      </PagerButton>

      <PagerList>
        {items.map((it, idx) =>
          it === "..." ? (
            <Dots key={`dots-${idx}`} aria-hidden="true">
              …
            </Dots>
          ) : (
            <PagePill
              key={it}
              type="button"
              onClick={() => onChange(it)}
              $active={it === page}
              aria-current={it === page ? "page" : undefined}
            >
              {it}
            </PagePill>
          ),
        )}
      </PagerList>

      <PagerButton
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === pageCount}
        aria-label="Następna strona"
      >
        →
      </PagerButton>
    </Pager>
  );
};

const Hero = styled.header<{ $bg: string }>`
  --nav-h: 68px;

  position: relative;
  height: min(560px, 72vh);
  width: 100%;
  overflow: hidden;

  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      80% 70% at 50% 40%,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.55)
    ),
    linear-gradient(
      to bottom,
      rgba(246, 247, 249, 0) 0%,
      rgba(246, 247, 249, 0) 55%,
      rgba(246, 247, 249, 0.4) 85%,
      rgba(246, 247, 249, 0.85) 96%,
      rgba(246, 247, 249, 1) 100%
    );
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;

  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: calc(var(--nav-h) + 4rem) 2rem 2rem;

  @media ${maxDeviceSize.tablet} {
    padding: calc(var(--nav-h) + 3rem) 1rem 2rem;
  }
`;

const HeroBadge = styled.div`
  margin: 0 auto 14px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 12px;
  border-radius: 999px;

  color: ${colors.white};
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);

  backdrop-filter: blur(12px);
  font-weight: 900;
`;

const HeroTitle = styled.h1`
  margin: 0;
  text-align: center;
  color: ${colors.white};
  font-size: 3rem;
  font-weight: 900;

  @media ${maxDeviceSize.tablet} {
    font-size: 2.2rem;
  }
`;

const HeroLead = styled.p`
  margin: 10px auto 18px;
  text-align: center;
  max-width: 720px;

  color: rgba(255, 255, 255, 0.86);
`;

const SearchBar = styled.div`
  width: min(720px, 100%);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 44px 1fr auto;
  gap: 10px;

  padding: 10px 12px;
  border-radius: 18px;

  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.orange};
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
`;

const ResultPill = styled.div`
  font-weight: 900;
`;

const Section = styled.section`
  background: #f6f7f9;
  padding: 3.5rem 2rem 6rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media ${maxDeviceSize.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${maxDeviceSize.phone} {
    grid-template-columns: 1fr;
  }
`;

const AnimatedCard = styled(motion.div)``;

const Empty = styled.div`
  text-align: center;
`;

const EmptyTitle = styled.h2`
  font-weight: 900;
  color: ${colors.orange};
`;

const EmptyText = styled.p`
  color: rgba(0, 0, 0, 0.68);
`;

const Pager = styled.nav`
  margin: 1.75rem auto 0;
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 12px;
  border-radius: 18px;

  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

const PagerList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PagerButton = styled.button`
  height: 38px;
  min-width: 42px;
  padding: 0 12px;

  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.78);

  font-weight: 900;
  cursor: pointer;

  transition:
    transform 120ms ease,
    background 120ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.92);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const PagePill = styled.button<{ $active?: boolean }>`
  height: 38px;
  min-width: 38px;
  padding: 0 12px;

  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.08);

  cursor: pointer;
  font-weight: 900;

  background: ${({ $active }) =>
    $active ? colors.orange : "rgba(255, 255, 255, 0.78)"};

  color: ${({ $active }) => ($active ? colors.white : "rgba(0,0,0,0.82)")};

  transition:
    transform 120ms ease,
    filter 120ms ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(0.98);
  }
`;

const Dots = styled.span`
  padding: 0 6px;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.55);
`;
