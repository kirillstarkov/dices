import { Page } from 'shared/ui/page';
import { ContentSide } from 'shared/ui/side-content';
import { useEffect, useState } from 'react';
import { ClassSheet, IClass } from 'entities/class';
import { ItemCard } from 'shared/ui/item-card';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader/dynamic-module-loader';
import { classesPageReducer, getClasses } from 'pages/classes-page/model/slices/classes-page-slice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassesList } from 'pages/classes-page/model/services/fetch-class-list';
import cls from './classes-page.module.scss';

const reducers: ReducersList = {
  classesPage: classesPageReducer,
};

const ClassesPage = () => {
  const dispatch = useDispatch();
  const classes = useSelector(getClasses.selectAll);
  const [activeClass, setActiveClass] = useState<IClass>();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchClassesList({}));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={cls.classesPage}>
        <ContentSide side="left" active={!!activeClass} activeClass={cls.classLeft}>
          <h2>Класси</h2>
          <div className={cls.wrapper}>
            {classes.map((e) => (
              <ItemCard
                className={cls.classItem}
                key={e.name}
                title={e.name}
                leftBlock={(
                  <p>
                    к
                    {e.hitDice}
                  </p>
                )}
                onClick={() => setActiveClass(e)}
              />
            ))}
          </div>
        </ContentSide>
        {activeClass && (
          <ContentSide
            side="right"
            onClose={() => setActiveClass(undefined)}
            title={activeClass.name}
            className={cls.classRight}
          >
            <ClassSheet charClass={activeClass} />
          </ContentSide>
        )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default ClassesPage;
