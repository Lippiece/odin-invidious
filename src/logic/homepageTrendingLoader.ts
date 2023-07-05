import fetchInstances      from "./API/fetchInstances"
import fetchTrendingVideos from "./API/fetchTrendingVideos"

const homepageTrendingLoader = async () => {
  const eitherInstances = await fetchInstances()
  const result          = await eitherInstances
    .map( async instances => await fetchTrendingVideos( instances ) )
    .join()
  return result
}

export default homepageTrendingLoader
