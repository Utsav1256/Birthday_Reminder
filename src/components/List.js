const List = (props) => {
  console.log("props", props);
  const { name, age, id, image } = props.person;
  console.log(name);
  return (
    <div className="w-full h-[65px] text-slate-50 flex items-center gap-10">
      <img
        className="w-[70px] h-[65px] rounded-full object-cover"
        src={image}
      />
      <div>
        <h3 className="text-lg text-slate-700 font-semibold">{name}</h3>
        <h4 className="text-slate-700 font-medium">{age}</h4>
      </div>
    </div>
  );
};
export default List;
