import c from './SearchResults.module.scss';
import CatSmallCard from "@/components/cat-small-card/CatSmallCard";
import { CatType } from "@/types/CatType";
import { CatsSearchCompProps } from '@/types/CatsSearchCompProps';
import { getCatsByName } from '@/data-fetching/functions';

export default async function SearchResults({ catName }: CatsSearchCompProps) {
  const cats = await getCatsByName<CatType[]>(catName)

  return (
    <>
      {catName !== null && cats?.length > 0 && (
        <>
          <div className={c.container}>
            <p>Searched: <span className={c.searchedValue}>{catName || ""}</span></p>
            <div className={c.cardsContainer}>
              {cats.map((cat: CatType) => (
                <CatSmallCard key={cat._id} {...cat} />
              ))}
            </div>
          </div>
        </>
      )}
      {catName !== null && cats?.length === 0 && <div className="main-container-message"><h2>No cats found</h2></div>}
    </>
  )
}
