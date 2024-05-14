import {useEffect, useState} from 'react';

function Form({movieSearch}) {
    //State to hold the data of our form
    const [formData, setFormData] = useState({
        searchTerm: "", 
    });

    //handleChange updates formData when we type into the form
    const handleChange = (event) => {
        //Use the event object to detect key and value to update
        setFormData({...formData, [event.target.name]: [event.target.value]});
    }

    const handleSubmit = (event) => {
        //Prevent page from refreshing on form submission because that blows up state
        event.preventDefault();
        //Does this instead - passes search term to movieSearch prop, the getMovie function
        movieSearch(formData.searchTerm);
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="searchTerm"
                onChange={handleChange}
                value={formData.searchTerm} 
            />
            <input 
                type="submit"
                value="submit"
             />
        </form>
        
        </div>
  )
}

export default Form