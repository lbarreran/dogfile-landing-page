import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { title, video } = pricing;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          />
        </div>
        <div className={`flex justify-center pt-12 my-12`}>
          {/* Mostrar el video de YouTube */}
          <div dangerouslySetInnerHTML={{ __html: video }} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
