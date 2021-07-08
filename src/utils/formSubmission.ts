export const handleSubmit = async (
  values: Record<string, string | number>
): Promise<Record<string, string | number>> => {
  const reqData: Record<string, string | number> = {}

  reqData.name = values.name

  if ((values.preparation_time as string).length === 5) {
    reqData.preparation_time = values.preparation_time + ':00'
  } else {
    reqData.preparation_time = values.preparation_time
  }

  reqData.type = values.type

  // Extract needed values, we could also delete unnecessary data on type field change
  if (values.type === 'pizza') {
    reqData.no_of_slices = Number(values.no_of_slices)
    reqData.diameter = Number(values.diameter)
  }
  if (values.type === 'soup') {
    reqData.spiciness_scale = Number(values.spiciness_scale)
  }
  if (values.type === 'sandwich') {
    reqData.slices_of_bread = Number(values.slices_of_bread)
  }

  const res = await fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reqData),
  })
  const responseAsJSON = await res.json()
  console.log(responseAsJSON)
  if (res.status >= 400 && res.status < 600) {
    throw responseAsJSON
  } else {
    return responseAsJSON
  }
}
