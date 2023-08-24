import usePlatform from "./usePlatform";

const useFindPlatform = (id?: number) => {
  const { data } = usePlatform();
  return data?.results.find((p) => p.id === id);
};

export default useFindPlatform;
