'use client'

import AddToCart from '@/components/AddToCart'
import ProductRate from '@/components/ProductRate'
import { data } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'

import { ImageSlider } from '../../../components/ImageSlider'

export default function ProductDetailPage({ params: { id } }) {
  // console.log(data.products)
  // console.log(id)
  const product = data.products.find((x) => x.id == id)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid">
        <div className="flex justify-center">
          {product.images.length > 1 ? (
            <ImageSlider product={product} />
          ) : (
            // <div>Carousel</div>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={640}
              height={640}
              sizes="100vw"
              style={{
                width: 'min(500px, 100%)',
                height: '60vh',
              }}
            ></Image>
          )}
        </div>
        <div className="grid md:grid-cols-12 mt-16 place-items-stretch align-items-stretch gap-2">
          <div className="md:col-span-8">
            <ul>
              <li>
                <h1 className="text-lg">{product.name}</h1>
              </li>

              <li>
                <ProductRate rate={product.rating} count={product.numReviews} />
              </li>

              <li>
                <hr className="my-3" />
                Description:
                <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="card p-5">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>₹{product.price}</div>
              </div>

              <AddToCart product={product} redirect={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
