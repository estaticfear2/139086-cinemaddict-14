import {createProfileTemplate} from './view/profile.js';
import {createFilterTemplate} from './view/filter.js';
import {createSortTemplate} from './view/sort.js';
import {createFilmsTemplate} from './view/films.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createFilmsListContainerTemplate} from './view/films-list-container.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createLoadMoreButtonTemplate} from './view/load-more-button.js';
import {createFooterStatsTemplate} from './view/footer-stats.js';
import {createFilmDetailsTemplate} from './view/film-details.js';

import {render, RenderPosition} from './utils/render.js';

const FILMS_COUNT = 5;
const TOP_FILMS_COUNT = 2;
const COMMENTED_FILMS_COUNT = 2;

const siteHeaderElement = document.querySelector('.header');

render(siteHeaderElement, createProfileTemplate(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector('.main');

render(siteMainElement, createFilterTemplate(), RenderPosition.AFTERBEGIN);
render(siteMainElement, createSortTemplate(), RenderPosition.BEFOREEND);
render(siteMainElement, createFilmsTemplate(), RenderPosition.BEFOREEND);

const filmsElement = siteMainElement.querySelector('.films');

render(filmsElement, createFilmsListTemplate('All movies. Upcoming'), RenderPosition.BEFOREEND);

const filmsListElement = filmsElement.querySelector('.films-list');

render(filmsListElement, createFilmsListContainerTemplate(), RenderPosition.BEFOREEND);

const filmsListContainerElement = filmsListElement.querySelector('.films-list__container');

for (let i = 1; i <= FILMS_COUNT; i++) {
  render(filmsListContainerElement, createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

render(filmsListElement, createLoadMoreButtonTemplate(), RenderPosition.BEFOREEND);

render(filmsElement, createFilmsListTemplate('Top rated'), RenderPosition.BEFOREEND);
render(filmsElement, createFilmsListTemplate('Most commented'), RenderPosition.BEFOREEND);

const filmsTopRatesListElement = filmsElement.querySelectorAll('.films-list')[1];
const filmsMostCommentedListElement = filmsElement.querySelectorAll('.films-list')[2];

filmsTopRatesListElement.classList.add('films-list--extra');
filmsMostCommentedListElement.classList.add('films-list--extra');

render(filmsTopRatesListElement, createFilmsListContainerTemplate(), RenderPosition.BEFOREEND);
for (let i = 1; i <= TOP_FILMS_COUNT; i++) {
  render(filmsTopRatesListElement.querySelector('.films-list__container'), createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

render(filmsMostCommentedListElement, createFilmsListContainerTemplate(), RenderPosition.BEFOREEND);
for (let i = 1; i <= COMMENTED_FILMS_COUNT; i++) {
  render(filmsMostCommentedListElement.querySelector('.films-list__container'), createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

const siteFooterElement = document.querySelector('.footer');
const footerStatisticElement = siteFooterElement.querySelector('.footer__statistics');

render(footerStatisticElement, createFooterStatsTemplate(), RenderPosition.BEFOREEND);
render(siteFooterElement, createFilmDetailsTemplate(), RenderPosition.AFTEREND);
