import {RoutePath} from "shared/config/route-config";
import {LinkCard} from "shared/ui/link-card";
import {Page} from "shared/ui/page";
import cls from './main-page.module.scss'

const MainPage = () => {

  return (
      <Page>
        <h2>Головная сторінка</h2>
        <p>Тут буде меню з переходами вау</p>
        <div className={cls.navRow}>
          <LinkCard to={RoutePath.classes}  className={cls.linkCard}>
            Класси
          </LinkCard>
          <LinkCard to={RoutePath.races}  className={cls.linkCard}>
            Раси
          </LinkCard>
          <LinkCard to={RoutePath.feats}  className={cls.linkCard}>
            Риси
          </LinkCard>
          <LinkCard to={RoutePath.backgrounds}  className={cls.linkCard}>
            Передісторії
          </LinkCard>
          <LinkCard to={RoutePath.spells} className={cls.linkCard}>
            Чари
          </LinkCard>
          <LinkCard to={RoutePath.weapons} className={cls.linkCard}>
            Зброя
          </LinkCard>
          <LinkCard to={RoutePath.armors} className={cls.linkCard}>
            Обладунки
          </LinkCard>
          <LinkCard to={RoutePath.items} className={cls.linkCard}>
            Спорядження
          </LinkCard>
          <LinkCard to={RoutePath.magic_items} className={cls.linkCard}>
            Магічні предмети
          </LinkCard>
          <LinkCard to={RoutePath.bestiary} className={cls.linkCard}>
            Бестіарій
          </LinkCard>
        </div>
      </Page>
  );
};

export default MainPage;
