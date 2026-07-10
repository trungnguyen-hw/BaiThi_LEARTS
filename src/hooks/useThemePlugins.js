import { useEffect } from 'react';

/**
 * Custom React hook to safely initialize and cleanup jQuery & theme plugins
 * on page components (Sliders, Selects, Scrollbars, etc.)
 */
export const useThemePlugins = () => {
  useEffect(() => {
    // 1. Safe invocation of the main theme plugin activator
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }

    // 2. Cleanup operations when page component unmounts
    return () => {
      const $ = window.jQuery;
      if (!$) return;

      // Safe Slick slider destruction
      if ($.fn.slick) {
        $('.slick-initialized').each(function() {
          try {
            $(this).slick('unslick');
          } catch(e) {
            // Silence unslick errors on already destroyed nodes
          }
        });
      }

      // Safe Swiper slider destruction
      $('.swiper-container').each(function() {
        if (this.swiper) {
          try {
            this.swiper.destroy(true, true);
          } catch(e) {
            // Silence swiper destroy errors
          }
        }
      });
      
      // Remove scrollUp button to avoid duplicate button rendering on route transition
      $('#scrollUp').remove();
    };
  }, []); // Run only on mount & unmount of the page component
};
