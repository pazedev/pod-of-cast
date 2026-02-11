import { useState } from 'react'
import { SubscribeButton } from '../../UI/SubscribeButton'
import { CardArticleAndNew } from './CardArticleAndNew'
import { ARTICLE_AND_NEWS } from '../../../constants/article-and-news'

export function ArticleAndNewsSection() {
  const [browse, setBrowse] = useState(false)
  return (
    <div className="flex flex-col gap-25 items-center px-25 py-8 md:py-36 xl:px-35 m-auto mt-20">
      <img
        src="/src/assets/scribble-icon-black.svg"
        alt=""
        aria-hidden="true"
        className="absolute -translate-y-3/2"
      />
      <div className="flex flex-col gap-5 h-[127px]">
        <h1 className="text-h1 text-center whitespace-nowrap">
          Article and News
        </h1>
        <h3 className="text-h3-style-1 text-center text-davys-grey">
          News, tips, tricks and more
        </h3>
      </div>
      <section className="flex flex-wrap gap-5 relative z-10">
        {ARTICLE_AND_NEWS.map((article, index) => {
          if (browse || index < 2) {
            return <CardArticleAndNew key={index} article={article} />
          }
        })}
      </section>
      <SubscribeButton
        text="BROWSE ALL"
        variant="mobile"
        onClick={() => setBrowse(!browse)}
      />
      <img
        src="/src/assets/black-scribble-icon.svg"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute z-0 translate-x-35 w-[100px] sm:w-[120px] md:w-[200px] sm:translate-x-42 md:translate-x-38 lg:translate-x-95 xl:translate-x-145 translate-y-190"
      />
      <img
        src="/src/assets/black-star-5.svg"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute z-0 lg:-translate-x-150 lg:translate-y-38"
      />
    </div>
  )
}
