import { initNavigation, FetchEvents } from "../js/Events.mjs";
import {
  NewsLetter,
  initLoginForm,
  initRegisterForm,
} from "../js/Promotion.mjs";

const newsletter = new NewsLetter();
newsletter.init();

initLoginForm();
initRegisterForm();
initNavigation();
FetchEvents();
