type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};
//its optional as we dont know if we get the answer from wikipedia
type SearchResult = {
  query?: {
    pages?: Result[];
  };
};
