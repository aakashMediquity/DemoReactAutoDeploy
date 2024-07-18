
  const Shimmer = () => {
    return (
      <div>
      
      <div className="m-4   p-4 w-[250px] rounded-lg bg-gray-100 animate-pulse">
       
        <div className="w-full h-32 bg-gray-300 rounded-lg"></div>
        <div className="flex justify-between  items-center mt-4 mb-2">
          <div className="h-6 bg-gray-300 rounded w-3/5"></div>
          <div className="h-6 bg-gray-300 rounded w-1/5"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded mt-2"></div>
        <div className="flex justify-between mt-4">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        </div>
        </div>

        </div>
     
    );
  };
  
  
  export default Shimmer;



 export const ShimmerRestaurant = () => {
    return (
      <div className=' "text-center animate-pulse mx-56   '>
        <div className='flex justify-between items-center border-dashed border-b  pb-8 '>
          <div className='basis-6/12 space-y-2 '>
            <div className='bg-gray-200 h-6 rounded-md'></div>
            <div className='bg-gray-200 w-[50%] h-6 rounded-md'></div>
          </div>
  
          <div className='basis-2/12 bg-gray-200 h-14 rounded-md'></div>
        </div>
  
        {/* Restaurant Details */}
        <div className='w-full my-4 bg-gray-200 h-16'></div>
        <div className='space-y-4'>
          <div className='flex w-full justify-between gap-4'>
            <div className='space-y-2 grow py-4'>
              <div className='h-4 bg-gray-100 w-[80%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[50%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[20%] rounded-md'></div>
            </div>
            <div className='h-24 w-full basis-2/12 aspect-square md:aspect-video bg-gray-200 rounded-md'></div>
          </div>
          <div className='flex w-full justify-between gap-4'>
            <div className='space-y-2 grow py-4'>
              <div className='h-4 bg-gray-100 w-[80%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[50%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[20%] rounded-md'></div>
            </div>
            <div className='h-24 w-full basis-2/12 aspect-square md:aspect-video bg-gray-200 rounded-md'></div>
          </div>
          <div className='flex w-full justify-between gap-4'>
            <div className='space-y-2 grow py-4'>
              <div className='h-4 bg-gray-100 w-[80%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[50%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[20%] rounded-md'></div>
            </div>
            <div className='h-24 w-full basis-2/12 aspect-square md:aspect-video bg-gray-200 rounded-md'></div>
          </div>
          <div className='flex w-full justify-between gap-4'>
            <div className='space-y-2 grow py-4'>
              <div className='h-4 bg-gray-100 w-[80%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[50%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[20%] rounded-md'></div>
            </div>
            <div className='h-24 w-full basis-2/12 aspect-square md:aspect-video bg-gray-200 rounded-md'></div>
          </div>
          <div className='flex w-full justify-between gap-4'>
            <div className='space-y-2 grow py-4'>
              <div className='h-4 bg-gray-100 w-[80%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[50%] rounded-md'></div>
              <div className='h-2 bg-gray-100 w-[20%] rounded-md'></div>
            </div>
            <div className='h-24 w-full basis-2/12 aspect-square md:aspect-video bg-gray-200 rounded-md'></div>
          </div>
        </div>
      </div>
    );
  };
  
  // export default ShimmerRestaurant;