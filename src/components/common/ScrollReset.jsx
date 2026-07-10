import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReset = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Restore style properties that might lock body scrolling
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    document.body.style.position = '';

    // 2. Remove specific scroll lock classes commonly used by the template
    const scrollLockClasses = [
      'offcanvas-open',
      'modal-open',
      'menu-open',
      'no-scroll',
      'overflow-hidden',
      'body-lock',
      'quick-view-open',
      'popup-open',
      'search-open'
    ];
    
    scrollLockClasses.forEach((className) => {
      document.body.classList.remove(className);
      document.documentElement.classList.remove(className);
    });

    // 3. Scroll to the top of the page on route transition
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollReset;
