import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
const product = [
  {
    id: 1,
    category: 'Necklace',
    name: 'Bird of Paradise Pendant',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-2-325x325.jpg',
    price: 100000,
  },
  {
    id: 2,
    category: 'Rings',
    name: 'Kalvesna Diamond Twig Ring',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Kalvesna-Diamond-Twig-Ring-2-325x325.jpg',
    price: 100000,
  },
  {
    id: 3,
    category: 'Earrings',
    name: 'Blue Stripes & Stone Earrings',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-2-325x325.jpg',
    price: 100000,
  },
  {
    id: 4,
    category: 'Bracelets',
    name: 'Cross Stripes & Stone Bracelet',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-Stripes-Stone-Bracelet-1-325x325.jpg',
    price: 100000,
  },
  {
    id: 5,
    category: 'Charms & Dangles',
    name: 'Echoes Necklace Extension Piece',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-1-325x325.jpg',
    price: 100000,
  },
  {
    id: 6,
    category: 'Neckless',
    name: 'Cross of Light Pendant',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-1-325x325.jpg',
    price: 100000,
  },
{
    id: 7,
    category: 'Bracelets',
    name: 'Classic Plain Stone Bracelet',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Classic-Plain-Stone-Bracelet-1-325x325.jpg',
    price: 100000,
  },
{
    id: 8,
    category: 'Bracelets',
    name: 'Rose Gold Bracelet',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rose-Gold-Bracelet-2-325x325.jpg',
    price: 100000,
  },
{
    id: 9,
    category: 'Neckless',
    name: 'Classic Shine Necklace',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Classic-Shine-Necklace-2-325x325.jpg',
    price: 100000,
  },
{
    id: 10,
    category: 'Earrings',
    name: 'Sterling Silver Dangles Earrings',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-325x325.jpg',
    price: 100000,
  },
{
    id: 11,
    category: 'Rings',
    name: 'Kalvesna Diamond Twig Ring',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Kalvesna-Diamond-Twig-Ring-1-325x325.jpg',
    price: 100000,
  },
{
    id: 12,
    category: 'Rings',
    name: 'Love Both Engagement Ring',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-1-325x325.jpg',
    price: 100000,
  },
{
    id: 13,
    category: 'Rings',
    name: 'Four Leaf Clover Rings',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-1-325x325.jpg',
    price: 100000,
  },
{
    id: 14,
    category: 'Neckless',
    name: 'Circle of Chain Necklace',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Chain-Necklace-1-325x325.jpg',
    price: 100000,
  },
{
    id: 15,
    category: 'Bracelets',
    name: 'Echoes Swing word Bracelet',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-325x325.jpg',
    price: 100000,
  },
{
    id: 16,
    category: 'Rings',
    name: 'Reflections Gold Rings',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-1-325x325.jpg',
    price: 100000,
  },
];

const policies = [
  {
    name: "International delivery",
    icon: GlobeAmericasIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  //Add to cart handler
  const addToCartHandler = (item) => {};
  let productDetails = {};
  let productColor;
  let cartItems = [];

  return (
    <div className="bg-white">
      <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">
                {productDetails?.product?.name}
              </h1>
              <p className="text-xl font-medium text-gray-900">
                Rs {productDetails?.product?.price}.00
              </p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  {productDetails?.product?.averageRating}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        productDetails?.product?.averageRating > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="ml-4 text-sm text-gray-300"></div>
                <div className="ml-4 flex">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {productDetails?.product?.totalReviews} total reviews
                  </a>
                </div>
              </div>
              {/* leave a review */}

              <div className="mt-4">
                <Link to={`/add-review/${productDetails?.product?._id}`}>
                  <h3 className="text-sm font-medium text-blue-600">
                    Leave a review
                  </h3>
                </Link>
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {product.images.map((image) => (
                <img
                  key={image.id}
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary
                      ? "lg:col-span-2 lg:row-span-2"
                      : "hidden lg:block",
                    "rounded-lg"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            <>
              {/* Color picker */}
              <div>
                <h2 className="text-sm font-medium text-gray-900">Color</h2>
                <div className="flex items-center space-x-3">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor}>
                    <div className="mt-4 flex items-center space-x-3">
                      {productColor?.map((color) => (
                        <RadioGroup.Option
                          key={color}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                            )
                          }>
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            style={{ backgroundColor: color }}
                            aria-hidden="true"
                            className={classNames(
                              "h-8 w-8 border border-black border-opacity-10 rounded-full"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>


              {/* add to cart */}
              <button
                onClick={() => addToCartHandler()}
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Add to cart
              </button>
              {/* proceed to check */}

              {cartItems.length > 0 && (
                <Link
                  to="/shopping-cart"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-green-800 py-3 px-8 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Proceed to checkout
                </Link>
              )}
            </>

            {/* Product details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <div className="prose prose-sm mt-4 text-gray-500">
                {productDetails?.product?.description}
              </div>
            </div>

            {/* Policies */}
            <section aria-labelledby="policies-heading" className="mt-10">
              <h2 id="policies-heading" className="sr-only">
                Our Policies
              </h2>

              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {policies.map((policy) => (
                  <div
                    key={policy.name}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                    <dt>
                      <policy.icon
                        className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="mt-4 text-sm font-medium text-gray-900">
                        {policy.name}
                      </span>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">
                      {policy.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>

        {/* Reviews */}
        <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
          <h2
            id="reviews-heading"
            className="text-lg font-medium text-gray-900">
            Recent reviews
          </h2>

          <div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
            {productDetails?.product?.reviews.map((review) => (
              <div
                key={review._id}
                className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            review.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {review?.message}
                    </h3>

                    <div
                      className="mt-3 space-y-6 text-sm text-gray-500"
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0">
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
