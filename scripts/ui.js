document.querySelectorAll('.demo-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    // tabs
    document
      .querySelectorAll('.demo-tab')
      .forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    // panels
    const target = tab.getAttribute('data-panel');
    document
      .querySelectorAll('.demo-panel')
      .forEach((panel) => panel.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});
