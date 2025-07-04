const img = document.getElementById("artifact");

  img.addEventListener("mouseover", () => {
    img.style.left = "8vw";
    img.style.top = "20vh";
  });
  
    const overlay = document.getElementById('overlay');
  document.addEventListener('mousemove', e => {
    const xoff = 5000
    const yoff = 5000
    const x = e.pageX - xoff;
    const y = e.pageY - yoff;
    overlay.style.maskPosition = `${x}px ${y}px`;
    overlay.style.webkitMaskPosition = `${x}px ${y}px`; // Safari
  });
    
 
  
  