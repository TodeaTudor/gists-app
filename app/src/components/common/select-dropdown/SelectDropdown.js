import styles from './SelectDropdown.module.css';

const SelectDropdown = (props) => {

  return (
    <select className={styles['dropdown']} onChange={props.handleDropdownChange} value={props.selectedValue}>
      {props.values.map((value) => {
        return <option key={value} value={value}>{value}</option>
      })}
    </select>
  );
}

export default SelectDropdown;
