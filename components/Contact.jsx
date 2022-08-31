import LazyImage from "./LazyImage";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-lines bg-attach-right py-16 md:py-20 lg:py-28 xl:py-32"
    >
      <div className={"grid grid-cols-1 md:grid-cols-2"}>
        <div className="px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28">
          <h2 className="text-2xl  lg:txt-3xl xl:text-4xl font-bold pb-4">
            Get in touch
          </h2>
          <p className="py-5 text-md font-normal">
            For any problem of suggestion fill free to contact us.
            <br /> We are always here to take your great ideas.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            method="POST"
            className="py-5"
          >
            <div className="py-5">
              <input
                type="text"
                placeholder="Name"
                className="py-5 px-8 border border-gray-400 block w-full outline-none"
              />
            </div>
            <div className="py-5">
              <input
                type="email"
                placeholder="Email"
                className="py-5 px-8 border border-gray-400 block w-full outline-none"
              />
            </div>
            <div className="py-5">
              <textarea
                placeholder="Message"
                className="py-5 px-8 border border-gray-500 block w-full outline-none h-36 resize-none"
              />
            </div>
            <div className="py-5">
              <button
                type="submit"
                className="py-5 px-4 app-bg block w-full outline-none text-center text-xs"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="px-5 sm:px-10 md:pl-0 md:pr-16 lg:pr-20 xl:pr-28 pb-0">
          <LazyImage
            alt="Shade your lights with Stractora"
            className="block w-full h-full object-cover"
            src="/images/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpeg"
            style={{ maxHeight: "44rem" }}
            alt="Contact us about project and shine today"
          />
        </div>
      </div>
    </div>
  );
}
