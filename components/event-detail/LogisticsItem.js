function LogisticsItem (props) {
  const { icon: Icon } = props;

  return (
    <li className="flex text-2xl items-center flex-col text-center text-[#aefff8] md:items-start md:text-left">
      <span className="mr-4 text-[#18e0d0]">
        <Icon className="w-8 h-8" />
      </span>
      <span className="content w-full p-2 text-center md:w-7/12 md:text-left">{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
