import { useSelector, useDispatch } from 'react-redux';
import { changeFilterRedux } from '../redux/filter/filterSlice';
import { Input, Label } from './Filter.styled';

export default function Filter() {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(changeFilterRedux(event.currentTarget.value));
  };

  return (
    <Label className="Lable">
      Filter
      <Input type="text" value={filterValue} onChange={changeFilter}></Input>
    </Label>
  );
}
