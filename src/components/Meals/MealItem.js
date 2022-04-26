const MealItem = (props) => {
  return (
    <li key={props.id}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </li>
  );
};

export default MealItem;
