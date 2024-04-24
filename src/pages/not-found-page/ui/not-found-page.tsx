import { Page } from 'shared/ui/page';
import { LinkCard } from 'shared/ui/link-card';
import { RoutePath } from 'shared/config/route-config';

const NotFoundPage = () => (
  <Page>
    <h2>Сторінку не знайдено</h2>
    <LinkCard to={RoutePath.main}>На головну</LinkCard>
  </Page>
);

export default NotFoundPage;
