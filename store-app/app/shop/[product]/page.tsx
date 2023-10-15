import React from 'react'

interface ParamList {
  params: { product: string }
}

function Page({params} : ParamList)  {
  return (
    <h1>{params.product}</h1>
  )
}

export default Page;