import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {

  let [screenWidth, SetScreenWidth] = useState("large")

  window.addEventListener('resize', Setme);
  window.addEventListener('onload', Setme);
  window.addEventListener('onchange', Setme);
  
  function Setme () {

   if ((window.innerWidth < 1024) && (window.innerWidth > 770)) {
     SetScreenWidth("medium")
    } else if (window.innerWidth < 769) {
      SetScreenWidth("small")
    } else {
      SetScreenWidth("large")
    }
  }


  if (screenWidth === "medium") {
    return (
      <ImageList
        sx={{ width: "100%", }}

        variant="quilted"
        cols={4}
        rowHeight={141}
      >

        {
          itemData2.map((item) => (
            <ImageListItem className='imageDiv' key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
              <span className='scale-in-ver-bottom'>{item.title}</span>
            </ImageListItem>
          ))
        }

      </ImageList>
    )
  } else if (screenWidth === "small") {
    return (
      <ImageList
        sx={{ width: "100%", }}

        variant="quilted"
        cols={4}
        rowHeight={141}
      >
        {
          itemData3.map((item) => (
            <ImageListItem className='imageDiv' key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
              <span className='scale-in-ver-bottom'>{item.title}</span>
            </ImageListItem>
          ))
        }

      </ImageList>
    )
  } else {
    return (
      <ImageList
        sx={{ width: "100%", }}

        variant="quilted"
        cols={4}
        rowHeight={141}
      >
        {
          itemData.map((item) => (
            <ImageListItem className='imageDiv' key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
              <span className='scale-in-ver-bottom'>{item.title}</span>
            </ImageListItem>
          ))
        }

      </ImageList>
    )
  }
}
const itemData = [
  {
    img: 'collection1.jpg',
    title: 'Man Shoes',
    rows: 4,
    cols: 1,
  },
  {
    img: 'collection2.jpg',
    title: 'Faragnace',
    rows: 2,
    cols: 2,
  },
  {
    img: 'collection3.png',
    title: 'Man Digger',
    rows: 2,
    cols: 1,
  },

  {
    img: 'collection4.jpg',
    title: 'Pumpy',
    rows: 2,
    cols: 1,
  },
  {
    img: 'collection5.jpg',
    title: 'Bags',
    rows: 2,
    cols: 2,

  },

];



const itemData2 = [
  {
    img: 'collection1.jpg',
    title: 'Man Shoes',
    rows: 3,
    cols: 2,
  },
  {
    img: 'collection2.jpg',
    title: 'Faragnace',
    rows: 1,
    cols: 2,
  },
  {
    img: 'collection3.png',
    title: 'Man Digger',
    rows: 2,
    cols: 2,
  },
  {
    img: 'collection5.jpg',
    title: 'Bags',
    rows: 1,
    cols: 2,
  },
  {
    img: 'collection4.jpg',
    title: 'Pumpy',
    rows: 1.5,
    cols: 2,
  },

];
const itemData3 = [
  {
    img: 'collection1.jpg',
    title: 'Man Shoes',
    rows: 3,
    cols: 4,
  },
  {
    img: 'collection2.jpg',
    title: 'Faragnace',
    rows: 1,
    cols: 4,
  },
  {
    img: 'collection3.png',
    title: 'Man Digger',
    rows: 1,
    cols: 2,
  },
  {
    img: 'collection4.jpg',
    title: 'Pumpy',
    rows: 1,
    cols: 2,
  },
  {
    img: 'collection5.jpg',
    title: 'Bags',
    rows: 1,
    cols: 4,
  },

];