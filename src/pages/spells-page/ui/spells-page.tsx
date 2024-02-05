import {Page} from "shared/ui/page";
import {ItemCard} from "shared/ui/item-card";
import {Input} from "shared/ui/input";
import {useCallback, useEffect, useMemo, useState} from "react";
import {Button} from "shared/ui/button";
import cls from "./spells-page.module.scss"
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch";
import {useDispatch, useSelector} from "react-redux";
import {getSpellsPageError, getSpellsPageIsLoading} from "pages/spells-page/model/selectors/spells-page-selectors";
import {getSpells, spellsPageActions, spellsPageReducer} from "pages/spells-page/model/slices/spells-page-slice";
import {fetchSpellsList} from "pages/spells-page/model/services/fetch-spells-list";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/dynamic-module-loader/dynamic-module-loader";
import {Spell} from "entities/spell";
import {SpellCard} from "shared/ui/spell-card";
import {ContentSide} from "shared/ui/side-content";

const reducers: ReducersList = {
  spellsPage: spellsPageReducer
}

const SpellsPage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getSpellsPageIsLoading)
  const spells = useSelector(getSpells.selectAll)
  const [search, setSearch] = useState<string>("")
  const [activeSpell, setActiveSpell] = useState<Spell>()
  const onChange = (value: string) => {
    setSearch(value)
  }

  // const onSearchHandler = () => {
  //   spells.filter((e) => {
  //     return e.name.toLowerCase().includes(search.toLowerCase())
  //   })
  // }
  //
  // const onLevelSort = () => {
  //  spells.sort((a, b) => {
  //     if(a.system.level > b.system.level)
  //       return 1
  //     if(a.system.level < b.system.level)
  //       return -1;
  //
  //     return 0
  //   })
  // }
  useEffect(() => {
    dispatch(fetchSpellsList({text: "FETCHING SPELLS HERE"}))
    // setFilteredArr(spells)
  }, [])

  return (
      <DynamicModuleLoader reducers={reducers}>
        <Page className={cls.spellsPage}>
          <ContentSide side={'left'} active={!!activeSpell}>
            <div>
              <Input
                  value={search}
                  onChange={onChange}
                  placeholder={"Пошук..."}
              />
              {/*<Button onClick={onSearchHandler} >Знайти</Button>*/}
              {/*<Button onClick={onLevelSort} >Сортувати за рівнем</Button>*/}
              {/*<Button onClick={() => setFilteredArr(spells)} >SetArray</Button>*/}
            </div>
            {!isLoading && <div className={cls.spellList}>
              {spells.map((e) =>
                  <SpellCard spell={e} onClick={() => setActiveSpell(e)} key={e._id}/>
              )}
            </div>}
          </ContentSide>
          {activeSpell &&
            <ContentSide side={"right"} onClose={() => setActiveSpell(undefined)} title={activeSpell.name}>
              <h2>{activeSpell.name}</h2>
              <p>{activeSpell.system.level}</p>
              <div dangerouslySetInnerHTML={{__html: activeSpell.system.description.value}} />
            </ContentSide>
          }
        </Page>
      </DynamicModuleLoader>
  );
};

export default SpellsPage;
