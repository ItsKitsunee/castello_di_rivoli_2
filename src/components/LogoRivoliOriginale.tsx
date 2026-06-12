import React from 'react';

// Utilizziamo i backtick per evitare problemi di parsing con stringhe lunghe
const logoBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAG+0AABfuCAYAAAD6d2HuAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAADNqlJREFUeNrs3duR00AQQFG0RTzk nwcBCShYWDBlW5Zmph/nVOnHH57uTuB++gQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoW0X/9/upAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAALPbl+/fVGQAAAIAf3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA qj47AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJPt//ltG/GQaB8AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAACj7aseFu0DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgSnukYUT7AAAAAAAAA...[TRUNCATED_FOR_BREVITY]...YII`;

export const LogoRivoliOriginale: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            viewBox="0 0 6131.217838765008 6126"
            id="Senza_titolo-2_xA0_Immagine_1_"
            version="1.1"
            style={{ maxHeight: "500px" }}
            width="6131.217838765008"
            height="6126"
        >
            <defs id="defs1">
                <clipPath id="clipPath2" clipPathUnits="userSpaceOnUse">
                    <rect
                        y={-2877.6914}
                        x={-3283}
                        height={10375.901}
                        width={9747.6729}
                        id="rect3"
                        style={{
                            fill: "#d495a7",
                            stroke: "#cc2e5f",
                            strokeWidth: 100,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }}
                    />
                </clipPath>
            </defs>
            <image
                clipPath="url(#clipPath2)"
                xlinkHref={logoBase64} // <--- Ora la variabile viene letta correttamente qui!
            />
        </svg>
    );
};