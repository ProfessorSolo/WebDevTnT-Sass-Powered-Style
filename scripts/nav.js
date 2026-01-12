// Nav links are computed so the demos work both in dev (chapters/src)
// and after build (flat dist/). This is not part of the Sass lesson.

(function () {
  const inChapters = location.pathname.includes('/chapters/');

  const routes = {
    '01': inChapters
      ? '../../01-sass-workflow-and-foundations/src/01-sass-workflow-and-foundations.html'
      : './01-sass-workflow-and-foundations.html',

    '02': inChapters
      ? '../../02-sass-variables-and-custom-properties/src/02-sass-variables-and-custom-properties.html'
      : './02-sass-variables-and-custom-properties.html',

    '03': inChapters
      ? '../../03-placeholder-extend-and-mixins/src/03-placeholder-extend-and-mixins.html'
      : './03-placeholder-extend-and-mixins.html',

    '04': inChapters
      ? '../../04-sass-functions/src/04-sass-functions.html'
      : './04-sass-functions.html',

    '05': inChapters
      ? '../../05-sass-conditionals/src/05-sass-conditionals.html'
      : './05-sass-conditionals.html',

    '06': inChapters
      ? '../../06-loops-lists-and-maps/src/06-loops-lists-and-maps.html'
      : './06-loops-lists-and-maps.html',

    '07': inChapters
      ? '../../07-sass-and-tailwind-unite/src/07-sass-and-tailwind-unite.html'
      : './07-sass-and-tailwind-unite.html',
  };

  document.querySelectorAll('[data-chapter-nav] a[data-ch]').forEach((a) => {
    a.href = routes[a.dataset.ch];
  });
})();
