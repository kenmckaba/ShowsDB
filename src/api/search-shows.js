async function searchShows(term) {
  const url = `https://api.tvmaze.com/search/shows?q=${term}`
  const apiResult = await fetch(url)
  const result = await apiResult.json()
  return result
}

async function getEpisodes(showId) {
  const url = `https://api.tvmaze.com/shows/${showId}/episodes`
  const apiResult = await fetch(url)
  return await apiResult.json()
}

export { searchShows, getEpisodes }
