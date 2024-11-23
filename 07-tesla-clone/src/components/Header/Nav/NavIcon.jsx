import { Anchor } from "../../../elements/Anchor";
import { TeslaIcon } from "../../../elements/Icons";

export function NavIcon() {
    return (
        <div>
            <Anchor href="/" title="Icono de Tesla">
                <h1 aria-label="Icono de Tesla">
                    <TeslaIcon />
                </h1>
            </Anchor>
        </div>
    );
}

export default NavIcon;
