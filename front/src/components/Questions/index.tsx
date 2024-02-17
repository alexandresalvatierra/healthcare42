const Questions = () => {
  const handleClickQ4Query = async () => {
    const response = await fetch(
      'http://localhost:8000/api/nurses/remaining-spots'
    )
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data. Status: ${response.status} (${response.statusText})`
      )
    }
    const data = await response.json()

    console.log(data)
  }

  const handleClickQ5Query = async () => {
    const response = await fetch(
      'http://localhost:8000/api/nurses/jobs-availability'
    )
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data. Status: ${response.status} (${response.statusText})`
      )
    }
    const data = await response.json()

    console.log(data)
  }

  const handleClickQ6Query = async () => {
    const response = await fetch(
      'http://localhost:8000/api/nurses/jobs-recommendation'
    )
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data. Status: ${response.status} (${response.statusText})`
      )
    }
    const data = await response.json()

    console.log(data)
  }

  return (
    <>
      <section className='max-w-8xl max-w-8xl m-auto mt-8 grid grid-cols-1 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <a
          className='cursor-pointer items-center rounded-lg bg-emerald-600 px-4 py-2 text-center text-lg font-medium text-white duration-700 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
          onClick={handleClickQ4Query}
        >
          Execute Q4 Query
        </a>
        <a
          className='cursor-pointer items-center rounded-lg bg-emerald-600 px-4 py-2 text-center text-lg font-medium text-white duration-700 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
          onClick={handleClickQ5Query}
        >
          Execute Q5 Query
        </a>
        <a
          className='cursor-pointer items-center rounded-lg bg-emerald-600 px-4 py-2 text-center text-lg font-medium text-white duration-700 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
          onClick={handleClickQ6Query}
        >
          Execute Q6 Query
        </a>
      </section>
    </>
  )
}

export default Questions
