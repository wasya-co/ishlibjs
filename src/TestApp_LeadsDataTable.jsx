
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
**/
const TestApp_LeadsDataTable = () => {

  const api = {
    getGallery: (slug) => {
      return request.get(`${config.apiOrigin}/api/galleries/view/${slug}`
      ).then((r) => r.data.gallery)
    },
  }

  return <>
    <ThemeProvider >

      <Header>
        <Search />
        <a >Leads</a>
        <a >Leadsets</a>
      </Header>

      <DataTable />
      <hr />

      <Schedule />

    </ThemeProvider>
  </>
}
export default TestApp_LeadsDataTable
