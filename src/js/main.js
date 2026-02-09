import { initNavigation, FetchEvents } from "./Events.mjs";
import { NewsLetter, initLoginForm } from "./Promotion.mjs";

const newsletter = new NewsLetter();
newsletter.init();

initLoginForm();
initNavigation();
FetchEvents();
