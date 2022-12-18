// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

console.log('coucou !!');

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

import "bootstrap";
import "chartkick/chart.js"

import { showMenu } from "./components/_show_menu";
import { homeSwiper } from "./components/_home_swiper";
import { dashboardLightbox } from "./components/_dashboard_lightbox";
import { previewImageOnFileSelect } from "./components/_upload_photo_preview";
import { slideInImages } from "./components/_slide_in_images";
import { dashboardSelection } from "./components/_dashboard_selection";
import { titleScroll, logoScroll } from "./components/_home_scroll";
import { lightbox } from "./components/_lightbox";
import { initSelect2 } from "./components/_select2";
import { maiConfirmation } from "./components/_mail_confirmation";
import { backImageScroll } from "./components/_back_image";
import { homeTextAnim } from "./components/_home_text_anim";
import { mapBox } from "./components/_mapbox";
import { tattooInfo } from "./components/_tattoo_info";
import { carouselOpacityScroll } from "./components/_carousel_opacity_scroll";
import { instaBeholdAPI } from "./components/_insta_behold_api";
import { instaOpacityScroll } from "./components/_insta_opacity_scroll";
import { navbarScroll } from "./components/_navbar_scroll_translate";
import { tattooSelect } from "./components/_tattoo_select";

document.addEventListener('turbolinks:load', () => {
  console.log('coucou from packs');
  showMenu();
  homeSwiper();
  dashboardLightbox();
  previewImageOnFileSelect();
  slideInImages();
  dashboardSelection();
  titleScroll();
  logoScroll();
  lightbox();
  initSelect2();
  maiConfirmation();
  backImageScroll();
  homeTextAnim();
  mapBox();
  tattooInfo();
  carouselOpacityScroll();
  instaBeholdAPI();
  instaOpacityScroll();
  navbarScroll();
  tattooSelect();
});
