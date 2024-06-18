const Picture = () => {
  return (
    <div className="grid gap-4 mt-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/property-a/property-a-02.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <a href="#" className="hover:opacity-20">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/property-a/property-a-01.png"
            alt=""
          />
        </a>
        <a href="#" className="hover:opacity-30">
          <img
            className="h-auto max-w-full rounded-lg opacity-20 border-4 border-blue-400"
            src="/property-a/property-a-02.png"
            alt=""
          />
        </a>
        <a href="#" className="hover:opacity-30">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/property-a/property-a-03.png"
            alt=""
          />
        </a>
        <a href="#" className="hover:opacity-30">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/property-a/property-a-04.png"
            alt=""
          />
        </a>
        <a href="#" className="hover:opacity-30">
          <img
            className="h-auto max-w-full rounded-lg"
            src="/property-a/property-a-05.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export { Picture };
