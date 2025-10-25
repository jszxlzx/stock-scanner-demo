// 假數據：Scanner 掃描結果
// 日後你可以改呢度成為真數據，或者由 API 回傳同一結構
const SCAN_RESULTS = [
  {
    symbol: "ONDS",
    price: 7.76,
    changePct: "+9.9%",
    strategies: [
      {
        tag: "放量突破",
        reason: "成交量係20日平均嘅2.4倍，突破下降壓力線，收市接近全日高位。"
      }
    ]
  },
  {
    symbol: "AMZN",
    price: 224.3,
    changePct: "+1.5%",
    strategies: [
      {
        tag: "支撐反彈",
        reason: "接近之前支持位（約211）後拉起，RSI由超賣回到40以上，MACD收窄。"
      }
    ]
  },
  {
    symbol: "SOFI",
    price: 8.12,
    changePct: "+4.2%",
    strategies: [
      {
        tag: "收斂待爆",
        reason: "最近3日波幅只係10日平均嘅一半以下，MACD轉強，價已企返上20日線。"
      }
    ]
  },
  {
    symbol: "XYZ",
    price: 32.5,
    changePct: "+3.1%",
    strategies: [
      {
        tag: "動能啟動",
        reason: "MACD剛金叉，股價企喺20日線及50日線之上，但仍低於52週高位超過10%。"
      }
    ]
  }
];
