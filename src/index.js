import './index.html';
import './index.scss';
import './swiper-bundle';

const swiper1 = new Swiper('.stickers-swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 70,
  
    // If we need pagination
    pagination: {
      el: '.stickers-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

  const swiper2 = new Swiper('.stickers-swiper__small', {
    // Optional parameters
    loop: true,
    spaceBetween: 70,
  
    // If we need pagination
    pagination: {
      el: '.stickers-pagination-2',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

  