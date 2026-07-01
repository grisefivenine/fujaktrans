"use client";

import Image from "next/image";
import { useState } from "react";

const images = Array.from(
  { length: 50 },
  (_, i) => i + 1
);

export default function GalleryPage() {

const [selected,setSelected]=useState<number|null>(null);

return(

<div className="min-h-screen bg-[#FFFFFF] text-black p-6">

<div className="mx-auto max-w-7xl">

<h1 className="mb-4 text-5xl font-bold">
Referenciák
</h1>

<p className="mb-16 text-gray-600">
Munkáink teljes galériája
</p>

<div className="rounded-[30px] overflow-hidden border border-black/10">

<video
controls
preload="metadata"
poster="/images/gallery-3.webp"
className="w-full"
>

<source
src="/videos/hero-video.mp4"
type="video/mp4"
/>

</video>

</div>

<div className="
grid
grid-cols-2
md:grid-cols-3
xl:grid-cols-4
gap-5
">

{images.map((image)=>(

<div
key={image}
onClick={()=>setSelected(image)}
className="
group
relative
aspect-square
overflow-hidden
rounded-[30px]
cursor-pointer
"
>

<Image
  src={`/images/gallery-${image}.webp`}
  alt=""
  fill
  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
  className="
    object-cover
    transition
    duration-700
    group-hover:scale-110
  "
/>

</div>

))}

</div>


{selected && (

<div
onClick={()=>setSelected(null)}
className="
fixed
inset-0
z-[999]
bg-[#FFFFFF]/95
flex
items-center
justify-center
"
>

<div className="
relative
w-[95vw]
h-[90vh]
">

<Image
  src={`/images/gallery-${selected}.webp`}
  alt=""
  fill
  sizes="100vw"
  className="object-contain"
/>

</div>

</div>

)}

</div>

</div>

)

}