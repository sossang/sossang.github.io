const products = {
  "hydra-calm-serum": {
    category: "SKINCARE",
    name: "Hydra Calm Serum",
    summary: "가볍게 스며드는 진정 수분 세럼",
    price: "KRW 38,000",
    story: "수분감은 충분히 채우고 마무리는 산뜻하게 남기는 데일리 세럼입니다. 예민해진 피부에도 부담 없이 사용할 수 있는 차분한 무드의 대표 상품으로 구성했습니다.",
    points: ["수분 레이어링", "진정 케어", "끈적임 없는 마무리"]
  },
  "velvet-barrier-cream": {
    category: "CREAM",
    name: "Velvet Barrier Cream",
    summary: "피부 장벽을 감싸는 벨벳 크림",
    price: "KRW 42,000",
    story: "건조한 피부 위에 부드러운 보호막을 남기는 크림입니다. 브랜드의 깊은 브라운 톤처럼 안정적이고 고급스러운 사용감을 상상해볼 수 있습니다.",
    points: ["장벽 보습", "벨벳 텍스처", "나이트 케어"]
  },
  "soft-reset-cleanser": {
    category: "CLEANSER",
    name: "Soft Reset Cleanser",
    summary: "당김 없이 마무리되는 저자극 클렌저",
    price: "KRW 29,000",
    story: "하루의 노폐물을 부드럽게 씻어내면서 피부의 편안함을 지키는 클렌저입니다. 아침과 저녁 모두 쓰기 좋은 기본 라인 상품입니다.",
    points: ["저자극 세안", "촉촉한 마무리", "데일리 사용"]
  },
  "evening-recovery-mask": {
    category: "MASK",
    name: "Evening Recovery Mask",
    summary: "하루 끝 피부 결을 정돈하는 슬리핑 팩",
    price: "KRW 35,000",
    story: "밤 사이 피부에 편안한 회복감을 전하는 마스크 제품입니다. 상세 페이지에는 사용 순서, 권장 사용 횟수, 주요 성분 등을 추가하기 좋습니다.",
    points: ["수면 케어", "피부 결 정돈", "주 2-3회 사용"]
  },
  "clear-tone-essence": {
    category: "ESSENCE",
    name: "Clear Tone Essence",
    summary: "맑고 균일한 피부 톤을 위한 에센스",
    price: "KRW 46,000",
    story: "칙칙해 보이는 피부에 투명한 인상을 더하는 에센스입니다. 상품 설명에는 광채, 톤, 피부결 키워드를 중심으로 확장할 수 있습니다.",
    points: ["톤 케어", "맑은 광채", "피부결 정돈"]
  },
  "dewy-sun-fluid": {
    category: "SUNCARE",
    name: "Dewy Sun Fluid",
    summary: "촉촉하게 마무리되는 데일리 선 플루이드",
    price: "KRW 31,000",
    story: "가볍게 펴 발리고 촉촉한 윤기를 남기는 선케어 제품입니다. 메이크업 전에도 부담 없는 데일리 상품으로 배치했습니다.",
    points: ["데일리 선케어", "수분광 마무리", "가벼운 텍스처"]
  },
  "botanical-toner-pad": {
    category: "TONER PAD",
    name: "Botanical Toner Pad",
    summary: "피부 결을 부드럽게 닦아내는 토너 패드",
    price: "KRW 27,000",
    story: "세안 후 첫 단계에서 피부 결을 정돈하는 토너 패드입니다. 사용 전후 느낌을 보여주는 상세 콘텐츠와 잘 어울립니다.",
    points: ["결 정돈", "간편 케어", "보태니컬 무드"]
  },
  "night-repair-ampoule": {
    category: "AMPOULE",
    name: "Night Repair Ampoule",
    summary: "밤 사이 피부 컨디션을 채우는 앰플",
    price: "KRW 49,000",
    story: "집중 케어가 필요한 날 사용하는 리페어 앰플입니다. 고급 라인이나 프리미엄 기획전 대표 상품으로 활용하기 좋습니다.",
    points: ["집중 보습", "리페어 케어", "프리미엄 라인"]
  },
  "comfort-lip-balm": {
    category: "LIP CARE",
    name: "Comfort Lip Balm",
    summary: "은은한 윤기를 더하는 보습 립 밤",
    price: "KRW 18,000",
    story: "작지만 브랜드 감도를 보여주기 좋은 립 케어 상품입니다. 선물 세트, 미니 키트, 추가 구매 상품 영역에 배치하기 좋습니다.",
    points: ["입술 보습", "은은한 윤기", "휴대용 케어"]
  }
};

const slider = document.querySelector("[data-product-slider]");
const prevButton = document.querySelector("[data-slider-prev]");
const nextButton = document.querySelector("[data-slider-next]");

if (slider && prevButton && nextButton) {
  const slide = (direction) => {
    const card = slider.querySelector(".product-card");
    const distance = card ? card.getBoundingClientRect().width + 18 : 320;
    slider.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  prevButton.addEventListener("click", () => slide(-1));
  nextButton.addEventListener("click", () => slide(1));
}

const detailRoot = document.querySelector("[data-product-detail]");

if (detailRoot) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "hydra-calm-serum";
  const product = products[id] || products["hydra-calm-serum"];
  const imagePath = "assets/young-costec-logo.webp";

  document.title = `${product.name} | YOUNG COSTEC COSMETICS`;
  document.querySelector("[data-detail-category]").textContent = product.category;
  document.querySelector("[data-detail-name]").textContent = product.name;
  document.querySelector("[data-detail-summary]").textContent = product.summary;
  document.querySelector("[data-detail-price]").textContent = product.price;
  document.querySelector("[data-detail-story]").textContent = product.story;

  const detailImage = document.querySelector("[data-detail-image]");
  detailImage.src = imagePath;
  detailImage.alt = `${product.name} 더미 상품 이미지`;

  const points = document.querySelector("[data-detail-points]");
  points.innerHTML = product.points
    .map((point, index) => `<div class="detail-point"><strong>POINT ${String(index + 1).padStart(2, "0")}</strong>${point}</div>`)
    .join("");
}
