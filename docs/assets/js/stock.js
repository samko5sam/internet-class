// tse_0050_price

const green = "#e05e5e";
const red = "#2c812d";

const proxy_prefix = "https://corsproxy.io/?";
// const proxy_prefix = "https://cors-anywhere.herokuapp.com/";

document.addEventListener("DOMContentLoaded", async () => {
  if (false) return;
  let upAndDownIndicator = ""

  const upAndDownHandler = (df, el, el2) => {
    if (df > 0){
      el.style.color = red;
      el2.style.color = red;
      upAndDownIndicator = "🔺"
    } else {
      el.style.color = green;
      el2.style.color = red;
      upAndDownIndicator = "🔻"
    }
  }

  // 0050
  let response = await fetch(`${proxy_prefix}https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_0050.tw&json=1&delay=0&lang=zh_tw`);
  let data = await response.json();
  let price_df = (data.msgArray[0].pz - data.msgArray[0].y).toFixed(2);
  upAndDownHandler(price_df, document.getElementById("tse_0050_price"), document.getElementById("tse_0050_price_df"));
  let percentage = (price_df / data.msgArray[0].y * 100).toFixed(2);
  document.getElementById("tse_0050_price").innerText = parseFloat(data.msgArray[0].pz).toFixed(2);
  document.getElementById("tse_0050_price_df").innerText = `${upAndDownIndicator}${price_df} (${percentage}%)`;

  // VOO
  response = await fetch(`${proxy_prefix}https://query1.finance.yahoo.com/v8/finance/chart/VOO?interval=1m&lang=en-US&region=US`);
  data = await response.json();
  console.log(data);
  price_df = (data.chart.result[0].meta.regularMarketPrice - data.chart.result[0].meta.chartPreviousClose).toFixed(2);
  upAndDownHandler(price_df, document.getElementById("voo_price"), document.getElementById("voo_price_df"));
  percentage = (price_df / data.chart.result[0].meta.chartPreviousClose * 100).toFixed(2);
  document.getElementById("voo_price").innerText = parseFloat(data.chart.result[0].meta.regularMarketPrice).toFixed(2);
  document.getElementById("voo_price_df").innerText = `${upAndDownIndicator}${price_df} (${percentage}%)`;

  // VXUS
  response = await fetch(`${proxy_prefix}https://query1.finance.yahoo.com/v8/finance/chart/VXUS?interval=1m&lang=en-US&region=US`);
  data = await response.json();
  console.log(data);
  price_df = (data.chart.result[0].meta.regularMarketPrice - data.chart.result[0].meta.chartPreviousClose).toFixed(2);
  upAndDownHandler(price_df, document.getElementById("vxus_price"), document.getElementById("vxus_price_df"));
  percentage = (price_df / data.chart.result[0].meta.chartPreviousClose * 100).toFixed(2);
  document.getElementById("vxus_price").innerText = parseFloat(data.chart.result[0].meta.regularMarketPrice).toFixed(2);
  document.getElementById("vxus_price_df").innerText = `${upAndDownIndicator}${price_df} (${percentage}%)`;
})