function Loading() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white">
      <div className="flex flex-col justify-center text-gray-800 items-center gap-5">
        <img src="/transparent_logo.png" alt="logo" className="w-[200px]" />
        <span className="loading loading-bars  scale-110"></span>
      </div>
    </div>
  );
}

export default Loading;
