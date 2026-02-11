export function CardArticleAndNew({ article }) {
  return (
    <div
      className="flex flex-col gap-10 p-4 max-w-[570px] lg:max-h-[634px]  rounded-lg border-2
        transition-all duration-300 hover:shadow-[10px_10px_0_0_black] bg-white"
    >
      <div className="max-w-[538px] max-h-80">
        <img
          src={article.coverImage}
          alt={article.alt}
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <p className="text-caption-bold">{article.category}</p>
          <h2 className="text-h2-style-2 hover:text-vermillion">
            {article.title}
          </h2>
        </div>
        <p className="text-caption-medium">{article.summary}</p>
        <div className="flex flex-col gap-2 pt-5 md:pt-0 md:flex-row md:justify-between items-end w-full min-h-[54px] border-t-[0.5px] border-davys-grey">
          <div className="flex flex- gap-1.5 text-small-medium">
            {article.tags.map((tag, index) => (
              <span
                key={tag + index}
                className="rounded-sm border border-davys-grey py-1.5 px-3"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="text-small-bold">{article.date}</time>
        </div>
      </div>
    </div>
  )
}
