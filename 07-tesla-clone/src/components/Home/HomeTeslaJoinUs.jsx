import { Anchor } from "../../elements/Anchor";

export function HomeTeslaJoinUs() {
    return (
        <section className="snap-center">
            <div className="h-screen relative top-0 overflow-hidden">
                <div className="w-full h-full absolute -z-10">
                    <video className="w-full h-full object-cover" src="/assets/home-page/tesla-joinus.webm" autoPlay loop muted></video>
                </div>
                <div className="w-full h-full mx-auto p-4 sm:px-10 pt-20 flex flex-col items-start justify-end sm:justify-center">
                    <div className="w-full flex flex-col gap-6">
                        <h2 className="text-4xl">Somos Tesla</h2>
                        <Anchor title="Únetenos" href="https://www.tesla.com/es_cl/careers/search/" isActiveSecondary>
                            Únetenos
                        </Anchor>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeTeslaJoinUs;
