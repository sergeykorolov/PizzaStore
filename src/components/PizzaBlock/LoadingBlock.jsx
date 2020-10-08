import ContentLoader from "react-content-loader";
import React from "react";

const LoadingBlock = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={500}
            viewBox="0 0 280 500"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="131" cy="122" r="106" />
            <rect x="1" y="249" rx="4" ry="4" width="280" height="25" />
            <rect x="147" y="500" rx="0" ry="0" width="14" height="15" />
            <rect x="1" y="290" rx="5" ry="5" width="280" height="84" />
            <rect x="1" y="387" rx="4" ry="4" width="69" height="30" />
            <rect x="127" y="388" rx="4" ry="4" width="150" height="30" />
        </ContentLoader>
    )
}

export default LoadingBlock;