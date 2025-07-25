import CTA from "../../components/sections/CTA"
import Pricing from "../../components/sections/Pricing"

const PricingPlan = () => {
  return (
    <div className="pt-10">
      <Pricing />
      <div className="mb-20"></div>
      <CTA imgSrc="bg-[url('/images/cta/image-3.png')]" />
    </div>
  )
}

export default PricingPlan