import {Page} from "shared/ui/page";
import {LinkCard} from "shared/ui/link-card";
import {RoutePath} from "shared/config/route-config";

const NotFoundPage = () => {

  return (
      <Page>
        <h2>ЦІЄЇ СТОРІНКИ НЕМАЄ ПОСМОКЧИ ПЛЕЗ</h2>
        <LinkCard to={RoutePath.main}>ДАВАЙ НАЗАД НАХУЙ</LinkCard>
      </Page>
  );
};

export default NotFoundPage;
