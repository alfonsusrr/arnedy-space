interface PostCardProps {
    thumbnail: string,
    title: string,
    link: string
}

export default function PostCard(props : PostCardProps) {
    const {thumbnail, title, link} = props
    return (
        <div className=" flex-grow px-2 mt-4 sm:mt-2 md:w-1/2 drop-shadow-lg">
            <div className={"relative  border-dark-grad-1 border rounded-xl  select-none cursor-pointer h-[340px] hover:bg-dark-3 hover:bg-opacity-10 transition-all"}>
                <div className="bg-top h-48 bg-cover bg-no-repeat rounded-t-xl" style={{backgroundImage: `url(${thumbnail})`}}/>
                <div className="px-3 py-4">
                    <div className="text-dark-txt-2 text-md font-medium">{title}</div>
                </div>
                <div className="px-3 view-more-btn">
                    <div>VIEW MORE</div>
                    <i className="bi bi-arrow-up-right"></i>
                </div>
            </div>
        </div>
    )
}