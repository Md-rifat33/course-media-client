import React from 'react';

const BlogCard: React.FC = () => {
  return (
    <div>
      {/* Card 1 */}
      <div className='h-52 w-full d-flex justify-center items-center card bg-base-300 rounded-box place-items-center mb-5'>
        <div>
          <h3 className='text-2xl text-center'>Qus : What is Cors?</h3>
        <p className='mt-3 ml-2'>Ans : <small className='text-base'>
          In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.
          </small></p>
        </div>
      </div>
      {/* Card 2 */}
      <div className='h-52 w-full d-flex justify-center items-center card bg-base-300 rounded-box place-items-center mb-5'>
        <div>
          <h3 className='text-2xl text-center'>Qus : Why are you using firebase?</h3>
        <p className='mt-3 ml-2'>Ans : <small className='text-base'>
          Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
          </small></p>
        </div>
      </div>
      {/* Card 3 */}
      <div className='h-52 w-full d-flex justify-center items-center card bg-base-300 rounded-box place-items-center mb-5'>
        <div>
          <h3 className='text-2xl text-center'>Qus : How does Private route work?</h3>
        <p className='mt-3 ml-2'>Ans : <small className='text-base'>
         The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
          </small></p>
        </div>
      </div>
      {/* Card 4 */}
      <div className='h-52 w-full d-flex justify-center items-center card bg-base-300 rounded-box place-items-center mb-5'>
        <div>
          <h3 className='text-2xl text-center'>Qus : What is Node? How does node Work?</h3>
        <p className='mt-3 ml-2'>Ans : <small className='text-base'>
        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          </small></p>
        </div>
      </div>
    
     
    </div>
  );
};

export default BlogCard;
