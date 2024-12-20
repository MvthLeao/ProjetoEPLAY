import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../Pages/Home'

import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundoHogwarts.png'

import { Action, Item, Items, Modal, ModalContent } from './styles'

import Zoom from '../../assets/images/mais-zoom.png'
import Play from '../../assets/images/botao-play.png'
import Fechar from '../../assets/images/close.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/ApXoWvfEYVU'
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isvisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isvisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return Zoom
    return Play
  }

  const closeModal = () => {
    setModal({
      isvisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title={'Galeria'} background={'black'}>
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isvisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt="Maximize a mídia" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isvisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={Fechar}
              alt="ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
