
import React, { useState, } from 'react'

// import 'react-toastify/dist/ReactToastify.css' // @TODO: re-add somehow nicer.

import {
  logg,
  request,
  ThemeProvider,
} from "$shared"
import {
  GalleriesShow,
 } from './components/galleries'

const config = {
  apiOrigin: 'http://localhost:3001',
}

/**
 * _vp_ 2023-01-12
 *
 * @TODO: apiRequest should be separate from apiRouter
**/
const Gallery20230112Chitown = () => {

  const api = {
    getGallery: (slug) => {
      return request.get(`${config.apiOrigin}/api/galleries/view/${slug}`
      ).then((r) => r.data.gallery)
    },
  }

  return <>
    <ThemeProvider >
      <GalleriesShow match={{ params: { slug: 'chicago-scenery-i' } }} useApi={() => api} />
    </ThemeProvider>
  </>
}
export default Gallery20230112Chitown
