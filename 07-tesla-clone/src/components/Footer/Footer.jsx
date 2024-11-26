import FooterItems from "./FooterItems";

export function Footer() {
    return (
        <footer>
            <div className="bg-white flex flex-col items-center w-full pt-20 p-6">
                <FooterItems />
            </div>
        </footer>
    );
}

export default Footer;
