import { Breadcrumb } from "../navigation/Breadcrumb";
import { Action } from "./Actions";
import { Description } from "./tabs/Description";
import { Feature } from "./Feature";
import { Landlord } from "./Landord";
import { Let } from "./Let";
import { Similar } from "./Similar";
import { Picture } from "./Picture";
import { Share } from "./Share";

const Property = () => {
  return (
    <main className="mt-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          <Breadcrumb />
          <Picture />
          <Feature />
          <Description />
        </div>
        <div className="col-span-12 md:col-span-3 space-y-4">
          <Action />
          <Let />
          <Landlord />
          <Share />
        </div>
      </div>
      <Similar />
    </main>
  );
};

export { Property };
