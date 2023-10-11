export default function BodyPart() {
  return (
    <>
      <div className="relative w-screen">
        <img
          src="FotoAvatar.png"
          className="w-100 h-100 absolute inset-y-0 right-10 top-40"
        />
      </div>
      <div className="relative top-1/4 ml-72">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Hi, I'm Sergio Valdovinos
        </h1>
        <h1 className=" text-transparent mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-50 flex items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
            Front-End
          </span>
          Developer{" "}
          <img
            src="https://images.emojiterra.com/google/android-oreo/512px/1f44b.png"
            className="h-10 ml-2"
            alt="Thumbs Up Emoji"
          ></img>
        </h1>
        <br></br>
        <div className="w-1/3 text-justify ml-1">
          <p className="text-xl font-normal text-white lg:text-xl dark:text-gray-400">
            I am a person who likes challenges and constant learning. My
            greatest aspirations are to improve my skills as a front-end
            developer and, in the future, be a full-stack developer and be able
            to offer a greater impact in team works and companies.
          </p>
        </div>
        <br></br>
      </div>
    </>
  );
}
