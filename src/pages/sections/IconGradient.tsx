// const IconGradient = ({
//   component,
// }: {
//   component: React.ElementType | undefined;
// }) => {
//   if (!component) return null;
//   const Component = component;
//   return (
//     <div className="relative flex items-center justify-center size-10">
//       <svg className="absolute w-full h-full">
//         <defs>
//           <linearGradient
//             id="icon-gradient"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="100%"
//           >
//             <stop offset="0%" stopColor="rgb(110,231,183)" />
//             <stop offset="100%" stopColor="rgb(56,189,248)" />
//           </linearGradient>
//         </defs>
//       </svg>
//       <Component className="size-9 fill-[url(#icon-gradient)]" />
//     </div>
//   );
// };

// export default IconGradient