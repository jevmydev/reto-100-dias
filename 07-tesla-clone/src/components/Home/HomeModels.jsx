import { Anchor } from "../../elements/Anchor";

export function HomeModels({ title, imageSrc, isDisabledOrder }) {
    const titleFormat = title.split(" ").join("").toLowerCase();

    return (
        <section>
            <div className="h-screen relative top-0 overflow-hidden">
                <picture className="w-full h-full absolute -z-10">
                    <img className="w-full h-full object-cover" src={imageSrc} alt={title} />
                </picture>
                <div className="w-full h-full mx-auto p-10 pt-20 flex flex-col justify-between items-center">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-6xl tracking-tighter">{title}</h2>
                        {!isDisabledOrder ? (
                            <Anchor
                                className="shadow-normal transition-shadow ease-in-out duration-200 hover:shadow-hover"
                                title="Agenda una prueba de manejo"
                                href={`https://www.tesla.com/es_cl/drive?selectedModel=${titleFormat}`}
                            >
                                Agenda una prueba de manejo
                            </Anchor>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex items-center justify-center w-full gap-2">
                        {!isDisabledOrder ? (
                            <>
                                <Anchor title={`Ordenar ${title}`} href={`https://www.tesla.com/es_cl/${titleFormat}/design#overview`} isActivePrimary>
                                    Ordenar
                                </Anchor>
                                <Anchor title={`Más información de ${title}`} href={`https://www.tesla.com/es_cl/${titleFormat}`} isActiveSecondary>
                                    Más información
                                </Anchor>
                            </>
                        ) : (
                            <Anchor title={`Más información de ${title}`} href={`https://www.tesla.com/es_cl/${titleFormat}`} isActivePrimary>
                                Más información
                            </Anchor>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeModels;
