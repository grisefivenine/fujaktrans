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

<div className="min-h-screen bg-black text-white p-6">

<div className="mx-auto max-w-7xl">

<h1 className="mb-4 text-5xl font-bold">
Referenciák
</h1>

<p className="mb-16 text-gray-400">
Munkáink teljes galériája
</p>


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
bg-black/95
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
className="object-contain"
/>

</div>

</div>

)}

</div>

</div>

)

}