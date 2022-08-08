function openNav() {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    if (mediaQuery.matches) {
      document.getElementById("myNav").style.width = "100%";
    }
     else { document.getElementById("myNav").style.width = "50%";}
    
    
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%"
  }

function scrollDown() {
  const element = document.getElementById("solution");
   element.scrollIntoView({ block: 'start', behavior: 'smooth'});
}

function openSideNav() {
  document.getElementById("sideNav").style.width = "100%";    
}

function closeSideNav() {
  document.getElementById("sideNav").style.width = "0%";
}