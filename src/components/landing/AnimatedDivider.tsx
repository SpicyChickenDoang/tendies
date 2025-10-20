import CurvedLoop from "../ui/CurvedLoop";

export function AnimatedDivider() {
  return (
    <section className="w-full">
      {/* <div className="w-full max-w-7xl mx-auto text-center"> */}
        <CurvedLoop
          marqueeText="Delicious Tenders • Crispy & Juicy • Made Fresh Daily • "
          className="text-primary"
          interactive={false}
          curveAmount={0}
          direction='left'
          speed={3}
        />
      {/* </div> */}
    </section>
  );
}
