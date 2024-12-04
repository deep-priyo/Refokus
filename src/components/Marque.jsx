

const Marquee= ({ imagesurls,direction })=> {
    return (
        <div className="flex w-full py-8 gap-20 overflow-hidden">

                {imagesurls.map((url, index) => (
                    <img key={index} src={url} className="w-[6vw] flex-shrink-0" />
                ))}

                {imagesurls.map((url, index) => (
                    <img key={index} src={url} className="w-[6vw] flex-shrink-0" />
                ))}

        </div>
    );
}

export default Marquee;