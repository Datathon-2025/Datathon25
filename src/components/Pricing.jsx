// import { Check, Star } from "lucide-react"

// const pricingPlans = [
//   {
//     title: "Basic",
//     price: "$19",
//     features: ["Feature 1", "Feature 2", "Feature 3"],
//     link: "#basic",
//   },
//   {
//     title: "Standard",
//     price: "$49",
//     features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
//     link: "#standard",
//     popular: true,
//   },
//   {
//     title: "Premium",
//     price: "$99",
//     features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
//     link: "#premium",
//   },
//   {
//     title: "Enterprise",
//     price: "$199",
//     features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"],
//     link: "#enterprise",
//   },
// ]

// const Pricing = () => {
//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Choose Your Perfect Plan</h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Select the plan that best fits your needs and start optimizing your workflow today.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {pricingPlans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl ${plan.popular ? "ring-2 ring-blue-500" : ""}`}
//             >
//               {plan.popular && (
//                 <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-lg">
//                   <Star className="inline-block w-4 h-4 mr-1" />
//                   Popular
//                 </div>
//               )}
//               <div className="p-8">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-4">{plan.title}</h3>
//                 <p className="text-4xl font-bold text-gray-900 mb-6">
//                   {plan.price}
//                   <span className="text-lg font-normal text-gray-600">/month</span>
//                 </p>
//                 <ul className="mb-8 space-y-4">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center text-gray-600">
//                       <Check className="w-5 h-5 mr-3 text-green-500" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <a
//                   href={plan.link}
//                   className={`block w-full py-3 px-6 text-center rounded-lg transition-colors duration-300 ease-in-out ${
//                     plan.popular
//                       ? "bg-blue-600 text-white hover:bg-blue-700"
//                       : "bg-gray-100 text-gray-900 hover:bg-gray-200"
//                   }`}
//                 >
//                   Choose Plan
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Pricing

