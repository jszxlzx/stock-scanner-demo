const container = document.getElementById("scanner-container");
const updateTime = document.getElementById("update-time");

// 按策略分類
const groupByStrategy = (data) => {
  const groups = {};
  data.forEach((stock) => {
    stock.strategies.forEach((s) => {
      if (!groups[s.tag]) groups[s.tag] = [];
      groups[s.tag].push({
        symbol: stock.symbol,
        price: stock.price,
        changePct: stock.changePct,
        reason: s.reason,
        tag: s.tag
      });
    });
  });
  return groups;
};

const renderSection = (tag, items) => {
  const section = document.createElement("div");
  section.className = "section";
  section.innerHTML = `<h2>${tag}</h2>`;

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="tag ${item.tag}">${item.tag}</div>
      <span class="ticker">${item.symbol}</span>
      <div class="priceRow">$${item.price} (${item.changePct})</div>
      <div class="reason">${item.reason}</div>
    `;
    section.appendChild(card);
  });

  container.appendChild(section);
};

const renderAll = () => {
  const groups = groupByStrategy(SCAN_RESULTS);
  Object.keys(groups).forEach((tag) => renderSection(tag, groups[tag]));

  const now = new Date();
  updateTime.textContent = `最後更新：${now.toLocaleString("zh-HK")}`;
};

renderAll();
