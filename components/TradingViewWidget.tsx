'use client'
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import {MARKET_OVERVIEW_WIDGET_CONFIG} from "@/lib/constants";
import useTradingVIewWidget from "@/hooks/useTradingVIewWidget";

interface TradingViewWidgetProps {
    title?: string;
    scriptUrl: string;
    config:Record<string, unknown>;
    heigh: number;
    className?: string;


}

const TradingViewWidget = ({title, scriptUrl, height, config, className}: TradingViewWidgetsProps ) => {
    const containerRef = useTradingVIewWidget(title, scriptUrl, height, config, className);

    return (
        <div className="tradingview-widget-container" ref={containerRef} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener nofollow" target="_blank"><span className="blue-text">AAPL stock chart</span></a><span className="trademark"> by TradingView</span></div>
        </div>
    );
}

export default memo(TradingViewWidget);
