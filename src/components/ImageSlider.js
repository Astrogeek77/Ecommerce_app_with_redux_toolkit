import Image from 'next/image'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export function ImageSlider({ product }) {
//   const settings = {
//     infinite: true,
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // lazyLoad: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   }
  return (
    // <Slider
    //   {...settings}
    // //   autoPlay
    // //   infiniteLoop
    // //   showIndicators
    // //   showArrows
    // //   swipeable
    // //   stopOnHover
    // //   useKeyboardArrows
    // >
    //   {product.images.map((item) => (
    //     <div key={item}>
    //       <Image
    //         src={item}
    //         alt={item}
    //         width={640}
    //         height={640}
    //         sizes="100vw"
    //         style={{
    //           width: '100%',
    //           height: 'auto',
    //         }}
    //       ></Image>
    //     </div>
    //   ))}
    // </Slider>

    <Carousel
      autoPlay
      showIndicators
      showArrows
      swipeable
      stopOnHover
      useKeyboardArrows
      dynamicHeight
    >
      {product.images.map((item) => (
        <div key={item}>
          <Image
            src={item}
            alt={item}
            width={640}
            height={340}
            sizes="100vw"
            style={{
              width: 'min(500px, 100%)',
              height: '60vh',
            }}
          ></Image>
        </div>
      ))}
    </Carousel>
  )
}
