const getTenant = async (token: any) => {
  try {
    const response = await fetch(
      'https://mygetsapis.azure-api.net/store/v1/users',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getTenant
