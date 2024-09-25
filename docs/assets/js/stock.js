// tse_0050_price

const green = "#e05e5e";
const red = "#2c812d";

const proxy_prefix = "https://corsproxy.io/?";
// const proxy_prefix = "https://cors-anywhere.herokuapp.com/";

document.addEventListener("DOMContentLoaded", async () => {
  if (false) return;
  const response = await fetch(`${proxy_prefix}https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_0050.tw&json=1&delay=0&lang=zh_tw`);
  const data = await response.json();
  console.log(data);
  console.log(data.msgArray[0].o);
  const tse_0050_price_df = (data.msgArray[0].pz - data.msgArray[0].y).toFixed(2);
  if (tse_0050_price_df > 0){
    document.getElementById("tse_0050_price").style.color = red;
  } else {
    document.getElementById("tse_0050_price").style.color = green;
  }
  document.getElementById("tse_0050_price").innerText = parseFloat(data.msgArray[0].pz).toFixed(2);
  document.getElementById("tse_0050_price_df").innerText = tse_0050_price_df;
})