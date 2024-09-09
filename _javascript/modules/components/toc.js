export function toc() {
  if (document.querySelector('main h2, main h3')) {
    // see: https://github.com/tscanlin/tocbot#usage
    tocbot.init({
      tocSelector: '#toc',
      contentSelector: '.content',
      ignoreSelector: '[data-toc-skip]',
      headingSelector: 'h1, h2, h3, h4',
      activeListItemClass: '6',
      orderedList: true,
      scrollSmooth: true,
      collapseDepth: 6 //unfold all list
    });

    document.getElementById('toc-wrapper').classList.remove('d-none');
  }
}
