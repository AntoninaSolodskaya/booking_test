import React, {Component} from 'react';
import Select from 'react-select';

class SelectHalls extends Component {
  
  render(){
    const {halls, handleChange, clearable, selectedOption} = this.props;
    let options = halls.map(hall => {
      return { value: hall._id, label: hall.title, description: hall.description, imageUrl: hall.imageURL }
    });
    
    return (
      <Select
        isMulti
        name="category" 
        value={selectedOption}
        onChange={handleChange}
        clearable={clearable}
        options={options}
        labelKey='title'
        valueKey='title'  
      />
    )
  }
}

export default SelectHalls;