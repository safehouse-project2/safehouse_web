// import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";
// import * as React from "react";

// export default function Carousel() {
//     const slide1Template = () => {
//         <figure>
//             <img src="http://placekitten.com/400" />
//             <figcaption className="img-caption">Test caption</figcaption>
//         </figure>
//     }
//     return (
//         <div className='control-pane'>
//             <div className='control-section default-carousel-section'>
//                 <div className='control carousel-sample'>
//                     {/* Render the Carousel Component */}
//                     <CarouselComponent cssClass="default-carousel">
//                         <CarouselItemsDirective>
//                             <CarouselItemDirective template={this.itemTemplate1.bind(this)} />
//                             <CarouselItemDirective template={this.itemTemplate2.bind(this)} />
//                             <CarouselItemDirective template={this.itemTemplate3.bind(this)} />
//                             <CarouselItemDirective template={this.itemTemplate4.bind(this)} />
//                             <CarouselItemDirective template={this.itemTemplate5.bind(this)} />
//                         </CarouselItemsDirective>
//                     </CarouselComponent>
//                 </div></div>
//         </div>
//     );
// }