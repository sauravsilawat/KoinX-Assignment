// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|1D"
            ]
          ],
          "chartOnly": true,
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": true,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(41, 98, 255, 1)",
          "topColor": "rgba(144, 191, 249, 0.11)",
          "bottomColor": "rgba(255, 255, 255, 1)"
        }`;
      container.current.appendChild(script);
      const handleResize = () => {
        const tradingViewWidget = container.current.querySelector(".tradingview-widget-container__widget");
        if (tradingViewWidget) {
          const width = container.current.offsetWidth;
          const height = container.current.offsetHeight;
          tradingViewWidget.setAttribute("data-width", width);
          tradingViewWidget.setAttribute("data-height", height);
        }
      };
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial adjustment
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    []
  );

  return (
    <div className="tradingview-widget-container mb-5 overflow-y-hidden" ref={container} style={{ width: "100%", height: "470px" }}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
