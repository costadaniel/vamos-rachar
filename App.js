import React from "react";
import Routes from "./src/routes";
import i18n from "i18n-js";
import * as Localization from "expo-localization";

import translations from "./src/lang";

i18n.translations = translations;
i18n.locale = Localization.locale;
i18n.fallbacks = true;

const App = () => {
  return <Routes />;
};

export default App;
