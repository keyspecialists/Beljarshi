// المتخصصون لنسخ المفاتيح - بالجرشي
// Smooth fade-in only. No preloader. No video page transitions.
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity .35s ease';
    requestAnimationFrame(()=>{ document.body.style.opacity = '1'; });

    // Ensure background video plays (some mobile browsers need a nudge)
    const v = document.querySelector('video.bg-video');
    if(v){
      v.play().catch(()=>{});
    }
  });
})();
