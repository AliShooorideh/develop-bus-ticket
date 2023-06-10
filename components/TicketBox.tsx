interface IProduct {
  loc1: string;
  loc2: string;
  price: number;
  time: number;
  departure: number;
}
export default function TicketBox(item: IProduct) {
  return (
    <div className="relative w-full rounded-2xl bg-white p-2 pb-5 shadow-lg">
      <div className="absolute -top-6 left-10 rounded-full bg-[#9a7fde] p-3 shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.3em"
          viewBox="0 0 576 512"
          fill="#fff"
        >
          <path d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z" />
        </svg>
      </div>
      <div className="mt-5 flex justify-between px-1">
        <div className="space-y-4 ">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-green-500 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="h-5 w-5 -rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#9a7fde]">
                {item.loc1}
              </span>
              <span className="text-sm font-bold text-gray-400">date</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex w-9 justify-center rounded-full bg-[#9a7fde] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2em"
                viewBox="0 0 384 512"
                fill="#fff"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#9a7fde]">
                {item.loc2}
              </span>
              <span className="text-sm font-bold text-gray-400">date</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <span className="text-sm text-gray-400">Travel Time : </span>
            <span className="text-green-700">{item.time} min</span>
          </div>
          <div>
            <span className="text-sm text-gray-400">Departure On : </span>
            <span className="text-green-700">{item.departure} mint</span>
          </div>
          <div>
            <span className="text-sm text-gray-400">Price : </span>
            <span className="text-3xl font-bold text-green-500">
              ${item.price}
            </span>
          </div>
          <div className="flex justify-end pt-4">
            <button className="w-full rounded-full bg-[#9a7fde] py-2 font-bold text-white">
              BUY TICKET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
