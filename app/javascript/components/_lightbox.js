const lightbox = () => {
  const lightbox = document.getElementsByClassName('lightbox');
  if (lightbox) {
    /**
    * @property {HTMLElement} element
    * @property {string[]} images lightbox images url
    * @property {string} url image displayed
    */

    class Lightbox {

      static init () {
        const links = Array.from(document.querySelectorAll('#tattoo-list-picture'))
        const gallery = links.map(link => link.src)
        links.forEach(link => {
          link.addEventListener('click', (e) => {
            new Lightbox(e.currentTarget.src, gallery)
          })
        })
      }

      /**
       * @param {string} url image url
       * @param {string[]} images lightbox images url
       */
      constructor (url, images) {
        this.element = this.buildDOM(url);
        this.images = images
        this.loadImage(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp)
        const doc = document.querySelector('.lightbox__container')
        doc.addEventListener('click', (e) => {
          this.close(e)
        })
      }

      /**
       * @param {string} url
       * @return {HTMLElement}
       */
      buildDOM (url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `<button class="lightbox__close"><i class="fas fa-times"></i></button>
          <button class="lightbox__next"><i class="fas fa-chevron-right"></i></button>
          <button class="lightbox__prev"><i class="fas fa-chevron-left"></i></button>
          <div class="lightbox__container">
          </div>`
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
        return dom
      }

      /**
       * @param {string} url image url
       */
      loadImage (url) {
        this.url = null
        const image = new Image();
        const container = this.element.querySelector('.lightbox__container')
        const loader = document.createElement('div')
        loader.classList.add('lightbox__loader')
        container.innerHTML = ''
        container.appendChild(loader)
        image.onload = () => {
          container.removeChild(loader)
          container.appendChild(image)
          this.url = url
        }
        image.src = url;
      }

         /**
       * @param {KeyboardEvent}
       */
      onKeyUp (e) {
        if (e.key === 'Escape') {
          this.close(e)
        } else if (e.key === 'ArrowRight') {
          this.next(e)
        } else if (e.key === 'ArrowLeft') {
          this.prev(e)
        }
      }

       /**
      * @param {MouseEvent|KeyboardEvent}
      */
      close (e) {
        e.preventDefault()
        this.element.classList.add('fadeout')
        window.setTimeout(() => {
          this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
      }

      /**
      * @param {MouseEvent|KeyboardEvent}
      */
      next (e) {
        e.preventDefault()
        let index = this.images.findIndex(image => image === this.url)
        if (index === this.images.length - 1) {
          index = -1
        }
        this.loadImage(this.images[index + 1])
      }

      /**
      * @param {MouseEvent|KeyboardEvent}
      */
      prev (e) {
        e.preventDefault()
        let index = this.images.findIndex(image => image === this.url)
        if (index === 0) {
          index = this.images.length
        }
        this.loadImage(this.images[index - 1])
      }

    }

    Lightbox.init();
  }
}

export { lightbox }
