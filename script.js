"use strict";

/*
 * Portfolio settings
 * Update these values when contact details, links, or verified results change.
 */
const SITE_CONFIG = {
  email: "numaanmohd45@gmail.com",
  whatsapp: "https://wa.me/919205286465",
  instagram: "https://www.instagram.com/dripitair/",
  linkedin: "https://www.linkedin.com/in/numaan-mohd-13185a296/",
  resumePath: "assets/resume/MOHD_NUMAAN_RESUME_2026.pdf.pdf",
};

const DRIVE = {
  thumbnail: (id, width = 1600) => `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w${width}`,
  preview: (id) => `https://drive.google.com/file/d/${encodeURIComponent(id)}/preview`,
};

const videoProjects = [
  {
    title: "Lead Generation",
    subtitle: "Shot and edited by me",
    badge: "3 ORGANIC LEADS",
    file: "LEAD_GENERATION_3_ORGANIC_LEADS.mp4",
    driveId: "1xekNAvvUIk82XCvkyR4awrhlAK9YbpJ3",
    poster: "assets/video-posters/LEAD_GENERATION_3_ORGANIC_LEADS.jpg",
    detail: "I shot and edited the complete video. It generated three organic leads without paid ads or boosting.",
  },
  {
    title: "Full Short — Shot & Edited by Me",
    subtitle: "Complete short-form production",
    badge: "FILMED + EDITED",
    file: "FULL_SHORT_EDITED_BY_ME.mp4",
    driveId: "1c8kWqY57DFH2Gn4oiSRVOCS_CmhMdn8-",
    poster: "assets/video-posters/FULL_SHORT_EDITED_BY_ME.jpg",
    detail: "I filmed and edited the complete short, shaping it from the first shot to the final cut.",
  },
  {
    title: "Colour Grading Before / After 01",
    subtitle: "Before / after colour comparison",
    badge: "BEFORE / AFTER",
    file: "COLOR_GRADING_BEFORE_AFTER_01.mp4",
    driveId: "19c36-uZ8d3nCoiDl6lPIMxY4_xLC3wDX",
    poster: "assets/video-posters/COLOR_GRADING_BEFORE_AFTER_01.jpg",
    detail: "The full preview shows the footage before and after colour grading.",
  },
  {
    title: "Colour Grading Before / After 02",
    subtitle: "Before / after colour comparison",
    badge: "BEFORE / AFTER",
    file: "COLOR_GRADING_BEFORE_AFTER_02.mp4",
    driveId: "1rtXEDZQPnfoDbenArr0rW8mjJjKi1pVN",
    poster: "assets/video-posters/COLOR_GRADING_BEFORE_AFTER_02.jpg",
    detail: "A second colour-grading comparison, with the original and finished look in the preview.",
  },
  {
    title: "Realtor Video",
    subtitle: "Property video",
    badge: "135K+ VIEWS",
    file: "REALTOR_VIDEO_135K_PLUS.mp4",
    driveId: "1DU0aD8p_rjTLoRy9Yv7ckmYC1oC-TLxp",
    poster: "assets/video-posters/REALTOR_VIDEO_135K_PLUS.jpg",
    detail: "A property-focused edit that reached 135K+ views.",
  },
  {
    title: "TV9 Expo Video",
    subtitle: "Event video",
    badge: "50K+ VIEWS",
    file: "TV9_EXPO_VIDEO_50K_PLUS.mp4",
    driveId: "1diJWa_teWtQVXVoNEA-jaBijX32Ck_Hi",
    poster: "assets/video-posters/TV9_EXPO_VIDEO_50K_PLUS.jpg",
    detail: "An event video edit for the TV9 Expo that reached 50K+ views.",
  },
  {
    title: "Before / After Edit 01",
    subtitle: "Before / after edit",
    badge: "BEFORE / AFTER",
    file: "BEFORE_AFTER_EDIT_01.mp4",
    driveId: "1xD2ZveJsZRUUDdJjPovebqDy3T7H2dNL",
    poster: "assets/video-posters/BEFORE_AFTER_EDIT_01.jpg",
    detail: "A before-and-after edit comparison; play the preview to see the transformation.",
  },
  {
    title: "Before / After Edit 02",
    subtitle: "Before / after edit",
    badge: "BEFORE / AFTER",
    file: "BEFORE_AFTER_EDIT_02.mp4",
    driveId: "1b9ahMz2Xd9lKBt8ZQCSRcJqf4Zb9Vwdb",
    poster: "assets/video-posters/BEFORE_AFTER_EDIT_02.jpg",
    detail: "A second editing comparison showing the original and finished versions.",
  },
  {
    title: "Digital Marketing Client",
    subtitle: "Digital marketing video edit",
    badge: "DIGITAL MARKETING",
    file: "NORMAL_VIDEO_01.mp4",
    driveId: "1cSHyF7VeZA2JQvU0_sFyz7Jq1GxjVvIp",
    poster: "assets/video-posters/NORMAL_VIDEO_01.jpg",
    detail: "A client video edit created for digital marketing content.",
  },
  {
    title: "Dental Video Edit",
    subtitle: "Dental practice video",
    badge: "WORK THAT CONNECTS",
    file: "NORMAL_VIDEO_02.mp4",
    driveId: "1U-SAZBSKoDO-38D3DKkA7ZgFxHUXtec1",
    poster: "assets/video-posters/NORMAL_VIDEO_02.jpg",
    detail: "A dental-focused edit designed to help the practice connect with its audience.",
  },
];

const performanceStats = [
  { value: "135K+", label: "VIEWS", note: "Realtor video" },
  { value: "50K+", label: "VIEWS", note: "TV9 Expo video" },
  { value: "3", label: "ORGANIC LEADS", note: "No paid ads or boosting" },
];

/*
 * These are the actual files listed in the shared Drive folder. The vertical
 * folder contains 24 files, despite the brief's count of 22; all are included.
 */
const verticalThumbnails = [
  { name: "2VERTICAL_THUMBNAIL_24.jpg", id: "1YL-8GXnAfnuNL-LnBBAWwBGhaKUQEKnZ" },
  { name: "VERTICAL_THUMBNAIL_01.png", id: "1Cbmhh48UBz7UDIXltOWn1qDO649hMkPX" },
  { name: "VERTICAL_THUMBNAIL_02.png", id: "12_db-y_CjGcLNzZDVtXnwDCcJy7i39EC" },
  { name: "VERTICAL_THUMBNAIL_03.png", id: "1EwuWT-G0X7HsvJct2jckOUm4uPENBgel" },
  { name: "VERTICAL_THUMBNAIL_04.png", id: "1fmFVMKrcEkSNBB6guf1mAuychGN9214b" },
  { name: "VERTICAL_THUMBNAIL_05.png", id: "100SHvM7saEtZMSfjon0kWcbKlp58_OP6" },
  { name: "VERTICAL_THUMBNAIL_06.png", id: "16kLknw6HXKGGb6v41tmutNp7K6DztJXZ" },
  { name: "VERTICAL_THUMBNAIL_07.png", id: "1SIWo3dPFz6OzUAA3g2SbMM0vPVD_jigv" },
  { name: "VERTICAL_THUMBNAIL_08.png", id: "1x0JuNuN6zgfNUw3rWZCAzF5pvjdVe74j" },
  { name: "VERTICAL_THUMBNAIL_09.png", id: "1Y4YCgi9U9aFZIvm3qWjiQq9jmk2NbOwS" },
  { name: "VERTICAL_THUMBNAIL_10.png", id: "1FxtVOltPpY1uQFQNBL8IhSDrSrjbFH-Q" },
  { name: "VERTICAL_THUMBNAIL_11.png", id: "14jStytnslN5Wn3L3BchS9ma9w_NXlMU5" },
  { name: "VERTICAL_THUMBNAIL_12.png", id: "1W5A4Sb0qC3_KE6Gg7zt-Mkg-Fl3CZM64" },
  { name: "VERTICAL_THUMBNAIL_13.png", id: "17ZgA0Tpdf5c2Ek1oqWAgz0gjAQGMLVul" },
  { name: "VERTICAL_THUMBNAIL_14.png", id: "1M2-531zXyNm1ILDQvddzVHxQDJf5hPwF" },
  { name: "VERTICAL_THUMBNAIL_15.png", id: "1tPMXdfmVAKVeZKDIR700RMnChAeL2wXd" },
  { name: "VERTICAL_THUMBNAIL_16.png", id: "1Fw3gArE-ISgArRxw_IbX8Y64T2jphRXI" },
  { name: "VERTICAL_THUMBNAIL_17.png", id: "1vE_1DJLvx7g17DqEY931_7ODU5_Sd1Hr" },
  { name: "VERTICAL_THUMBNAIL_18.png", id: "1XeROVm9qiE9vWMEMfwf120eKiTbPGS-k" },
  { name: "VERTICAL_THUMBNAIL_19.png", id: "14gxyAT9_ZA9uv6Z47PyMYAJZ7QC0mj8Y" },
  { name: "VERTICAL_THUMBNAIL_20.png", id: "1sobM3sBBCRSsKDmAtMpxgW3tUwNKppDc" },
  { name: "VERTICAL_THUMBNAIL_21.png", id: "1aovSWsVa9k8SXLFoooS6389OFNCBCCws" },
  { name: "VERTICAL_THUMBNAIL_22.png", id: "1qwheD5GhRNaDy3laYpvGoXhhNWoOCVSv" },
  { name: "VERTICAL_THUMBNAIL_23.jpg", id: "1ouwOZb_s9pfPURO6FjcN3Te9ChhVhEJL" },
];

const horizontalThumbnails = [
  { name: "HORIZONTAL_THUMBNAIL_01.jpg", id: "1CSDtz_-Xa6bRulq8hcRbz5gYvg5HYe4s" },
  { name: "HORIZONTAL_THUMBNAIL_02.png", id: "1YjXQV1viir8_RX3YxipV4aEEO2xCddr9" },
  { name: "HORIZONTAL_THUMBNAIL_03.jpg", id: "1A2GP2CNPh6ZsnXeHwX0uqmH3lDNXxTtd" },
  { name: "HORIZONTAL_THUMBNAIL_04.jpg", id: "1RR9XMjSqGEjbMEzZlnqRTnfmLuFuTCQP" },
  { name: "HORIZONTAL_THUMBNAIL_05.jpg", id: "1k8yzApi_diQrfT7rivHQPcagG8nEQeVt" },
  { name: "HORIZONTAL_THUMBNAIL_06.jpg", id: "1nHPGSrEwb00fp4psOFQZRnSQes67c8Nk" },
  { name: "HORIZONTAL_THUMBNAIL_07.jpg", id: "1kG2zTz99btS9iN-gUSrDuLKt3pIeVeM8" },
  { name: "HORIZONTAL_THUMBNAIL_08.jpg", id: "1AfPeXjZcjWw5j3WRrEKRRekozByF7YB8" },
  { name: "HORIZONTAL_THUMBNAIL_09.png", id: "1TOpGQFRqwHOXH7eRKJTd4yR6Bi93MncL" },
  { name: "HORIZONTAL_THUMBNAIL_10.jpg", id: "1GahN7VzziWQffJnl5ZI1NdrEn0rF8-xG" },
  { name: "HORIZONTAL_THUMBNAIL_11.jpg", id: "1bOtboEJIiOyc3ADxgpd1tFo_-CPRhhhW" },
  { name: "HORIZONTAL_THUMBNAIL_12.jpg", id: "1Cr1grFk9q0heVCAEPjKLSg8X5T_x8v-n" },
  { name: "HORIZONTAL_THUMBNAIL_13.jpg", id: "1C05fRYESpCkCkk4ut3VibY3D3zIodgUC" },
  { name: "HORIZONTAL_THUMBNAIL_14.jpg", id: "1MKFqOUFHN51IMYFVR8iikB7PYrB0W9UU" },
  { name: "HORIZONTAL_THUMBNAIL_15.jpg", id: "1yIY8MMVbI634oW_OqzJvZphT-Jmy-0JT" },
  { name: "HORIZONTAL_THUMBNAIL_16.jpg", id: "1eOEu-2ZYMhSIREie-xU9b7XwOrHqZClc" },
];

const posterDesigns = [
  { name: "POSTER_DESIGN_01.png", id: "1_6Axr6gj4HOROrnN93ifq0r8GBo895fS" },
  { name: "POSTER_DESIGN_02.png", id: "15_HbqGu2U0SDTT9CqGzgqTBwg5DOYyPW" },
  { name: "POSTER_DESIGN_03.png", id: "1ljIB6mBXMYCXKBJErUsCcYdjt_JFQ4py" },
  { name: "POSTER_DESIGN_4.jpg", id: "1FfsF0djGYxCChJVzI3QBS5Aen5RaWdZk" },
];

function addLocalGalleryPaths(items, folder) {
  return items.map((item) => ({
    ...item,
    localSrc: `${folder}/${item.name.replace(/\.[^.]+$/, ".webp")}`,
  }));
}

const localVerticalThumbnails = addLocalGalleryPaths(verticalThumbnails, "assets/gallery/vertical");
const localHorizontalThumbnails = addLocalGalleryPaths(horizontalThumbnails, "assets/gallery/horizontal");
const localPosterDesigns = addLocalGalleryPaths(posterDesigns, "assets/gallery/posters");

function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderVideos() {
  const grid = document.querySelector("#video-grid");
  const fragment = document.createDocumentFragment();

  videoProjects.forEach((project, index) => {
    const card = makeElement("article", "video-card");
    card.setAttribute("role", "group");
    card.setAttribute("aria-roledescription", "slide");
    card.setAttribute("aria-label", `${index + 1} of ${videoProjects.length}: ${project.title}`);
    const play = makeElement("button", "video-open");
    play.type = "button";
    play.setAttribute("aria-label", `Play ${project.title}`);
    play.dataset.videoIndex = String(index);

    const image = new Image();
    image.src = project.poster;
    image.alt = `${project.title} video preview`;
    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";
    play.append(image);

    const number = makeElement("span", "video-number", `${String(index + 1).padStart(2, "0")} / 10`);
    number.setAttribute("aria-hidden", "true");
    play.append(number);
    const playMark = makeElement("span", "play-mark", "▶");
    playMark.setAttribute("aria-hidden", "true");
    play.append(playMark);

    const meta = makeElement("div", "video-card-meta");
    const titleGroup = makeElement("div", "video-title-group");
    titleGroup.append(makeElement("h3", "", project.title));
    titleGroup.append(makeElement("p", "", project.subtitle));
    meta.append(titleGroup);
    meta.append(makeElement("p", "video-badge", project.badge));
    meta.append(makeElement("p", "video-detail", project.detail));

    card.append(play, meta);
    fragment.append(card);
  });

  grid.replaceChildren(fragment);
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-video-index]");
    if (!button) return;
    openVideo(videoProjects[Number(button.dataset.videoIndex)]);
  });
}

function setupVideoCarousel() {
  const track = document.querySelector("#video-grid");
  const slides = Array.from(track.querySelectorAll(".video-card"));
  const pagination = document.querySelector("#video-carousel-pagination");
  const count = document.querySelector("#video-carousel-count");
  const previous = document.querySelector("#video-carousel-prev");
  const next = document.querySelector("#video-carousel-next");
  const previousClone = slides[slides.length - 1].cloneNode(true);
  const nextClone = slides[0].cloneNode(true);
  const allSlides = [previousClone, ...slides, nextClone];
  let activeIndex = 0;
  let physicalIndex = 1;
  let scrollFrame = 0;
  let programmaticScroll = false;
  let pointerDown = false;
  let scrollEndTimer;

  previousClone.dataset.carouselClone = "previous";
  nextClone.dataset.carouselClone = "next";
  track.replaceChildren(...allSlides);

  const dots = slides.map((slide, index) => {
    const dot = makeElement("button", "video-carousel-dot");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show video ${index + 1}: ${videoProjects[index].title}`);
    dot.addEventListener("click", () => goTo(index));
    pagination.append(dot);
    return dot;
  });

  function setActive(index, position = physicalIndex) {
    activeIndex = (index + slides.length) % slides.length;
    physicalIndex = position;
    count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    allSlides.forEach((slide, slidePosition) => {
      const current = slidePosition === physicalIndex;
      const visible = Math.abs(slidePosition - physicalIndex) <= 1;
      slide.classList.toggle("is-current", current);
      slide.classList.toggle("is-prev", slidePosition === physicalIndex - 1);
      slide.classList.toggle("is-next", slidePosition === physicalIndex + 1);
      slide.setAttribute("aria-hidden", String(!visible));
      slide.inert = !visible;
    });
    dots.forEach((dot, dotIndex) => {
      const current = dotIndex === activeIndex;
      dot.classList.toggle("is-current", current);
      if (current) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function centeredScrollLeft(slide) {
    return slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
  }

  function closestPosition() {
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let smallestDistance = Infinity;
    allSlides.forEach((slide, position) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - trackCenter);
      if (distance < smallestDistance) {
        closest = position;
        smallestDistance = distance;
      }
    });
    return closest;
  }

  function goTo(index) {
    const targetIndex = (index + slides.length) % slides.length;
    const targetPosition = index < 0 ? 0 : index >= slides.length ? slides.length + 1 : targetIndex + 1;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    setActive(targetIndex, targetPosition);
    programmaticScroll = true;
    window.clearTimeout(scrollEndTimer);
    track.scrollTo({ left: centeredScrollLeft(allSlides[targetPosition]), behavior });
    scrollEndTimer = window.setTimeout(finishScroll, 1200);
  }

  function finishScroll() {
    if (pointerDown) return;
    programmaticScroll = false;
    window.clearTimeout(scrollEndTimer);
    const position = closestPosition();
    if (position === 0) {
      const destination = slides.length;
      track.scrollTo({ left: centeredScrollLeft(allSlides[destination]), behavior: "auto" });
      setActive(slides.length - 1, destination);
    } else if (position === slides.length + 1) {
      track.scrollTo({ left: centeredScrollLeft(allSlides[1]), behavior: "auto" });
      setActive(0, 1);
    } else {
      setActive(position - 1, position);
    }
  }

  previous.addEventListener("click", () => goTo(activeIndex - 1));
  next.addEventListener("click", () => goTo(activeIndex + 1));
  track.addEventListener("pointerdown", () => {
    pointerDown = true;
    window.clearTimeout(scrollEndTimer);
  }, { passive: true });
  const releasePointer = () => {
    if (!pointerDown) return;
    pointerDown = false;
    window.clearTimeout(scrollEndTimer);
    scrollEndTimer = window.setTimeout(finishScroll, 280);
  };
  window.addEventListener("pointerup", releasePointer, { passive: true });
  window.addEventListener("pointercancel", releasePointer, { passive: true });
  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
  });
  track.addEventListener("scroll", () => {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      if (!programmaticScroll) {
        const position = closestPosition();
        const index = (position - 1 + slides.length) % slides.length;
        if (index !== activeIndex || position !== physicalIndex) {
          setActive(index, position);
        }
      }
      scrollFrame = 0;
    });
    window.clearTimeout(scrollEndTimer);
    if (!pointerDown) scrollEndTimer = window.setTimeout(finishScroll, 280);
  }, { passive: true });
  track.addEventListener("scrollend", () => {
    if (!pointerDown) finishScroll();
  });

  track.scrollLeft = centeredScrollLeft(slides[0]);
  setActive(0, 1);
}

function renderResults() {
  const list = document.querySelector("#results-list");
  const fragment = document.createDocumentFragment();
  performanceStats.forEach((stat) => {
    const row = makeElement("div", "result-row");
    row.append(makeElement("p", "result-value", stat.value));
    const details = makeElement("p", "result-label");
    details.append(document.createTextNode(stat.label));
    details.append(makeElement("span", "result-note", stat.note));
    row.append(details);
    fragment.append(row);
  });
  list.replaceChildren(fragment);
}

function thumbnailSource(item, width = 1600) {
  return item.src || DRIVE.thumbnail(item.id, width);
}

function renderGallery(items, selector, itemClass, altPrefix) {
  const gallery = document.querySelector(selector);
  const fragment = document.createDocumentFragment();

  items.forEach((item, index) => {
    const button = makeElement("button", `gallery-item ${itemClass}`);
    button.type = "button";
    button.dataset.galleryIndex = String(index);
    button.setAttribute("aria-label", `View ${item.name} larger`);

    const image = new Image();
    image.src = thumbnailSource(item, 1200);
    image.alt = `${altPrefix} ${String(index + 1).padStart(2, "0")}`;
    image.loading = "lazy";
    image.decoding = "async";
    button.append(image);
    fragment.append(button);
  });

  gallery.replaceChildren(fragment);
}

function setupGalleryCarousel(selector, items, name) {
  const track = document.querySelector(selector);
  const controls = track.parentElement.querySelector(".gallery-carousel-controls");
  const pagination = controls.querySelector("[data-gallery-pagination]");
  const count = controls.querySelector("[data-gallery-count]");
  const previous = controls.querySelector("[data-gallery-prev]");
  const next = controls.querySelector("[data-gallery-next]");
  const slides = Array.from(track.querySelectorAll(".gallery-item"));
  const allSlides = [slides[slides.length - 1].cloneNode(true), ...slides, slides[0].cloneNode(true)];
  let activeIndex = 0;
  let physicalIndex = 1;
  let scrollFrame = 0;
  let scrollEndTimer;

  allSlides[0].dataset.carouselClone = "previous";
  allSlides[allSlides.length - 1].dataset.carouselClone = "next";
  function applyImageRatio(image) {
    if (!(image instanceof HTMLImageElement) || !image.naturalWidth || !image.naturalHeight) return;
    const slide = image.closest(".gallery-item");
    if (!slide || !track.contains(slide)) return;
    slide.style.setProperty("--gallery-image-ratio", `${image.naturalWidth} / ${image.naturalHeight}`);
  }

  track.addEventListener("load", (event) => applyImageRatio(event.target), true);
  track.addEventListener("error", (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    const slide = image.closest(".gallery-item");
    if (!slide || !track.contains(slide)) return;
    const item = items[Number(slide.dataset.galleryIndex)];

    if (item?.localSrc && image.dataset.localFallbackTried !== "true") {
      image.dataset.localFallbackTried = "true";
      image.src = item.localSrc;
      return;
    }

    slide.classList.add("image-unavailable");
    image.remove();
    if (!slide.querySelector(".image-fallback")) {
      slide.append(makeElement("span", "image-fallback", `${item?.name || "Image"} · preview unavailable`));
    }
  }, true);
  track.replaceChildren(...allSlides);
  allSlides.forEach((slide) => applyImageRatio(slide.querySelector("img")));

  const dots = items.map((item, index) => {
    const dot = makeElement("button", "video-carousel-dot gallery-carousel-dot");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show ${name} ${index + 1}: ${item.name}`);
    dot.addEventListener("click", () => goTo(index));
    pagination.append(dot);
    return dot;
  });

  function updateActive(index, position = physicalIndex) {
    activeIndex = (index + items.length) % items.length;
    physicalIndex = position;
    count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    allSlides.forEach((slide, slidePosition) => {
      const current = slidePosition === physicalIndex;
      const visible = Math.abs(slidePosition - physicalIndex) <= 1;
      slide.classList.toggle("is-current", current);
      slide.classList.toggle("is-prev", slidePosition === physicalIndex - 1);
      slide.classList.toggle("is-next", slidePosition === physicalIndex + 1);
      slide.setAttribute("aria-hidden", String(!visible));
      slide.inert = !visible;
    });
    dots.forEach((dot, dotIndex) => {
      const current = dotIndex === activeIndex;
      dot.classList.toggle("is-current", current);
      if (current) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function centeredScrollLeft(slide) {
    return slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
  }

  function closestPosition() {
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let smallestDistance = Infinity;
    allSlides.forEach((slide, position) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - trackCenter);
      if (distance < smallestDistance) {
        closest = position;
        smallestDistance = distance;
      }
    });
    return closest;
  }

  function settleScroll() {
    window.clearTimeout(scrollEndTimer);
    const position = closestPosition();
    if (position === 0) {
      const destination = allSlides.length - 2;
      track.scrollTo({ left: centeredScrollLeft(allSlides[destination]), behavior: "auto" });
      updateActive(items.length - 1, destination);
    } else if (position === allSlides.length - 1) {
      track.scrollTo({ left: centeredScrollLeft(allSlides[1]), behavior: "auto" });
      updateActive(0, 1);
    } else {
      updateActive(position - 1, position);
    }
  }

  function goTo(index) {
    const targetIndex = (index + items.length) % items.length;
    const targetPosition = index < 0 ? 0 : index >= items.length ? allSlides.length - 1 : targetIndex + 1;
    updateActive(targetIndex, targetPosition);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    track.scrollTo({ left: centeredScrollLeft(allSlides[targetPosition]), behavior });
    window.clearTimeout(scrollEndTimer);
    scrollEndTimer = window.setTimeout(settleScroll, behavior === "smooth" ? 1000 : 80);
  }

  track.addEventListener("click", (event) => {
    const slide = event.target.closest(".gallery-item");
    if (!slide || !track.contains(slide)) return;
    const index = Number(slide.dataset.galleryIndex);
    if (!slide.classList.contains("is-current")) {
      const position = allSlides.indexOf(slide);
      if (position === 0) goTo(-1);
      else if (position === allSlides.length - 1) goTo(items.length);
      else goTo(index);
      return;
    }
    openImage(items[index]);
  });
  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
  });
  track.addEventListener("scroll", () => {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      const position = closestPosition();
      const index = (position - 1 + items.length) % items.length;
      if (position !== physicalIndex || index !== activeIndex) updateActive(index, position);
      scrollFrame = 0;
    });
    window.clearTimeout(scrollEndTimer);
    scrollEndTimer = window.setTimeout(settleScroll, 160);
  }, { passive: true });
  track.addEventListener("scrollend", settleScroll);
  previous.addEventListener("click", () => goTo(activeIndex - 1));
  next.addEventListener("click", () => goTo(activeIndex + 1));
  window.addEventListener("resize", () => {
    track.scrollTo({ left: centeredScrollLeft(allSlides[physicalIndex]), behavior: "auto" });
  }, { passive: true });

  track.scrollLeft = centeredScrollLeft(allSlides[1]);
  updateActive(0, 1);
}

function renderContact() {
  const details = document.querySelector("#contact-details");
  const items = [
    { label: "WHATSAPP", href: SITE_CONFIG.whatsapp, icon: "icon-whatsapp" },
    { label: "EMAIL", href: `mailto:${SITE_CONFIG.email}`, icon: "icon-mail" },
    { label: "INSTAGRAM", href: SITE_CONFIG.instagram, icon: "icon-instagram" },
    { label: "LINKEDIN", href: SITE_CONFIG.linkedin, icon: "icon-linkedin" },
  ];
  const fragment = document.createDocumentFragment();

  items.forEach(({ label, href, icon }) => {
    const link = makeElement("a", "contact-icon-link");
    link.href = href;
    link.setAttribute("aria-label", label);
    link.title = label;
    if (/^https?:\/\//i.test(href)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    const image = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    image.setAttribute("viewBox", "0 0 24 24");
    image.setAttribute("aria-hidden", "true");
    image.classList.add("contact-icon");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `#${icon}`);
    image.append(use);
    link.append(image, makeElement("span", "contact-icon-label", label));
    fragment.append(link);
  });
  details.replaceChildren(fragment);

  document.querySelectorAll('a[href^="assets/resume/"]').forEach((link) => {
    link.href = SITE_CONFIG.resumePath;
  });
}

function openImage(item) {
  const dialog = document.querySelector("#image-viewer");
  const image = document.querySelector("#viewer-image");
  image.dataset.localFallbackTried = "false";
  image.classList.remove("is-unavailable");
  image.onerror = () => {
    if (item.localSrc && image.dataset.localFallbackTried !== "true") {
      image.dataset.localFallbackTried = "true";
      image.src = item.localSrc;
      return;
    }
    image.classList.add("is-unavailable");
  };
  image.src = thumbnailSource(item, 1600);
  image.alt = item.name;
  document.querySelector("#image-caption").textContent = item.name;
  document.querySelector("#viewer-image-caption").textContent = item.name;
  showDialog(dialog);
}

function openVideo(project) {
  const dialog = document.querySelector("#video-viewer");
  const frame = document.querySelector("#video-frame");
  const fallbackPoster = document.querySelector("#video-fallback-poster");
  const driveLink = document.querySelector("#video-open-drive");
  document.querySelector("#video-caption").textContent = project.title;
  frame.title = project.title;
  fallbackPoster.src = project.poster;
  fallbackPoster.alt = `${project.title} local poster preview`;
  driveLink.href = `https://drive.google.com/file/d/${encodeURIComponent(project.driveId)}/view`;
  driveLink.setAttribute("aria-label", `Open ${project.title} on Google Drive`);
  frame.src = DRIVE.preview(project.driveId);
  showDialog(dialog);
}

function showDialog(dialog) {
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
  dialog.querySelector(".viewer-close").focus();
}

function closeDialog(dialog) {
  if (!dialog.open) return;
  dialog.close();
}

function setupDialogs() {
  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => closeDialog(document.getElementById(button.dataset.close)));
  });

  document.querySelectorAll(".viewer-dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      if (dialog.id === "video-viewer") {
        document.querySelector("#video-frame").src = "";
        document.querySelector("#video-fallback-poster").removeAttribute("src");
      }
      if (dialog.id === "image-viewer") {
        const image = document.querySelector("#viewer-image");
        image.removeAttribute("src");
        image.onerror = null;
      }
    });
  });
}

function setupNavigation() {
  const toggle = document.querySelector("#nav-toggle");
  const nav = document.querySelector("#primary-nav");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
    toggle.querySelector(".nav-toggle-mark").textContent = expanded ? "+" : "×";
  });

  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".nav-toggle-mark").textContent = "+";
  });
}

function setupRevealMotion() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) return;

  document.body.classList.add("js-motion");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
}

renderVideos();
setupVideoCarousel();
renderResults();
renderGallery(localVerticalThumbnails, "#vertical-gallery", "vertical-item", "Selected vertical thumbnail design");
renderGallery(localHorizontalThumbnails, "#horizontal-gallery", "horizontal-item", "Selected horizontal design");
renderGallery(localPosterDesigns, "#poster-gallery", "poster-item", "Selected poster design");
setupGalleryCarousel("#vertical-gallery", localVerticalThumbnails, "vertical thumbnail");
setupGalleryCarousel("#horizontal-gallery", localHorizontalThumbnails, "horizontal thumbnail");
setupGalleryCarousel("#poster-gallery", localPosterDesigns, "poster design");
renderContact();
setupDialogs();
setupNavigation();
setupRevealMotion();
