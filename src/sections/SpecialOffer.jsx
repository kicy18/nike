import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">

        
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
      
            <span className="text-coral-red "> Special
               </span> Offer
            </h2>
            <p className="mt-4 lg:max-w-lg info-text ">
            Welcome to Shoe Haven, your one-stop destination for all things footwear! Whether you're looking for trendy sneakers, comfortable casuals, or elegant formal shoes. </p>
            <p className="mt-4 lg:max-w-lg info-text ">With an extensive collection from top brands and state-of-the-art designs, we ensure both fashion and comfort. Discover your perfect pair today!
             </p>
            <div className="mt-11 flex flex-wrap gap-4">
            <Button label='Shop now' iconURL={arrowRight} />
            <Button label='Learn more ' backgroundColor = 'bg-white' borderColor = 'border-slate-gray' textColor = 'text-slate-gray'/>
              </div>
            </div>
    </section>
  )
}

export default SpecialOffer