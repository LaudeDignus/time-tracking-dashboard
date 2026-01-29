const containerCardTracking = document.querySelector(".trackings");
const ulBtns = document.querySelector(".periods");

let cachedData = null;

async function getData() {
  try {
    if (cachedData) return cachedData;

    const res = await fetch("./data.json");
    if (!res.ok) {
      throw new Error(`HTTP Error ${res.status}`);
    }
    cachedData = await res.json();
    return cachedData;
  } catch (err) {
    console.log("'Error loading data:'", err);
  }
}

const activePressedBtn = (activeBtn) => {
  ulBtns.querySelectorAll(".btn-tracking").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn === activeBtn);
  });
};

ulBtns.addEventListener("click", async (e) => {
  const btn = e.target.closest(".btn-tracking");
  const data = await getData();
  if (!btn) return;
  createCard(data, btn.dataset.period);
  activePressedBtn(btn);
});

const createCard = (allData, period) => {
  let cardSection = allData
    .map(
      (
        data,
      ) => `<section class="trackings__card card card--${data.title.toLowerCase().replace(" ", "-")}">
      <div class="card__bg"></div>
      <div class="card__content content">
    <header class="content__header header">
    <h2 class="header__title">${data.title}</h2>
    <img src="./images/icon-ellipsis.svg" alt="" class="header__img">
    </header>
    <section class="content__period period">
    <p class="period__current">${data.timeframes[period].current}hrs</p>
    <p class="period__previous">${changeFormatPeriod(period)} - ${data.timeframes[period].previous}hrs</p>
    </div>
    </section>
    </section>`,
    )
    .join("");
  containerCardTracking.innerHTML = cardSection;
};

const changeFormatPeriod = (period) => {
  const objPeriod = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };
  return objPeriod[period];
};

(async () => {
  const data = await getData();
  createCard(data, "weekly");
})();
