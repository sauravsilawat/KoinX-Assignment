import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const containerRef = useRef(null); // Rename to avoid confusion with container.current

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "allow_symbol_change": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "container_id": "tradingview-widget-container",
        "width": "100%",
        "height": "100%",
        "support_host": "https://www.tradingview.com"
      }`;
    
    containerRef.current.appendChild(script);

    return () => {
      // Cleanup: Remove the script element from the container
      containerRef.current.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ height: "450px", width: "100%" }}>
      <div id="tradingview-widget-container" ref={containerRef} className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
