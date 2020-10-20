import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel from 'react-images';
import {} from 'react-photo-gallery';
import { Modal } from '@material-ui/core';

export default function GalleryComp(props) {
  const { photos } = props;
  const [CurrentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  //   const openLightbox = e => {
  //     setCurrentImage(e.target);
  //     console.log(e.target);
  //     setViewerIsOpen(true);
  //   };
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    console.log(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  console.log(photos);
  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      {viewerIsOpen ? (
        <Modal
          open={viewerIsOpen}
          onClose={() => setViewerIsOpen(false)}
          aria-labelledby="simple-modal-title"
        >
          <img src={photos[CurrentImage].src} alt="" />
          <Carousel
            currentIndex={CurrentImage}
            views={photos.map(i => ({
              ...i,
            }))}
          />
        </Modal>
      ) : null}
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
}
