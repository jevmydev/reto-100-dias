import HomeModels from "./HomeModels";
import HomeTeslaExperience from "./HomeTeslaExperience";
import HomeTeslaJoinUs from "./HomeTeslaJoinUs";

import { homeItems } from "../../mocks/homeItems";
import { homeItemsExperience } from "../../mocks/homeItemsExperience";

export function Home() {
    return (
        <>
            {homeItems.map((home) => {
                const { id, title, imageSrc, isDisabledOrder } = home;
                return <HomeModels key={id} title={title} imageSrc={imageSrc} isDisabledOrder={isDisabledOrder} />;
            })}
            {homeItemsExperience.map((experience) => {
                const { id } = experience;
                return <HomeTeslaExperience key={id} experience={experience} />;
            })}
            <HomeTeslaJoinUs />
        </>
    );
}

export default Home;
