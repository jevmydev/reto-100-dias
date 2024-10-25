import { useState } from "react";

export function Embed() {
    const [copied, setCopied] = useState(false);
    const currentUrl = new URL(window.location.href);
    const searchParams = currentUrl.search;

    const iframeSrc = `${window.location.origin}/timer${searchParams}`;

    const handleCopy = () => {
        const iframeCode = `<iframe width="350" height="160" src="${iframeSrc}"></iframe>`;

        navigator.clipboard
            .writeText(iframeCode)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1300);
            })
            .catch((err) => {
                console.error("Error copying text: ", err);
            });
    };

    return (
        <>
            <section>
                <div className="max-w-screen-md mx-auto p-4 gap-4 flex flex-col justify-center items-center md:items-start">
                    <div className="flex flex-col gap-12 justify-center items-center text-center md:text-start md:items-start md:justify-start lg:flex-row">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h2 className="text-xl text-gray-100">!Comparte en tus redes sociales!</h2>
                                <h3 className="text-sm">Código</h3>
                            </div>
                            <code className="bg-gray-950 p-4 rounded cursor-pointer" onClick={handleCopy}>
                                &lt;iframe width=&quot;350&quot; height=&quot;160&quot; src=&quot;{iframeSrc}&quot;&gt;&lt;/iframe&gt;
                            </code>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className="text-sm">Preview</h3>
                            <iframe width="350" height="160" src={iframeSrc}></iframe>
                        </div>
                    </div>
                </div>
                {copied && (
                    <div className="fixed top-8 text-center w-full">
                        <span className="bg-gray-100 text-gray-950 p-4 rounded-full text-xl">¡Copiado!</span>
                    </div>
                )}
            </section>
        </>
    );
}

export default Embed;
