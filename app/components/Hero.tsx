import Image from "next/image";

export default function Hero() {
  return (
    <section className="my-8 flex">
      <article>
        <h1 className="text-4xl">
          Fragancias de alta calidad y a precios bajos  
        </h1>
        <p>
          Explora nuestra exclusiva colección de fragancias sofisticadas y desodorantes de alta calidad. Nuestros productos de aseo personal están formulados para brindarte frescura duradera, protección confiable y aromas que resalten tu personalidad. Desde fragancias clásicas hasta desodorantes innovadores, encuentra tu aroma perfecto aquí.
        </p>
      </article>
      <Image width={120} height={120} src={'/heroimg.jpg'} alt="fragancias y desodorantes" />
    </section>
  )
}