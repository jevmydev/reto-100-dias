import { Anchor } from "../../elements/Anchor";

export function HomeTeslaExperience({ experience }) {
    const { title, description, isVideo, anchor } = experience;
    const { title: anchorTitle, href: anchorHref } = anchor;

    return (
        <section className="snap-center">
            <div className="h-screen relative top-0 overflow-hidden">
                <div className="w-full h-full absolute -z-10">
                    {isVideo ? (
                        <video className="w-full h-full object-cover" src={experience.videoSrc} autoPlay loop muted></video>
                    ) : (
                        <img className="w-full h-full object-cover" src={experience.imageSrc} alt={title} />
                    )}
                </div>
                <div className="w-full h-full mx-auto p-4 sm:px-10 pt-20 flex flex-col justify-between items-center text-center">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-4xl sm:text-6xl tracking-tighter">{title}</h2>
                        <span>{description}</span>
                    </div>
                    <div className="flex items-center justify-center w-full gap-2">
                        <Anchor title={anchorTitle} href={anchorHref} isActivePrimary>
                            {anchorTitle}
                        </Anchor>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeTeslaExperience;
