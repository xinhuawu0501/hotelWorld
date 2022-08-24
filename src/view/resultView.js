import View from "./view";
class ResultView extends View {
  _parentEl = document.querySelector(".details");
  _data;

  _toggleModal() {
    this._parentEl.addEventListener("click", (e) => {
      if (e.target.getAttribute("id") === "photo-3") {
        document.querySelector(".overlay").classList.remove("hidden");
        document.querySelector(".modal-gallery").classList.remove("hidden");
      }
      if (e.target.classList.contains("modal-gallery-icon--close")) {
        document.querySelector(".overlay").classList.add("hidden");
        document.querySelector(".modal-gallery").classList.add("hidden");
      }
    });
  }

  _generateMarkup(data) {
    return `
        <div class="details__gallery">
          <figure class="details__gallery__photo" id="photo-1" >
            <img src="${data.allPhotos[0].photo_1280}" alt="Main photo">
          </figure>
          <figure class="details__gallery__photo" id="photo-2" >
            <img src="${data.allPhotos[1].photo_1280}" alt="Photo-2">
          </figure>
          <figure class="details__gallery__photo" id="photo-3" data-open-all="See all ${
            data.allPhotos.length
          } photos">
            <img src="${data.allPhotos[2].photo_1280}" alt="Photo-3">
          </figure>
        </div>

        <div class="modal modal-gallery hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon modal-icon modal-gallery-icon--close"
            viewBox="0 0 320 512"
          >
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
            />
          </svg>
          <div class="modal-gallery__main">
          ${data.allPhotos
            .map((photo) => {
              return `
            <figure class="modal-gallery__main-photo" data-tag="${
              photo.tags[0] ? photo.tags[0].tag : ""
            }">
              <img src="${photo.photo_1280}" >
            </figure>`;
            })
            .join("")}
          </div>
        </div>

        <div class="details__header details__section">
          <div class="details__header-main">
          ${
            data.free_cancellable === 1
              ? '<div class="details__header-main__isFreeCancellable">Free cancellable</div>'
              : ""
          }
          ${
            data.include_breakfast === 1
              ? '<div class="details__header-main__hasBreakfast">Breakfast included</div>'
              : ""
          }
          <h2 class="details__header-main__hotel-name">${data.hotel_name}</h2>
        </div>

        <div class="details__header__hotel-address">
        <svg xmlns="http://www.w3.org/2000/svg" class="details__header__hotel-address-icon icon" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
          ${data.hotel_address}
        </div>
        <span class="details__review">
          <span class="details__review-score">${data.review[0]}</span>
          <span class="details__review-description">${data.review[1]}</span>
        </span>
        <div class="details__price main-title">  
          <svg xmlns="http://www.w3.org/2000/svg" class="icon details__price-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M472.8 168.4C525.1 221.4 525.1 306.6 472.8 359.6L360.8 472.9C351.5 482.3 336.3 482.4 326.9 473.1C317.4 463.8 317.4 448.6 326.7 439.1L438.6 325.9C472.5 291.6 472.5 236.4 438.6 202.1L310.9 72.87C301.5 63.44 301.6 48.25 311.1 38.93C320.5 29.61 335.7 29.7 344.1 39.13L472.8 168.4zM.0003 229.5V80C.0003 53.49 21.49 32 48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L410.7 218.7C435.7 243.7 435.7 284.3 410.7 309.3L277.3 442.7C252.3 467.7 211.7 467.7 186.7 442.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5L.0003 229.5zM112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112z"/></svg>
          ${data.currency}&nbsp${Math.round(data.totalPrice)}</div>
      </div>
      
          
      <div class="details__info details__section">
        <h3 class="details__info__title main-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon details__info__title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg>
        Information</h3>
        <div class="details__info__item details__info__item-distance-to-cc">
          <b>Distance from city center: &nbsp</b>
          ${data.distance_to_city_center} m
        </div>
        <div class="details__info__item details__info__item-checkin-time">
          <b>Checkin time &nbsp</b> From: ${data.checkin_time.from}
        </div>
        <div class="details__info__item details__info__item-checkout-time">
          <b>Checkout time &nbsp</b> Until: ${data.checkout_time.until}
        </div>
        <div class="details__info__item details__info__item-config">
          ${data.unit_config}
        </div>
      </div>


      <div class="details__nearBy details__section">
        <h3 class="details__nearBy-title main-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon details__nearBy-title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M176 256C176 211.8 211.8 176 256 176C300.2 176 336 211.8 336 256C336 300.2 300.2 336 256 336C211.8 336 176 300.2 176 256zM256 0C273.7 0 288 14.33 288 32V66.65C368.4 80.14 431.9 143.6 445.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H445.3C431.9 368.4 368.4 431.9 288 445.3V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V445.3C143.6 431.9 80.14 368.4 66.65 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H66.65C80.14 143.6 143.6 80.14 224 66.65V32C224 14.33 238.3 0 256 0zM128 256C128 326.7 185.3 384 256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256z"/></svg>
        Location Highlights</h3>
        ${
          data.landmark || data.nearByStation
            ? `
        ${
          data.landmark
            ? `<div class="details__nearBy-landmark">
        <h4 class="details__nearBy-landmark-title sub-title">Nearby Landmark</h4>
        ${data.landmark
          .map((l) => {
            return `<div class="details__nearBy-landmark-item">${l}</div>`;
          })
          .join(" ")}
      </div>`
            : ""
        }
        ${
          data.nearByStation
            ? `<div class="details__nearBy-station ">
        <h4 class="details__nearBy-station-title sub-title">Nearby Station</h4>
        ${data.nearByStation
          .map((s) => {
            return `
            <div class="details__nearBy-station-item">
              <div class="details__nearBy-station-name">${s.station_name}</div>
              <div class="details__nearBy-station-distance">${s.distance_meters} m</div>
            </div>`;
          })
          .join(" ")}  
      </div>`
            : ""
        }`
            : `<div class="details__fallback-message">No location highlights for now :(</div>`
        }
        </div>


        <ul class="details__cusReviews details__section">
        <h3 class="details__cusReviews__title main-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon details__cusReviews__title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z"/></svg>
        Reviews</h3>
        ${
          data.customerReviews[0]
            ? ` 
          ${data.customerReviews
            .map((c) => {
              return ` <li class="details__cusReviews__item" id="${c.id}">
            <div class="details__cusReviews__item__author">
              <div class="details__cusReviews__item__author__name">${
                c.author_name
              }</div>
              <div class="details__cusReviews__item__author__type">${
                c.author_type
              }</div>
              <div class="details__cusReviews__item__author__purpose">${
                c.travel_purpose
              }</div>
            </div>
            <div class="details__cusReviews__item__header">
              <h4 class="details__cusReviews__item__header__title">&#8220 ${
                c.title
              } &#8221</h4>
              <div class="details__cusReviews__item__header__time">${
                c.date
              }</div>
            </div>
            <div class="details__cusReviews__item__score">${
              c.average_score
            }</div>

          <div class="details__cusReviews__item__content">
          ${
            c.pros
              ? `<div class="details__cusReviews__item__content-pro">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon details__cusReviews__item__content-pro--icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5C162.1 372.1 200.9 400 255.1 400C311.1 400 349.8 372.1 372.1 346.5C377.9 339.8 377.2 329.7 370.5 323.9C363.8 318.1 353.7 318.8 347.9 325.5C329.9 346.2 299.4 368 255.1 368C212.6 368 182 346.2 164.1 325.5H164.1zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/></svg>
            ${c.pros}
          </div>`
              : ""
          }
          ${
            c.cons
              ? `<div class="details__cusReviews__item__content-con">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon details__cusReviews__item__content-con--icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM159.3 388.7C171.5 349.4 209.9 320 256 320C302.1 320 340.5 349.4 352.7 388.7C355.3 397.2 364.3 401.9 372.7 399.3C381.2 396.7 385.9 387.7 383.3 379.3C366.8 326.1 315.8 287.1 256 287.1C196.3 287.1 145.2 326.1 128.7 379.3C126.1 387.7 130.8 396.7 139.3 399.3C147.7 401.9 156.7 397.2 159.3 388.7H159.3zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/></svg>
            ${c.cons}
            </div>`
              : ""
          }
            </div>
          </li>`;
            })
            .join("")}`
            : `<div class="details__fallback-message">No reviews for now :(</div>`
        }
        </ul>

        <div class="details__facilities details__section">
            <h3 class="details__facilities__title main-title">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon details__facilities__title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z"/></svg>
            Facilities</h3>
        ${
          data.facilities[0]
            ? `
            <div class="details__facilities__items">
             ${data.facilities
               .map((f) => {
                 return `
               <span class="details__facilities__items-item">
               ${
                 f.facilitytype_name == "Food & Drink"
                   ? `<svg xmlns="http://www.w3.org/2000/svg" class="icon details__facilities__items-item-icon--food" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z"/></svg>`
                   : `<svg xmlns="http://www.w3.org/2000/svg" class="icon details__facilities__items-item-icon" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>`
               }
               ${f.facility_name}
              </span>`;
               })
               .join("")}
            </div>`
            : ""
        }
        </div>

        <div class="details__FAQ details__section">
          <header>
            <h3 class="details__FAQ__title main-title">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon details__FAQ__title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"/></svg>
            FAQ</h3>
            <div class="details__FAQ__sidenote">${
              data.FAQ.average_response_time
            }</div>
          </header>
        ${
          data.FAQ.q_and_a_pairs[0]
            ? `
      <div class="details__FAQ__items">
        ${data.FAQ.q_and_a_pairs
          .slice(0, 10)
          .map((qa, i) => {
            return `
          <div class="details__FAQ__item" id="item-${i + 1}">
            <a class="details__FAQ__item--Q" href="#item-${i + 1}">
              ${qa.question}
              <svg xmlns="http://www.w3.org/2000/svg" class="details__FAQ__item-icon details__FAQ__item-icon--open" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="details__FAQ__item-icon details__FAQ__item-icon--close" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z"/></svg>
            </a>
            <div class="details__FAQ__item--A">${qa.answer}
            </div>
          </div>`;
          })
          .join("")}
      </div>`
            : `<div class="details__fallback-message">No FAQ for now :(</div>`
        }
        </div>

        <div class="details__link">
          <a href="${data.url}" class="details__link__link-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon details__link__link-item-icon" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/></svg>
            Visit Booking.com to explore more</a>
          </div>
    `;
  }
}

export default new ResultView();
