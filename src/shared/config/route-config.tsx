import { MainPage } from 'pages/main-page';
import { SpellsPage } from 'pages/spells-page';
import { ClassesPage } from 'pages/classes-page';
import { ItemsPage } from 'pages/items-page';
import { MagicPage } from 'pages/magic-page';
import { NotFoundPage } from 'pages/not-found-page';
import { RouteProps } from 'react-router-dom';
import { ArmorsPage } from 'pages/armors-page';
import { BackgroundsPage } from 'pages/backgrounds-page';
import { BestiaryPage } from 'pages/bestiary-page';
import { FeatsPage } from 'pages/feats-page';
import { RacesPage } from 'pages/races-page';
import { WeaponsPage } from 'pages/weapons-page';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  ARMORS = 'armors',
  BACKGROUNDS = 'backgrounds',
  BESTIARY = 'bestiary',
  CLASSES = 'classes',
  FEATS = 'feats',
  ITEMS = 'items',
  MAGIC_ITEMS = 'magic_items',
  MAIN = 'main',
  RACES = 'races',
  SPELLS = 'spells',
  WEAPONS = 'weapons',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ARMORS]: '/armors',
  [AppRoutes.BACKGROUNDS]: '/backgrounds',
  [AppRoutes.BESTIARY]: '/bestiary',
  [AppRoutes.CLASSES]: '/classes/', // + class name
  [AppRoutes.FEATS]: '/feats',
  [AppRoutes.ITEMS]: '/items',
  [AppRoutes.MAGIC_ITEMS]: '/magic',
  [AppRoutes.MAIN]: '/',
  [AppRoutes.RACES]: '/races',
  [AppRoutes.SPELLS]: '/spells', // + spell name
  [AppRoutes.WEAPONS]: '/weapons',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.ARMORS]: {
    path: RoutePath.armors,
    element: <ArmorsPage />,
  },
  [AppRoutes.BACKGROUNDS]: {
    path: RoutePath.backgrounds,
    element: <BackgroundsPage />,
  },
  [AppRoutes.BESTIARY]: {
    path: RoutePath.bestiary,
    element: <BestiaryPage />,
  },
  [AppRoutes.CLASSES]: {
    path: `${RoutePath.classes}`,
    element: <ClassesPage />,
  },
  [AppRoutes.FEATS]: {
    path: RoutePath.feats,
    element: <FeatsPage />,
  },
  [AppRoutes.ITEMS]: {
    path: RoutePath.items,
    element: <ItemsPage />,
  },
  [AppRoutes.MAGIC_ITEMS]: {
    path: RoutePath.magic_items,
    element: <MagicPage />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.RACES]: {
    path: RoutePath.races,
    element: <RacesPage />,
  },
  [AppRoutes.SPELLS]: {
    path: RoutePath.spells,
    element: <SpellsPage />,
  },
  [AppRoutes.WEAPONS]: {
    path: RoutePath.weapons,
    element: <WeaponsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
