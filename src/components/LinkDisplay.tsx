import Link from "next/link";

export interface ILink {
    type: string,
    title: string,
    url: string
}

export default function LinkDisplay(props : ILink) {
    const {type, title, url} = props
    let icon;

    if (type == "video") {
        icon = "bi-fast-forward-btn"
    } else if (type == "link") {
        icon = "bi-link-45deg"
    } else if (type == "document") {
        icon = "bi-file-earmark-text"
    } else if (type == "repo") {
        icon = "bi-github"
    }
    return (
        <Link className="flex text-dark-txt-1 text-lg cursor-pointer mr-3 hover:text-dark-txt-2" href={url}>
            <div><i className={"bi " + icon}></i></div>
            <div className="px-1">{title}</div>
        </Link>
    )
}