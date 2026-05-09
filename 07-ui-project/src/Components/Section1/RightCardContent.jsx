import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="h-full w-full absolute top-0 left-0 p-6 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-xl leading-relaxed text-white font-normal mb-14">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          quae explicabo nesciunt sed praesentium similique.
        </p>
        <div className="flex justify-between items-center">
          <button style={{backgroundColor:props.color}} className="text-white font-medium px-8 py-2 rounded-full">
            {props.tag}
          </button>
          <ArrowRight style={{backgroundColor:props.color}}
            size={40}
            className="bg-blue-600 text-white font- px-3 py-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
