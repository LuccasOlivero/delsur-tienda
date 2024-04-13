export default function Slider() {
  const items = Array.from({ length: 18 }, (_, index) => (
    <div key={index} className="w-[10rem]">
      Envío gratis
    </div>
  ));

  return (
    <div className="bg-black w-full h-[2.5rem] text-white font-semibold text-nowrap text-base overflow-hidden">
      <div className="slider-track">{items}</div>
    </div>
  );
}
