import React from "react";
import getWikiResults from "@/library/getWikiResults";
import { Metadata } from "next";
import Item from "./component/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({
  params: { searchTerm },
}: Props): Promise<Metadata> {
  //its deduplicates the request per documentation
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  // %20 is a space  from url and want to replace it for humans
  const displayResult = searchTerm.replaceAll("%20", " ");
  const results: Result[] | undefined = data?.query?.pages;

  //metadata for not found page
  if (!results) {
    return {
      title: `${displayResult} - Results not found`,
    };
  }

  return {
    title: displayResult,
    description: `Results for${displayResult} displayed`,
  };
}
const SearchDynamicPage = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  //it may happen we dont get anything from wikipedia
  const results: Result[] | undefined = data?.query?.pages;
  console.log("results:", results);
  //need to add to Object.values as it comes as a huge object
  // results: {
  //   '13772': {
  //     pageid: 13772,
  //     ns: 0,
  //     title: 'History of Poland',
  //     index: 8,
  //     thumbnail: {
  //       source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tobias_Mayer_Carte_de_la_Pologne_1757.jpg/50px-Tobias_Mayer_Carte_de_la_Pologne_1757.jpg',
  //       width: 50,
  //       height: 44
  //     },
  //     pageimage: 'Tobias_Mayer_Carte_de_la_Pologne_1757.jpg',
  //     extract: 'The history of Poland spans over a thousand years, from medieval tribes, Christianization and monarchy...'
  //   },
  //   '22936': {
  //   }
  // }
  // console.log("results values as array:", Object.values(results));
  const obj = Object.values(results!);
  console.log("obj", obj);
  // [
  // {
  //   pageid: 13772,
  //   ns: 0,
  //   title: 'History of Poland',
  //   index: 8,
  //   thumbnail: {
  //     source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tobias_Mayer_Carte_de_la_Pologne_1757.jpg/50px-Tobias_Mayer_Carte_de_la_Pologne_1757.jpg',
  //     width: 50,
  //     height: 44
  //   },
  //   pageimage: 'Tobias_Mayer_Carte_de_la_Pologne_1757.jpg',
  //   extract: 'The history of Poland spans over a thousand years, from medieval tribes, Christianization and monarchy...'
  // },
  // {
  return (
    <main className="bg-slate-100 text-green-900 font-bold mx-auto max-w-lg p-4 min-h-screen">
      {results ? (
        Object.values(results).map((result, index) => {
          return <Item key={result.pageid} result={result} />;
          // return <p key={index}>{result.title}</p>;
        })
      ) : (
        <h2>{`${searchTerm} Not Found`}</h2>
      )}
      <p>bla bla</p>
    </main>
  );
};

export default SearchDynamicPage;
