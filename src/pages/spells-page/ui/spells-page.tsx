import { Page } from 'shared/ui/page';
import { Input } from 'shared/ui/input';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Button } from 'shared/ui/button';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSpellsPageError,
  getSpellsPageIsLoading,
  useSpellsPageIsLoading,
} from 'pages/spells-page/model/selectors/spells-page-selectors';
import { getSpells, spellsPageActions, spellsPageReducer } from 'pages/spells-page/model/slices/spells-page-slice';
import { fetchSpellsList } from 'pages/spells-page/model/services/fetch-spells-list';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { Spell, SpellLevel } from 'entities/spell';
import { SpellCard } from 'shared/ui/spell-card';
import { ContentSide } from 'shared/ui/side-content';
import { Routes, Route } from 'react-router-dom';
import { useThrottle } from 'shared/lib/hooks/use-throttle';
import cls from './spells-page.module.scss';

const reducers: ReducersList = {
  spellsPage: spellsPageReducer,
};

const SpellsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSpellsPageIsLoading();
  const spells = useSelector(getSpells.selectAll);
  const [search, setSearch] = useState<string>('');
  const [filteredSpells, setFilteredSpells] = useState(spells);
  const [activeSpell, setActiveSpell] = useState<Spell>();

  const onChange = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    setFilteredSpells(spells.filter((e) => e.name.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  useEffect(() => {
    setFilteredSpells(spells.sort((a, b) => {
      if (a.system.level > b.system.level) { return 1; }
      if (a.system.level < b.system.level) { return -1; }

      return 0;
    }));
  }, [spells]);

  useEffect(() => {
    dispatch(fetchSpellsList({ text: 'FETCHING SPELLS HERE' }));
  }, []);

  const setLevelFilter = (level: SpellLevel) => {
    setFilteredSpells(
      spells.filter((s) => s.system.level === level),
    );
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={cls.spellsPage}>
        <ContentSide side="left" active={!!activeSpell}>
          <div>
            <Input
              value={search}
              onChange={onChange}
              placeholder="Пошук..."
            />
            Filter by level:
            <Button onClick={() => setLevelFilter(0)}>
              0
            </Button>
            <Button onClick={() => setLevelFilter(1)}>
              1
            </Button>
            <Button onClick={() => setLevelFilter(2)}>
              2
            </Button>
            <Button onClick={() => setLevelFilter(3)}>
              3
            </Button>
            <Button onClick={() => setLevelFilter(4)}>
              4
            </Button>
            <Button onClick={() => setLevelFilter(5)}>
              5
            </Button>
            <Button onClick={() => setLevelFilter(6)}>
              6
            </Button>
            <Button onClick={() => setLevelFilter(7)}>
              7
            </Button>
            <Button onClick={() => setLevelFilter(8)}>
              8
            </Button>
            <Button onClick={() => setLevelFilter(9)}>
              9
            </Button>
          </div>
          {!isLoading && (
            <div className={cls.spellList}>
              {filteredSpells.map((e) => <SpellCard spell={e} onClick={() => setActiveSpell(e)} key={e._id} />)}
            </div>
          )}
        </ContentSide>
        {activeSpell
            && (
              <ContentSide side="right" onClose={() => setActiveSpell(undefined)} title={activeSpell.name}>
                <h2>{activeSpell.name}</h2>
                <p>{activeSpell.system.level}</p>
                <div dangerouslySetInnerHTML={{ __html: activeSpell.system.description.value }} />
              </ContentSide>
            )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default SpellsPage;
