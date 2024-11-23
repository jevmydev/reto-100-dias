export function Anchor({ href, title, target, ...props }) {
    return <a className="flex items-center px-4 py-2" href={href} title={title} target={target} {...props} />;
}
