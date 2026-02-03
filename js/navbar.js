// Minimal navbar helpers: scroll for fragment links and active link on scroll
(function(){
  const navLinks = Array.from(document.querySelectorAll('.navbar a'));
  const sections = Array.from(document.querySelectorAll('div[id]'));

  // Scroll for hash links
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    if(href.startsWith('#')){
      link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target){
          target.scrollIntoView();
        }
      });
    }
  });

  // Highlight active nav link based on scroll position (simple)
  if('IntersectionObserver' in window && navLinks.length && sections.length){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(ent => {
        const id = ent.target.id;
        const related = navLinks.find(a => a.getAttribute('href') === '#'+id);
        if(related){
          if(ent.isIntersecting){
            navLinks.forEach(n=>n.classList.remove('active'));
            related.classList.add('active');
          }
        }
      });
    },{ root: null, threshold: 0.5 });

    sections.forEach(s => obs.observe(s));
  }
})();
