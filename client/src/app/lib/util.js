const toCurrency = function (num) {
  return Number(num).toLocaleString("en-CA", { style: "currency", currency: "CAD" });
};

const utc2local = function (isoDate) {

    if (isoDate === "") {
        return "";
    }

    const date = new Date(isoDate);

    // Use German time format hh24:mm:ss
    return date.toLocaleTimeString("de-DE");
};

export default {
  toCurrency,
  utc2local
};
