const createFilmsListTemplate = (title) => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">${title}</h2>
    </section>`
  );
};

export {createFilmsListTemplate};
