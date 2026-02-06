import { initNavigation, FetchEvents } from "./Events.mjs";
import { NewsLetter } from "./Promotion.mjs";

const newsletter = new NewsLetter();
newsletter.init();

initNavigation();
FetchEvents();
