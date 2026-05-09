import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full w-2/3 rounded-4xl flex flex-nowrap justify-between gap-10 p-10 overflow-x-auto">
      {props.users.map((elem,idx)=>{
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
    </div>
  );
};

export default RightContent;
