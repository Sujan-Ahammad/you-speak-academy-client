
import ClassessCard from './ClassessCard';
import { useQuery } from '@tanstack/react-query';

const Classess = () => {
  const { data: classess = [] } = useQuery(["class"], async () => {
    const res = await fetch("https://final-assaignment-project-server.vercel.app/addclass");
    return res.json();
  });

  const approvedClasses=classess.filter(classes=>classes.status==='approved')

  return (
    <div className='mt-5 p-5'>
        <h1 className='text-3xl rounded-full font-bold mx-auto text-center bg bg-cyan-300 p-3  lg:w-1/3'>Popular Classes</h1>
        <div className="p-4 grid grid-cols-1 ml-6 lg:ml-10 lg:grid-cols-3 gap-10">
          {approvedClasses.slice(0,6).map(classes=><ClassessCard
           key={classes._id}
            classes={classes}
            
            ></ClassessCard>)}
    </div>
    </div>
  );
};

export default Classess;
