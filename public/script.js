
   const container = document.getElementById("scroll-container");

  function autoScroll() {
    container.scrollTop += 1; // vertical scroll speed

    // Loop back to top
    if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
      container.scrollTop = 0;
    }
  }

  setInterval(autoScroll, 20); 





  const hori_container = document.getElementById("scroll-horizontally");

  function autoScrollHori() {
    hori_container.scrollLeft += 1; // scroll speed

    // Loop back to start
    if (hori_container.scrollLeft >= hori_container.scrollWidth - hori_container.clientWidth) {
      hori_container.scrollLeft = 0;
    }
  }

  setInterval(autoScrollHori, 10); // speed in ms (smaller = faster)


  let burger = document.getElementsByClassName('.burger');
  let mid_nav = document.getElementsByClassName('mid_nav');

  burger.addEventListener('click', ()=>{
       mid_nav.classList.toggle('mid_nav_toggle');
  })
