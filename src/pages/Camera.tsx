import  { useEffect, useRef, useState } from "react";

export default function CameraPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let stream: MediaStream | null = null;

        async function startCamera() {
            try {
                // Chiediamo il permesso per il video.
                // 'environment' dice al telefono di preferire la fotocamera posteriore.
                stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "environment",
                        width: { ideal: 1920 },
                        height: { ideal: 1080 }
                    },
                    audio: false, // Non ci serve l'audio
                });

                // Colleghiamo lo stream video al tag <video>
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err: any) {
                console.error("Errore nell'accesso alla fotocamera:", err);
                setError(
                    "Impossibile accedere alla fotocamera. Assicurati di aver dato i permessi."
                );
            }
        }

        startCamera();

        // Quando l'utente esce dalla pagina, spegniamo la fotocamera
        // per non consumare batteria o tenere il led acceso
        return () => {
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#000000",
                zIndex: 9999, // Sopra a tutto il resto
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {error ? (
                <div style={{ color: "#ffffff", padding: "2rem", textAlign: "center" }}>
                    <p>{error}</p>
                </div>
            ) : (
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline // Obbligatorio per farlo andare a tutto schermo su iOS/Safari senza aprire il player nativo
                    muted
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Riempie lo schermo tagliando i bordi in eccesso (stile Instagram/TikTok)
                    }}
                />
            )}
        </div>
    );
}