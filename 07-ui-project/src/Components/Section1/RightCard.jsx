import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-1/3 shrink-0 rounded-4xl bg-red-400 overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
      <RightCardContent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  );
};

export default RightCard;
