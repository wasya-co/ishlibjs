
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Metaline } from "$components/Metaline"
import {
  logg,
} from "$shared"

import styles from "./Galleries.module.scss"

const W0 = styled.div`
  // border: 1px solid blue;
  height: auto;
`;

/**
 * GalleriesShow
 * version: 0.0.0
 * _vp_ 2023-01-12
 *
 * Excludes itemToUnlock - this version is public-only
 *
 * @TODO: inject useApi EITHER thru props OR thru ApiProvider _vp_ 2023-01-12
 * @TODO: there is no back button, either! maybe re-add it
 *
**/
const GalleriesShow = (props) => {
  logg(props, 'GalleriesShow')
  const {
    match,
    useApi,
  } = props

  const [gallery, setGallery] = useState({})

  const mountedRef = useRef('init')

  const api = useApi() // @TODO: make injectable
  logg(api, 'api')

  useEffect(() => {
    api.getGallery(match.params.slug).then(_gallery => {
      if (!mountedRef.current) { return }
      setGallery(_gallery)
    })
    return () => {
      mountedRef.current = null
    }
  }, [gallery.id] )

  return <W0 className={styles.GalleriesShow} >

    <div className={styles.narrow} >
      <h1 className={styles.heading} >
        <span className={styles.title} >{gallery.name}</span>
      </h1>
      <Metaline {...gallery} />

      <div className={styles.thumbs} >
        { gallery.photos && gallery.photos.map((ph, i) =>
          <div className={styles.card} key={i}>
            <div>
              <IonImg src={ph.thumb_url}></IonImg>
            </div>
          </div>
        ) }
      </div>

      <div dangerouslySetInnerHTML={{ __html: gallery.description }}></div>

    </div>
    <div className={styles.full_img_section} >

      { gallery.photos && gallery.photos.map((ph, i) =>
        <div className={styles.item} key={i}>
          <img src={ph.large_url} />
        </div>
      ) }

    </div>

    <hr />
    <footer>
      <div className='maxWidth'>
        ishlibjs v0.2.7 (branch 0.6.0) :: GalleriesShow v0.0.0
      </div>
    </footer>
  </W0>
}
GalleriesShow.propsTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
  useApi: PropTypes.function,
}

export default GalleriesShow
