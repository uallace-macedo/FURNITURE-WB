import { stats } from '../../data';

const Stats = () => {
  return (
    <div className="
    bg-accent
      rounded-[20px]
      p-12
    ">
      <div className="flex flex-wrap gap-y-8">
        {stats.map((item, index) => (
          <div className="
            min-h-[70px] w-3/6 flex flex-col
            justify-center odd:border-r
            lg:flex-1 lg:border-r lg:last:border-none
          " 
            key={index}
          >
            <div className="text-2xl font-semibold lg:text-4xl">
              <div>{item.value}</div>
            </div>
            <div className="text-base font-light max-w-[110px] mx-auto lg:text-xl">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats;