// https://app.behold.so/

export const instaBeholdAPI = () => {
  const displayDiv = document.querySelector('#insta-display')
  const instaSwiper = document.querySelector('.insta-swiper')
  let count = 0
  if (displayDiv) {
  fetch('https://feeds.behold.so/teZnDQ9mmtwVn8KoPOwB')
    .then(data => data.json())
    .then(photos => {
      photos.forEach(({
        id,             // The post ID
        mediaUrl,       // The image source
        permalink,      // URL of the Instagram post
        caption,        // Post caption
        mediaType,      // 'IMAGE', 'VIDEO', or 'CAROUSEL_ALBUM'
        thumbnailUrl,   // Only returned for video posts
        timestamp,      // Post publish date,
        children        // An array of CAROUSEL_ALBUM children. Each with id, mediaUrl, and mediaType
      }, index) => {
        if (mediaType == 'IMAGE' && count <= 3) {
          count += 1
          const content = `
            <a href='https://www.instagram.com/odahil/' target="_blank">
              <div class="insta-card insta-image-card">
                <div class="insta-card-content">
                  <div class="insta-card-image">
                    <svg class="glow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                      <path class="st0" d="M15 2.8c4 0 4.4 0 6 0.1 1.4 0.1 2.2 0.3 2.8 0.5 0.7 0.3 1.2 0.6 1.7 1.1 0.5 0.5 0.8 1 1.1 1.7C26.8 6.8 27 7.6 27.1 9c0.1 1.6 0.1 2 0.1 6s0 4.4-0.1 6c-0.1 1.4-0.3 2.2-0.5 2.8 -0.3 0.7-0.6 1.2-1.1 1.7 -0.5 0.5-1 0.8-1.7 1.1 -0.5 0.2-1.3 0.4-2.8 0.5 -1.6 0.1-2 0.1-6 0.1s-4.4 0-6-0.1c-1.4-0.1-2.2-0.3-2.8-0.5 -0.7-0.3-1.2-0.6-1.7-1.1 -0.5-0.5-0.8-1-1.1-1.7C3.2 23.2 3 22.4 2.9 21c-0.1-1.6-0.1-2-0.1-6s0-4.4 0.1-6C3 7.6 3.2 6.8 3.4 6.2 3.7 5.5 4 5.1 4.5 4.5c0.5-0.5 1-0.8 1.7-1.1C6.8 3.2 7.6 3 9 2.9 10.6 2.8 11 2.8 15 2.8M15 0.2c-4 0-4.5 0-6.1 0.1C7.3 0.3 6.2 0.6 5.3 0.9c-1 0.4-1.8 0.9-2.6 1.7C1.8 3.5 1.3 4.3 0.9 5.3c-0.4 0.9-0.6 2-0.7 3.6C0.2 10.5 0.1 11 0.1 15c0 4 0 4.5 0.1 6.1 0.1 1.6 0.3 2.7 0.7 3.6 0.4 1 0.9 1.8 1.7 2.6 0.8 0.8 1.7 1.3 2.6 1.7 0.9 0.4 2 0.6 3.6 0.7 1.6 0.1 2.1 0.1 6.1 0.1s4.5 0 6.1-0.1c1.6-0.1 2.7-0.3 3.6-0.7 1-0.4 1.8-0.9 2.6-1.7 0.8-0.8 1.3-1.7 1.7-2.6 0.4-0.9 0.6-2 0.7-3.6 0.1-1.6 0.1-2.1 0.1-6.1s0-4.5-0.1-6.1c-0.1-1.6-0.3-2.7-0.7-3.6 -0.4-1-0.9-1.8-1.7-2.6 -0.8-0.8-1.7-1.3-2.6-1.7 -0.9-0.4-2-0.6-3.6-0.7C19.5 0.2 19 0.2 15 0.2L15 0.2z"/>
                      <path class="st0" d="M15 7.4c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6S19.2 7.4 15 7.4zM15 20c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5S17.7 20 15 20z"/>
                      <circle class="st0" cx="22.9" cy="7.1" r="1.8"/>
                    </svg>
                    <img src=${mediaUrl} data-instaId="${index}"></img>
                  </div>
                </div>
                <div class="insta-card-info" id="insta-info-${index}">
                  <h4>${caption.slice(0, 240).concat('', '...')}</h4>
                </div>
              </div>
            </a>
          `
          displayDiv.insertAdjacentHTML('beforeend', content)
          instaSwiper.insertAdjacentHTML('beforeend', `<div class="swiper-slide">${content}</div>`)
        }
        if (mediaType == 'VIDEO' && count <= 3) {
          count += 1
          const content = `
              <div class="insta-card insta-video-card">
                <div class="insta-card-content">
                  <div class="insta-card-image">
                    <svg class="glow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                      <path class="st0" d="M15 2.8c4 0 4.4 0 6 0.1 1.4 0.1 2.2 0.3 2.8 0.5 0.7 0.3 1.2 0.6 1.7 1.1 0.5 0.5 0.8 1 1.1 1.7C26.8 6.8 27 7.6 27.1 9c0.1 1.6 0.1 2 0.1 6s0 4.4-0.1 6c-0.1 1.4-0.3 2.2-0.5 2.8 -0.3 0.7-0.6 1.2-1.1 1.7 -0.5 0.5-1 0.8-1.7 1.1 -0.5 0.2-1.3 0.4-2.8 0.5 -1.6 0.1-2 0.1-6 0.1s-4.4 0-6-0.1c-1.4-0.1-2.2-0.3-2.8-0.5 -0.7-0.3-1.2-0.6-1.7-1.1 -0.5-0.5-0.8-1-1.1-1.7C3.2 23.2 3 22.4 2.9 21c-0.1-1.6-0.1-2-0.1-6s0-4.4 0.1-6C3 7.6 3.2 6.8 3.4 6.2 3.7 5.5 4 5.1 4.5 4.5c0.5-0.5 1-0.8 1.7-1.1C6.8 3.2 7.6 3 9 2.9 10.6 2.8 11 2.8 15 2.8M15 0.2c-4 0-4.5 0-6.1 0.1C7.3 0.3 6.2 0.6 5.3 0.9c-1 0.4-1.8 0.9-2.6 1.7C1.8 3.5 1.3 4.3 0.9 5.3c-0.4 0.9-0.6 2-0.7 3.6C0.2 10.5 0.1 11 0.1 15c0 4 0 4.5 0.1 6.1 0.1 1.6 0.3 2.7 0.7 3.6 0.4 1 0.9 1.8 1.7 2.6 0.8 0.8 1.7 1.3 2.6 1.7 0.9 0.4 2 0.6 3.6 0.7 1.6 0.1 2.1 0.1 6.1 0.1s4.5 0 6.1-0.1c1.6-0.1 2.7-0.3 3.6-0.7 1-0.4 1.8-0.9 2.6-1.7 0.8-0.8 1.3-1.7 1.7-2.6 0.4-0.9 0.6-2 0.7-3.6 0.1-1.6 0.1-2.1 0.1-6.1s0-4.5-0.1-6.1c-0.1-1.6-0.3-2.7-0.7-3.6 -0.4-1-0.9-1.8-1.7-2.6 -0.8-0.8-1.7-1.3-2.6-1.7 -0.9-0.4-2-0.6-3.6-0.7C19.5 0.2 19 0.2 15 0.2L15 0.2z"/>
                      <path class="st0" d="M15 7.4c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6S19.2 7.4 15 7.4zM15 20c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5S17.7 20 15 20z"/>
                      <circle class="st0" cx="22.9" cy="7.1" r="1.8"/>
                    </svg>
                    <video width="250" height="250" controls autoplay>
                      <source src=${mediaUrl} type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div class="insta-card-info" id="insta-info-${index}">
                </div>
              </div>
          `
          displayDiv.insertAdjacentHTML('beforeend', content)
          instaSwiper.insertAdjacentHTML('beforeend', `<div class="swiper-slide">${content}</div>`)
        }
      });
    })
  }
}
