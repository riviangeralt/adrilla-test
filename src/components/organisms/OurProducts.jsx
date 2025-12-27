import { GradientText } from '../atoms';
import { Dots2Png, Product1Png, Product2Png, Product3Png } from '../../assets';
import { ProductCard } from '../molecules';

const OurProducts = () => {
  const products = [
    {
      productTag: "DocSim",
      title: "AI-Powered Document Similarity Engine",
      features: [
        "Detects near-duplicates and tampered documents.",
        "Identifies fraudulent patterns across large repositories.",
        "Multi-language support for global adaptability."
      ],
      benefits: [
        "Save 30% time on manual checks.",
        "Reduce document fraud by up to 40%."
      ],
      image: Product1Png,
      isLeftAligned: true
    },
    {
      productTag: "DocPilot",
      title: "Streamline Document Workflows with Automation",
      features: [
        "Automates document collection, routing, and task assignments.",
        "Real-time tracking with advanced dashboards.",
        "Seamless integration with enterprise systems via APIs."
      ],
      benefits: [
        "Reduce turnaround times by 50%.",
        "Improve operational efficiency with minimal manual effort."
      ],
      image: Product2Png,
      isLeftAligned: false
    },
    {
      productTag: "Doxtract",
      title: "Extract, Validate, and Process Documents with Ease",
      features: [
        "OCR and NLP-based data extraction.",
        "Handles unstructured documents across industries.",
        "Validates fields using external data sources."
      ],
      benefits: [
        "Process 10,000+ documents in minutes.",
        "Achieve 99% data accuracy with AI-driven validation."
      ],
      image: Product3Png,
      isLeftAligned: true
    }
  ];

  return (
    <section className="pt-3.75 pb-7 relative">
      <img
        src={Dots2Png}
        alt="Decorative dots"
        className="absolute left-0 -top-2 z-0"
      />
      <div className="text-center relative z-10">
        <p className="font-manrope font-bold text-2xl leading-[100%] text-center">
          <GradientText>features and benefits.</GradientText>
        </p>
        <h2 className="font-raleway font-semibold text-[48px] leading-[100%] tracking-[-1px] text-center text-[#141219] mt-4">
          Our Products
        </h2>
      </div>
      
      <div className="flex flex-col gap-28 mt-20">
        {products.map((product) => (
          <ProductCard 
            key={JSON.stringify(product)}
            productTag={product.productTag}
            title={product.title}
            features={product.features}
            benefits={product.benefits}
            image={product.image}
            isLeftAligned={product.isLeftAligned}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;