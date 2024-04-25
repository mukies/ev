function Footer() {
  return (
    <div className="bg-[#242424] flex flex-col gap-1 text-wrap text-gray-200 h-auto sm:h-[45vh]">
      <div className="flex flex-col sm:flex-row gap-2 px-4">
        <div className="border-2 border-red-500 flex-1">1</div>
        <div className="border-2 border-red-500 flex-1">2</div>
        <div className="border-2 border-red-500 flex-1">3</div>
        <div className="border-2 border-red-500 flex-1">4</div>
      </div>
      <span className="divider"></span>
      <p className="flex gap-3 items-center text-sm sm:text-lg">
        Copyright © 2016-2022 Jiangsu Bomern Energy Technology Co., Ltd.{" "}
        <span className="text-xs sm:text-lg">
          All Rights Reserved Bomern© 2022
        </span>
      </p>
    </div>
  );
}

export default Footer;
